'use strict'
// if these don't work, check if i need ./
const config = require('../config.js')
const store = require('../store')

const getGames = function () {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'GET',
    headers: {authorization: 'Token token=' + store.user.token}
  })
}

const createGame = function () {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {authorization: 'Token token=' + store.user.token},
    data: {}
  })
}

const updateGame = function (gameId) {
  return $.ajax({
    url: config.apiUrl + '/games/' + gameId,
    method: 'PATCH',
    headers: {authorization: 'Token token=' + store.user.token},
    data: {
      'game': {
        'cell': {
          'index': 0,
          'value': 'x'
        },
        'over': false
      }
    }
  })
}

module.exports = {
  getGames,
  createGame,
  updateGame
}
