import { Request, Response } from 'express';
import User, { generatePasswordHash } from '../models/User';
import JwtBuilder from '../security/JwtBuilder';
import UserService from '../services/UserService';

const userService = new UserService();
const jwtBuilder = new JwtBuilder();

export default class AuthController {
  async login(req:Request, res:Response) {
    const user:User = req.body.user;
    if(user){
      const token = jwtBuilder.generateToken(user);
      res.set('Authorization', "Bearer " + token);
      res.status(200).send();
    }
  };

  async register(req:Request, res:Response) {
    const user:User = req.body;
    user.password = await generatePasswordHash(user.password);
    const userId = await userService.create(user);
    res.status(201).send({ user_id: userId });
  };
}