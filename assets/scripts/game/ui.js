const store = require('../store')
const events = require('./events')

const getGamesSuccess = function (games) {
  const numberOfGamesPlayed = games.games.length
  $('#stats-display').text('Total Games Played: ' + numberOfGamesPlayed)
  setTimeout(function () {
    $('#stats-display').text('')
  }, 5000
  )
}

const getGamesFailure = function (formData) {
  $('#stats-display').text('Something went wrong. Please try again later')
}

const createGameSuccess = function (game) {
  store.gameId = game.game.id
  $('.box').text('')
  $('.game-div').show(500)
  store.gameOver = false
  store.currentPlayer = 'X'
  $('#game-display').text('Player ' + store.currentPlayer + '\'s turn')
  $('#change-password-display').text('')
  $('.change-password-form-div').hide()
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
  updateFailure
}
