const store = require('../store')
const events = require('./events')

// const signUpSuccess = function (formData) {
//   console.log('sign up success ran with the data: ', formData)
//   $('form').trigger('reset')
// }
//
// const signUpFailure = function (formData) {
//   console.log('sign up failure ran with the data: ', formData)
// }

const getGamesSuccess = function (games) {
  console.log('get games succeeeded: ', games)
  const numberOfGamesPlayed = games.games.length
  $('#stats-display').text('Total Games Played: ' + numberOfGamesPlayed)
}

const getGamesFailure = function (formData) {
  $('#stats-display').text('Something went wrong. Please try again later')
}

let gameId

const createGameSuccess = function (game) {
  console.log('Game successfully created!', game)
  store.gameId = game.game.id
  console.log('game id in store is', store.gameId)
  $('.box').text('')
  $('#winner-display').text('')
  $('#game-board').show(800)
  store.gameOver = false
  store.currentPlayer = 'X'
  const turn = store.currentPlayer
  $('#turn').text(turn)
  $('#turn-display').show()
}

const returnId = function () {
  return gameId
}
const createGameFailure = function () {
  console.log('Game failed to create')
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
