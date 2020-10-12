import { Response, Request, NextFunction } from 'express';
import JwtBuilder from '../security/JwtBuilder';

const jwtBuilder = new JwtBuilder();

export default class AuthMiddlewares {
  async isTokenExisting(req:Request, res:Response, next:NextFunction) {
    const { authorization } = req.headers;
    if (authorization) {
      try {
        const [ scheme, token ] = authorization.split(' ');
        if (scheme !== 'Bearer') {
          throw new Error();
        }
        if ((jwtBuilder.tokenIsValid(token))) {
          return next();
        }
      } catch (ex) {
        console.error(ex);
        return res.status(403).send();
      }
    } 
    return res.status(401).send();
  };
}