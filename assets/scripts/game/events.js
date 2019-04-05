'use strict'

const getFormFields = require('./../../../lib/get-form-fields.js')
const api = require('./api')
const ui = require('./ui')
const store = require('../store')

// Switch player
const switchPlayer = function () {
  if (store.currentPlayer === 'X') {
    store.currentPlayer = 'O'
  } else {
    store.currentPlayer = 'X'
  }
}

// Check for end-game and display result
const checkWinner = function () {
  const zero = $('.zero').text()
  const one = $('.one').text()
  const two = $('.two').text()
  const three = $('.three').text()
  const four = $('.four').text()
  const five = $('.five').text()
  const six = $('.six').text()
  const seven = $('.seven').text()
  const eight = $('.eight').text()

  if (
    // horizontal winning combinations
    (zero && zero === one && one === two) ||
    (three && three === four && four === five) ||
    (six && six === seven && seven === eight) ||

    // vertical winning combinations
    (zero && zero === three && three === six) ||
    (one && one === four && four === seven) ||
    (two && two === five && five === eight) ||

    // diagonal winning combinations
    (zero && zero === four && four === eight) ||
    (two && two === four && four === six)
  ) {
    $('#turn-display').hide()
    switchPlayer()
    $('#winner-display').text(`Player ${store.currentPlayer} wins!`)
    store.gameOver = true
  } else if (zero && one && two && three && four && five && six && seven && eight) {
    $('#turn-display').hide()
    $('#winner-display').text('It\'s a tie!')
    store.gameOver = true
  }
}

// Send game state to API on each move
const onUpdate = function () {
  const gameId = ui.returnId()
  api.updateGame(gameId)
    .then(ui.updateSuccess)
    .catch(ui.updateFailure)
}

// While game is not over, place X or O on the board depending on turn
const onClick = function (event) {
  const text = $(event.target).text()
  if (!text && !store.gameOver) {
    $(event.target).text(store.currentPlayer)
    store.index = $(event.target).attr('data-index')
    store.value = $(event.target).text()
    onUpdate()
    // let index = $(event.target).attr('data-index')
    // console.log('the index is ', index)
    switchPlayer()
    $('#turn').text(store.currentPlayer)
    checkWinner()
  }
}

const onGetGames = function () {
  api.getGames()
    .then(ui.getGamesSuccess)
    .catch(ui.getGamesFailure)
}

// const indexExample = function () {
//   return $.ajax({
//     url: config.apiUrl + '/examples',
//     method: 'GET'
//   })
// }

const onShowChangePasswordForm = function () {
  $('#change-password-form').show()
}

const onCreate = function (event) {
  event.preventDefault()
  api.createGame()
    .then(ui.createGameSuccess)
    .catch(ui.createGameFailure)
}

const addHandlers = function () {
  $('#create').on('submit', onCreate)
  $('.box').on('click', onClick)
  $('#getGames').on('click', onGetGames)
  $('#show-change-password-form').on('click', onShowChangePasswordForm)
}

module.exports = {
  addHandlers
}
