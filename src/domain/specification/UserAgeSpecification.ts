import User from '../entity/UserWithSpecification';
import { AbstractSpecification } from './Specification';

export default class UserAgeSpecification extends AbstractSpecification<User> {
  isSatisfiedBy(user: User): boolean {
    return user.age >= 18;
  }
}