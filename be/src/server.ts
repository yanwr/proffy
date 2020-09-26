import express from 'express';
import cors from 'cors';

import TeacherRouterController from './controllers/TeacherController';
import ClassesRouterController from './controllers/ClassesController';
import ConnectionRouterController from './controllers/ConnectionsController';

const APP = express();

APP.use(cors());
APP.use(express.json());
APP.use([
    TeacherRouterController, 
    ClassesRouterController, 
    ConnectionRouterController
]);

APP.listen(3333);