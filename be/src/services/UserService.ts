
import { USERS } from '../database/models/00_USER';
import User from '../models/User';

export default class ClassService {
    async create(user:User, trxProvider:any) {
        try {
            const repositoryTrx = await trxProvider();
            const user_id = await repositoryTrx(USERS.table).insert({
                name: user.name,
                avatar: user.avatar,
                phone: user.phone,
                bio: user.bio
            });
            return user_id[0];
        } catch (ex) {
            console.error(ex);
            throw new Error;
        }
    };
}