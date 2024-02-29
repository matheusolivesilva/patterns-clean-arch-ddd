import { sign, verify } from 'jsonwebtoken';
import User from '../entity/User';

export default class TokenGenerator {
  constructor(readonly key: string) {}

  generate (user: User, expiresIn: number, issueDate: Date) {
    const payload = { 
      email: user.email.getValue(), 
      iat: issueDate.getTime(), 
      expiresIn 
    };
    return sign(payload, this.key);
  }

  verify (token: string): any {
    return verify(token, this.key);
  }
}