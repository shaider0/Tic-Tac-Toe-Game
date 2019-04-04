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

module.exports = {
  getGames,
  createGame
}
