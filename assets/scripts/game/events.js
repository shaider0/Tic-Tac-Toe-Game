'use strict'

const getFormFields = require('./../../../lib/get-form-fields.js')
const api = require('./api')
const ui = require('./ui')

let gameLock = false
let currentPlayer = 'X'

const switchPlayer = function () {
  if (currentPlayer === 'X') {
    currentPlayer = 'O'
  } else {
    currentPlayer = 'X'
  }
}

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
    // if zero, three, and 6 are truthy
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
    switchPlayer()
    $('#winner-display').text(`Player ${currentPlayer} wins!`)
    gameLock = true
  } else if (zero && one && two && three && four && five && six && seven && eight) {
    $('#winner-display').text('It\'s a tie!')
    gameLock = true
  }
}

const clickBox = function (event) {
  const text = $(event.target).text()
  if (!text && !gameLock) {
    $(event.target).text(currentPlayer)
    // push index to API, data ID
    switchPlayer()
    checkWinner()
  }
}

const addHandlers = function () {
  $('.box').on('click', clickBox)
}

$('#restart').on('click', function () {
  $('.box').text('')
  $('#winner-display').text('')
  gameLock = false
  currentPlayer = 'X'
})

module.exports = {
  addHandlers
}
