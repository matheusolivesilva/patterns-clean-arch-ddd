import User from '../../src/domain/entity/User';

test('Should create a user', async () => {
  const user = await User.create(
    'Matthew Olivier',
    'matthew@gmail.com',
    '12345678',
    28
  );

  expect(user.name.getValue()).toBe('Matthew Olivier');
  expect(user.email.getValue()).toBe('matthew@gmail.com');
  expect(user.password.value).toBe('f1fa680348802c16e610e0afa109ef9fd2ea21001bf0449ea4372229cee93a13c3eb08a30068a92b82d376d195f5ed4bebfd9b51413a0ae23dbb38da9141a4b4');
  expect(user.age).toBe(28);
});


test('Should not create a user with invalid name', () => {
  expect(() => User.create(
    'Matthew',
    'matthew@gmail.com',
    '12345678',
    28
  )).rejects.toThrow(new Error('Invalid name'));
});


test('Should not create a user with invalid email', () => {
  expect(() => User.create(
    'Matthew Olivier',
    'matthew@gmail',
    '12345678',
    28
  )).rejects.toThrow(new Error('Invalid email'));
});

test('Should not create a user with invalid password', () => {
  expect(() => User.create(
    'Matthew Olivier',
    'matthew@gmail.com',
    '12345',
    28
  )).rejects.toThrow(new Error('Invalid password'));
});

test('Should not create a user with invalid age', () => {
  expect(() => User.create(
    'Matthew Olivier',
    'matthew@gmail.com',
    '12345678',
    17
  )).rejects.toThrow(new Error('Invalid age'));
});