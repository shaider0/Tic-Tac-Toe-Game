'use strict'

const getFormFields = require('./../../../lib/get-form-fields.js')
const api = require('./api')
const ui = require('./ui')

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
  } else if (zero && one && two && three && four && five && six && seven && eight) {
    $('#winner-display').text('It\'s a tie!')
  }
}

let currentPlayer = 'X'

const clickBox = function (event) {
  const text = $(event.target).text()
  if (!text) {
    $(event.target).text(currentPlayer)
    // push index to API
    switchPlayer()
    checkWinner()
  }
}

const addHandlers = function () {
  $('.box').on('click', clickBox)
}

module.exports = {
  addHandlers
}
