import express, { Request, Response } from 'express';
import ClassesService from '../services/ClassesService';

const routes = express.Router();
const classesService = new ClassesService();

routes.get(
    '/classes',
    async (req:Request, res:Response) => {
        const filters = req.query;
        if (!filters.weekDay || !filters.time || !filters.subject) {
            classesService.index().then(
                () => (res.send("All classes"))
            ).catch(
                () => (res.send("Had an error"))
            );
        }
        classesService.show(filters).then(
            data => (res.json(data))
        ).catch(() => (res.status(400).send("Had an error")))
    }
);

export default routes;