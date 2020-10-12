import { Request, Response } from 'express';
import Classes from '../models/Classes';
import ClassesService from '../services/ClassesService';

const classesService = new ClassesService();

export default class ClassesController {
	async findByFiltersOrIndexAll(req:Request, res:Response) {
		const filters = req.query;
		if (!filters.weekDay || !filters.time || !filters.subject) {
			classesService.index().then(
				data => (res.json(data))
			).catch(
				() => (res.send("Had an error"))
			);
		} else {
			classesService.show(filters).then(
				data => (res.json(data))
			).catch(() => (res.status(400).send("Had an error")))
		}
	};
	
	async create(req:Request, res:Response) {
		const classes:Classes = req.body;
		classesService.create(classes).then(
			() => { return res.status(201).send()}
		).catch(
			() => { return res.status(400).send()}
		);
	};
}