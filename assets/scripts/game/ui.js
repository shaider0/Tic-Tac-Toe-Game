const store = require('../store')

// const signUpSuccess = function (formData) {
//   console.log('sign up success ran with the data: ', formData)
//   $('form').trigger('reset')
// }
//
// const signUpFailure = function (formData) {
//   console.log('sign up failure ran with the data: ', formData)
// }

const getGamesSuccess = function (formData) {
  console.log('get games succeeeded: ', formData)
}

const getGamesFailure = function (formData) {
  console.log('get games failed: ', formData)
}

module.exports = {
  getGamesSuccess,
  getGamesFailure
}
