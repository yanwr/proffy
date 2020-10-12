import { Request, Response } from 'express';
import ConnectionService from '../services/ConnectionService';

const connectionService = new ConnectionService();

export default class ConnectionController {
	async index(req:Request, res:Response) {
		connectionService.index().then(
			total => (res.json({total}))
		).catch(
			() => (res.status(400).send("Has an error"))
		);
	};
	
	async create(req:Request, res:Response) {
		const { user_id } = req.body;
		connectionService.create(user_id).then(
			() => (res.status(201).send())
		).catch(
			() => (res.status(400).send("Has an error"))
		);
	};
}