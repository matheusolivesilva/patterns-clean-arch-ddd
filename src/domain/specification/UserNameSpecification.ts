import User from '../entity/UserWithSpecification'
import { AbstractSpecification } from './Specification'

export default class UserNameSpecification extends AbstractSpecification<User> {
  isSatisfiedBy(user: User): boolean {
    return user.name.split(' ').length >= 2;
  }
}