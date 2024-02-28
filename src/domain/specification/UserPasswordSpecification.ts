import User from '../entity/UserWithSpecification'
import { AbstractSpecification } from './Specification'

export default class UserPasswordSpecification extends AbstractSpecification<User> {
  isSatisfiedBy(user: User): boolean {
    return user.password.length >= 8;
  }
}