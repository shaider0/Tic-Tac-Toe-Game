const store = require('../store')

const signUpSuccess = function (formData) {
  console.log('sign up success ran with the data: ', formData)
  $('form').trigger('reset')
}

const signUpFailure = function (formData) {
  console.log('sign up failure ran with the data: ', formData)
}

const signInSuccess = function (formData) {
  console.log('sign in success: ', formData)
  store.user = formData.user
}

const signInFailure = function (formData) {
  console.log('sign in failed: ', formData)
}

module.exports = {
  signInSuccess,
  signInFailure,
  signUpSuccess,
  signUpFailure
}
