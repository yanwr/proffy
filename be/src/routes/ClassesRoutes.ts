import express from 'express';
import AuthMiddlewares from '../middlewares/AuthMiddlewares';
import ClassesController from '../controllers/ClassesController';

const routes = express.Router();
const authMiddlewares = new AuthMiddlewares();
const classesController = new ClassesController();

routes.get(
	'/classes',
	[
    authMiddlewares.isTokenExisting,
    classesController.findByFiltersOrIndexAll
  ]
);

routes.post(
	'/classes',
	[
    authMiddlewares.isTokenExisting,
    classesController.create
  ]
);

export default routes;