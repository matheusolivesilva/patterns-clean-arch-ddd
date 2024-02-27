import User from '../../src/domain/entity/User';

test('Should create a user', () => {
  const user = new User(
    'Matthew Olivier',
    'matthew@gmail.com',
    '12345678',
    28
  );

  expect(user.name).toBe('Matthew Olivier');
  expect(user.email).toBe('matthew@gmail.com');
  expect(user.password).toBe('12345678');
  expect(user.age).toBe(28);
});


test('Should not create a user with invalid name', () => {
  expect(() => new User(
    'Matthew',
    'matthew@gmail.com',
    '12345678',
    28
  )).toThrow(new Error('Invalid name'));
});


test('Should not create a user with invalid email', () => {
  expect(() => new User(
    'Matthew Olivier',
    'matthew@gmail',
    '12345678',
    28
  )).toThrow(new Error('Invalid email'));
});

test('Should not create a user with invalid password', () => {
  expect(() => new User(
    'Matthew Olivier',
    'matthew@gmail.com',
    '12345',
    28
  )).toThrow(new Error('Invalid password'));
});

test('Should not create a user with invalid age', () => {
  expect(() => new User(
    'Matthew Olivier',
    'matthew@gmail.com',
    '12345678',
    17
  )).toThrow(new Error('Invalid age'));
});