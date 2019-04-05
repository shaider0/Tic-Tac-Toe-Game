'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const events = require('./auth/events.js')
const gameEvents = require('./game/events.js')

$(() => {
  $('#create').hide()
  $('#sign-out').hide()
  $('#game-board').hide()
  $('#show-change-password-form').hide()
  $('#change-password-form').hide()
  $('#restart').hide()
  $('#statistics').hide()
  events.addHandlers()
  gameEvents.addHandlers()
})
