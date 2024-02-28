import Login from '../../src/application/usecase/Login';
import Signup from '../../src/application/usecase/Signup';
import UserRepositoryMemory from '../../src/infra/repository/memory/UserRepositoryMemory';

test('Should signup', async () => {
  const userRepository = new UserRepositoryMemory();
  const signup = new Signup(userRepository);
  const inputSignup = {
    name: 'Matthew Olivier',
    email: 'matthew@gmail.com',
    password: '12345678',
    age: 28
  }
  await signup.execute(inputSignup);

  const login = new Login(userRepository);
  const inputLogin = {
    email: 'matthew@gmail.com',
    password: '12345678',
  }
  const output = await login.execute(inputLogin);

  expect(output.name).toBe('Matthew Olivier');
  expect(output.token).toBe('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6eyJ2YWx1ZSI6Im1hdHRoZXdAZ21haWwuY29tIn0sImlhdCI6MTY3NzY3NTYwMDAwMCwiZXhwaXJlc0luIjoxMDAwMDB9.m71XjxDNAGqTJvAfTtGpERoFYmV-IhB3H63TjrNRAdY');
});