import express, { Request, Response } from 'express';
import Teacher from '../models/Teacher';
import TeacherService from '../services/TeacherService';

const routes = express.Router();
const teacherService = new TeacherService();

routes.post(
    '/classes/teachers',
    async (req:Request, res:Response) => {
        const teacher:Teacher = req.body;
        teacherService.create(teacher).then(
            () => { return res.status(201).send()}
        ).catch(
            () => { return res.status(400).send()}
        );
    }
);

export default routes;