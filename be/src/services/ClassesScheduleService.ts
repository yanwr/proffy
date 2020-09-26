import repository from '../database';
import { CLASSES_SCHEDULE } from '../database/models/02_CLASSES_SCHEDULE';
import ClassesSchedule from '../models/ClassesSchedule';

export default class ClassesService {

    async create(classesSchudule:ClassesSchedule[], trxProvider:any) {
        try {
            const repositoryTrx = await trxProvider();
            await repositoryTrx(CLASSES_SCHEDULE.table).insert(classesSchudule);
        } catch (ex) {
            console.error(ex);
            throw new Error;
        }
    };
}