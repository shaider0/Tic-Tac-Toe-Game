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
  const gamesData = JSON.stringify(formData.games)
  $('#stats-display').text('Games: ' + gamesData)
}

const getGamesFailure = function (formData) {
  $('#stats-display').text('Something went wrong. Please try again later')
}

const createGameSuccess = function (game) {
  console.log('Game successfully created!', game)
}

const createGameFailure = function () {
  console.log('Game successfully created!')
}

module.exports = {
  getGamesSuccess,
  getGamesFailure,
  createGameSuccess,
  createGameFailure
}
