import express from 'express';
import AuthMiddlewares from '../middlewares/AuthMiddlewares';
import ConnectionsController from '../controllers/ConnectionsController'

const routes = express.Router();
const authMiddlewares = new AuthMiddlewares();
const connectionsController = new ConnectionsController();

routes.get(
	'/connections',
	[
    authMiddlewares.isTokenExisting,
    connectionsController.index
  ]
);

routes.post(
	'/connections',
	[
    authMiddlewares.isTokenExisting,
    connectionsController.create
  ]
);

export default routes;