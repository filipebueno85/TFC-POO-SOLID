import { NextFunction, Request, Response } from 'express';
import * as Joi from 'joi';
import { JwtPayload } from 'jsonwebtoken';
import JWT from '../utils/JWT';

const schemaUser = Joi.object({
  email: Joi.string().email().required()
    .messages({
      'email.base': 'Invalid email or password',
      'any.required': 'All fields must be filled',
    }),
  password: Joi.string().min(6).required().messages({
    '': '"password" must be a string',
    'string.min': 'Invalid email or password',
    'any.required': 'All fields must be filled',
  }),
});

export default class Validate {
  static async validateLoginBody(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> {
    const { error } = schemaUser.validate(req.body);

    if (error) return res.status(400).json({ message: error.message });

    return next();
  }

  static async validateToken(req: Request, res: Response, next: NextFunction):
  Promise<Response | void> {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(404).json({ message: 'Token not found' });
    }
    const invalidToken = JWT.verify(token);
    if (invalidToken === 'Token must be a valid token') {
      return res.status(401).json({ message: invalidToken });
    }
    const validToken = JWT.verify(token) as JwtPayload;
    if (validToken.role === 'admin') {
      return res.status(200).json({ role: validToken });
    }
    next();
  }
}
