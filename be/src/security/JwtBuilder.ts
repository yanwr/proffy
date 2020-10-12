import JWT from 'jsonwebtoken';
import User from "../models/User";
import dotenv from 'dotenv';

dotenv.config();

export default class JwtBuilder {
  private JWT_SECRET_KEY:any;
  private JWT_EXPIRATION;

  constructor(){
    this.JWT_EXPIRATION = process.env.JWT_EXPIRATION;
    this.JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;
  }

  generateToken(user:User):string {
    try {
      const token = JWT.sign(
        { id: user.id }, 
        this.JWT_SECRET_KEY, 
        { 
          expiresIn: Number(this.JWT_EXPIRATION)
        }
      );
      return token;
    } catch (ex) {
      console.error(ex);
      throw new Error('Error to create token');
    }
  };

  tokenIsValid(token:string) {
    try {
      const tokenPayload = JWT.verify(token, this.JWT_SECRET_KEY);
      console.log("Token valid: ", tokenPayload);
      return tokenPayload;
    } catch (ex) {
      console.error(ex);
      throw new Error('Invalid Token');
    }
  }
}