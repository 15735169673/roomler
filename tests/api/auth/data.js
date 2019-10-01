module.exports = {
  invalidUsername: 'unexisting_username',
  invalidToken: 'invalid_token',
  invalidPassword: 'invalid_password',
  user: {
    payload: {
      username: 'authuser',
      email: 'authuser@gmail.com',
      password: '12345678',
      passwordConfirm: '12345678'
    },
    update: {
      password: '123456789',
      username: 'authuser_update'
    }
  },
  person: {
    payload: {
      firstname: 'John',
      lastname: 'Smith',
      photoUrl: 'http://google.com'
    }
  }
}
