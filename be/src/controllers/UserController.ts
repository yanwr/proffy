import { Request, Response } from 'express';
import UserService from '../services/UserService';

const userService = new UserService();

export default class UserController {
	
	async index(req:Request, res:Response) {
		userService.index().then(
				users => res.json(users)
		).catch(
				() => res.status(500).send({})
		)
	};
}