export default class User {
  constructor(
    readonly name: string, 
    readonly email: string,
    readonly password: string, 
    readonly age: number
    ) {
      if (this.name.split(' ').length < 2) throw new Error ('Invalid name');

      if(!String(this.email).toLowerCase().match(/^[\w-]+(\.[\w-]+)*@([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/)) {
          throw new Error('Invalid email');
      }

      if (this.password.length < 6) {
        throw new Error('Invalid password');
      }

      if (this.age < 18) {
        throw new Error('Invalid age');
      }
    }
}