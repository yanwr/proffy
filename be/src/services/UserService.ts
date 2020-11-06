
import repository from '../database';
import { USERS } from '../database/migrates/00_USER';
import DataInvalidException from '../exceptions/DataInvalidException';
import User from '../models/User';

export default class UserService {
  async index() {
    try {
      const users = await repository(USERS.table).select(USERS.select.all);
      return users;
    } catch (ex) {
      console.error(ex);
      throw new Error("Fail to get all users");
    }
  };

	async create(user:User) {
		try {
			const user_id = await repository(USERS.table).insert({
				name: user.name,
				email: user.email,
				password: user.password,
				avatar: user.avatar,
				phone: user.phone,
				bio: user.bio
			});
			return user_id[0];
		} catch (ex) {
			console.error(ex);
		}
  };

  async showById(userId:number) {
    try {
      const user:User = await repository(USERS.table)
        .where(USERS.column.id, "=", userId)
        .select(USERS.select.all).first();
      return user;
    } catch (ex) {
      console.error(ex);
			throw new Error(`Fail to show by ID: ${userId}`);
    }
  };

  async showByEmail(userEmail:string) {
    try {
      const user:User = await repository(USERS.table)
        .where(USERS.column.email, "=", userEmail)
        .select(USERS.select.all).first();
      return user;
    } catch (ex) {
      console.error(ex);
			throw new Error(`Fail to show by EMAIL: ${userEmail}`);
    }
  };
}