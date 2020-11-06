import repository from '../database';
import { USERS } from '../database/migrates/00_USER';
import { CLASSES } from '../database/migrates/01_CLASSES';
import { CLASSES_SCHEDULE } from '../database/migrates/02_CLASSES_SCHEDULE';
import ClassesSchedule from '../models/ClassesSchedule';
import Classes from '../models/Classes';
import ClassesScheduleService from './ClassesScheduleService';

export default class ClassesService {
	private classesScheduleService = new ClassesScheduleService();

	async create(newClasses:Classes) {
		const { price, schedule, subject, user_id } = newClasses;
		const trxProvider = repository.transactionProvider();
		try {
			const repositoryTrx = await trxProvider();
			const classes_id = await repositoryTrx(CLASSES.table).insert({
				user_id,
				price,
				subject,
			});

			const classesSchudule = schedule
				.map((x:ClassesSchedule) => ({ ...x, classes_id: classes_id[0] }));
			await this.classesScheduleService.create(classesSchudule, trxProvider);

			(await trxProvider()).commit();
		} catch (ex) {
			(await trxProvider()).rollback();
			console.error(ex);
			throw new Error;
		}
	};

	async index() {
		try {
			const classes = await repository(CLASSES.table)
				.join(USERS.table, CLASSES.column.user_id, "=", USERS.column.id)
				.select([CLASSES.select.all, USERS.select.all]);
			return classes;
		} catch (ex) {
			console.error(ex);
			throw new Error;
		}
	};
	
	async show(filters:any) {
		try {
			const { weekDay, subject, time } = filters;
			const classes = await repository(CLASSES.table)
				.whereExists(function() { 
					this.select(CLASSES_SCHEDULE.select.all)
						.from(CLASSES_SCHEDULE.table)
						.whereRaw('`classes_schedule`.`classes_id` = `classes`.`id`')
						.whereRaw('`classes_schedule`.`weekDay` = ??', [+weekDay])
						.whereRaw('`classes_schedule`.`startTime` <= ?', [time])
						.whereRaw('`classes_schedule`.`endTime` > ?', [time])
				})
				.where(CLASSES.column.subject, "=", subject)
				.join(USERS.table, CLASSES.column.user_id, "=", USERS.column.id)
				.select([CLASSES.select.all, USERS.select.all]);
			return classes;
		} catch (ex) {
			console.error(ex);
			throw new Error;
		}
	};
}