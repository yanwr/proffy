import repository from '../database';
import { CONNECTION_USER } from '../database/migrates/04_CONNECTION_USER';


export default class ConnectionService {
	async index() {
		try {
			const connections = await repository(CONNECTION_USER.table)
				.count('* as total');
			const { total } = connections[0];
			return total;
		} catch (ex) {
			console.error(ex);
			throw new Error();
		}
	};

	async create(user_id:number) {
		try {
			await repository(CONNECTION_USER.table).insert({
				user_id,
			});
		} catch (ex) {
			console.error(ex);
			throw new Error();
		}
	};
}