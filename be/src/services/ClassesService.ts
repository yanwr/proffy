import repository from '../database';
import { USERS } from '../database/models/00_USER';
import { CLASSES } from '../database/models/01_CLASSES';
import { CLASSES_SCHEDULE } from '../database/models/02_CLASSES_SCHEDULE';
import Classes from '../models/Classes';

export default class ClassesService {

    async create(classes:Classes, trxProvider:any) {
        try {
            const repositoryTrx = await trxProvider();
            const classes_id = await repositoryTrx(CLASSES.table).insert({
                user_id: classes.user_id,
                price: classes.price,
                subject: classes.subject
            });
            return classes_id[0];
        } catch (ex) {
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