import Login from '../src/application/usecase/Login';
import Signup from '../src/application/usecase/Signup';
import UserRepositoryMemory from '../src/infra/repository/memory/UserRepositoryMemory';

test('Should signup', async () => {
  const userRepository = new UserRepositoryMemory();
  const signup = new Signup(userRepository);
  const inputSignup = {
    name: 'Matthew',
    email: 'matthew@gmai.com',
    password: '12345',
    age: 28
  }
  await signup.execute(inputSignup);

  const login = new Login(userRepository);
  const inputLogin = {
    email: 'matthew@gmai.com',
    password: '12345',
  }
  const output = await login.execute(inputLogin);

  expect(output.name).toBe('Matthew');
  expect(output.token).toBe('12345');

});