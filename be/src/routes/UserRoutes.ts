import express from 'express';
import UserController from '../controllers/UserController';
import AuthMiddlewares from '../middlewares/AuthMiddlewares';

const routes = express.Router();
const authMiddlewares = new AuthMiddlewares();
const userController = new UserController();

routes.get(
  '/users',
  [
    authMiddlewares.isTokenExisting,
    userController.index
  ]
);

export default routes;