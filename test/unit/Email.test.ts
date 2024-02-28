import Email from '../../src/domain/entity/Email';

test('Should create a valid email', () => {
  const email = new Email('matthew@gmail.com');
  expect(email.getValue()).toBe('matthew@gmail.com');
});


test('Should not create a invalid email', () => {
  expect(() => new Email('matthew@gmail')).toThrow(new Error('Invalid email'));
});