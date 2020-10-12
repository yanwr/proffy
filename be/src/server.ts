import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import AuthorizationRouter from './routes/AuthRoutes';
import UserRouter from './routes/UserRoutes';
import ClassesRouter from './routes/ClassesRoutes';
import ConnectionRouter from './routes/ConnectionsRoutes';
import ExceptionMiddlewares from './middlewares/ExceptionMiddlewares';

dotenv.config();
const APP = express();

APP.use(cors());
APP.use(express.json());
APP.use([
  AuthorizationRouter,
	UserRouter, 
	ClassesRouter, 
	ConnectionRouter
]);
APP.use(ExceptionMiddlewares);

APP.listen(3333);