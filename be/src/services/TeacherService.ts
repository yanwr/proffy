import Teacher from '../models/Teacher';
import UserService from './UserService';
import ClassesService from './ClassesService';
import ClassesScheduleService from './ClassesScheduleService';
import ClassesSchedule from '../models/ClassesSchedule';
import repository from '../database';

export default class TeacherService {

    private userService = new UserService();
    private classesService = new ClassesService();
    private classesScheduleService = new ClassesScheduleService();

    async create(teacher:Teacher) {
        const { avatar, bio, name, phone, price, schedule, subject } = teacher;
        
        const trxProvider = repository.transactionProvider();
        try {
            const user = { name, avatar, bio, phone };
            const user_id = await this.userService.create(user, trxProvider);

            const classes = { user_id, price, subject };
            const classes_id = await this.classesService.create(classes, trxProvider);

            const classesSchudule = schedule
                .map((x:ClassesSchedule) => ({ ...x, classes_id }));
            await this.classesScheduleService.create(classesSchudule, trxProvider);

            (await trxProvider()).commit();
        } catch (ex) {
            (await trxProvider()).rollback();
            console.error(ex);
            throw new Error;
        }
    };
}