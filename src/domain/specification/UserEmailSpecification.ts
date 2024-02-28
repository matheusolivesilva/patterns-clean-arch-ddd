import User from '../entity/UserWithSpecification'
import { AbstractSpecification } from './Specification'

export default class UserEmailSpecification extends AbstractSpecification<User> {
  isSatisfiedBy(user: User): boolean {
    return !!String(user.email).toLowerCase().match(/^[\w-]+(\.[\w-]+)*@([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/);
  }
}