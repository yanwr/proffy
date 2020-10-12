import { Request, Response, NextFunction } from 'express';
import StandardError from '../exceptions/StandardError';
import DataInvalidException from '../exceptions/DataInvalidException';

export default (error:Error, req:Request, res:Response, next:NextFunction) =>  {
  console.log("asdddd");
      const err:StandardError = new StandardError(
        404, 
        "Data not found", 
        error.message, req.url
      );
      return res.status(404).send(err);
}