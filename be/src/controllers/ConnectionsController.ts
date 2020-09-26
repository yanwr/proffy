import express, { Request, Response } from 'express';
import ConnectionService from '../services/ConnectionService';

const routes = express.Router();
const connectionService = new ConnectionService();

routes.get(
    '/connections',
    async (req:Request, res:Response) => {
        connectionService.index().then(
            total => (res.json({total}))
        ).catch(
            () => (res.status(400).send("Has an error"))
        );
    }
);

routes.post(
    '/connections',
    async (req:Request, res:Response) => {
        const { user_id } = req.body;
        connectionService.create(user_id).then(
            () => (res.status(201).send())
        ).catch(
            ex => (res.status(400).send("Has an error"))
        );
    }
);

export default routes;