import CheckAuth from '../../src/application/usecase/CheckAuth';

test('Should check whether is logged or not', async () => {
  const checkAuth = new CheckAuth();
  const input = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1hdHRoZXdAZ21haWwuY29tIiwiaWF0IjoxNjc3Njc1NjAwMDAwLCJleHBpcmVzSW4iOjEwMDAwMDAwMDB9.jJVPOkfHttJdT5xSVDrIqqbk69QOM2L3kC1HUKzk1FI';
  const output = await checkAuth.execute(input);
  expect(output.email).toBe('matthew@gmail.com');
})