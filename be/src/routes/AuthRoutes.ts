import express from 'express';
import AuthController from '../controllers/AuthController';
import UserMiddlewares from '../middlewares/UserMiddlewares';

const routes = express.Router();
const authController = new AuthController();

const userMiddlewares = new UserMiddlewares();

routes.post(
  '/auth/login',
  [
    userMiddlewares.verifyUserPasswordMatch,
    authController.login
  ]
);
routes.post(
  '/auth/register',
  authController.register
);

export default routes