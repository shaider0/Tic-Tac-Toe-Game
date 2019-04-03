'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const events = require('./auth/events.js')
const gameEvents = require('./game/events.js')

$(() => {
  $('#sign-out').hide()
  $('#game-board').hide()
  $('#change-password').hide()
  $('#play-again').hide()
  events.addHandlers()
  gameEvents.addHandlers()
})
