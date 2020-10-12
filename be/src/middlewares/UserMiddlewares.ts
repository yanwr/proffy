import { Response, Request, NextFunction } from 'express';
import User, { comparePasswords } from '../models/User';
import UserService from '../services/UserService';

const userService = new UserService();

export default class UserMiddlewares {
  async verifyUserPasswordMatch(req:Request, res:Response, next:NextFunction) {
    const { email, password } = req.body;
    const user:User = await userService.showByEmail(email);
    if(!user){
      res.status(404).send({});
    }
    if((await comparePasswords(password, user.password))) {
      req.body = {user};
      return next();
    }
  };
}