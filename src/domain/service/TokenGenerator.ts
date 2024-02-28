import { sign } from 'jsonwebtoken';
import User from '../entity/User';

export default class TokenGenerator {
  constructor(readonly key: string) {}

  generate (user: User, expiresIn: number, issueDate: Date) {
    const payload = { 
      email: user.email, 
      iat: issueDate.getTime(), 
      expiresIn 
    };
    return sign(payload, this.key);
  }
}