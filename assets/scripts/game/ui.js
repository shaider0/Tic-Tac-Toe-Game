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

let gameId

const createGameSuccess = function (game) {
  console.log('Game successfully created!', game)
  gameId = game.game.id
  $('.box').text('')
  $('#winner-display').text('')
  $('#game-board').show(800)
}

const returnId = function () {
  return gameId
}
const createGameFailure = function () {
  console.log('Game successfully created!')
}

const updateSuccess = function (game) {
  console.log('Game successfully updated!', game)
}

const updateFailure = function () {
  console.log('Game failed to update!')
}

module.exports = {
  getGamesSuccess,
  getGamesFailure,
  createGameSuccess,
  createGameFailure,
  updateSuccess,
  updateFailure,
  returnId
}
