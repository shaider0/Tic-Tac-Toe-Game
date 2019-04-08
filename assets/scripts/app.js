'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const events = require('./auth/events.js')
const gameEvents = require('./game/events.js')

$(() => {
  $('.sign-up-sign-in-div').show()
  $('.play-now-div').hide()
  $('.game-div').hide()
  $('.stats-div').hide()
  $('.change-password-button-div').hide()
  $('.change-password-form-div').hide()
  $('.sign-out-div').hide()
  $('#invalid-move').hide()
  $('#sign-up-display').text('')
  $('#sign-in-display').text('')
  $('#game-display').text('')
  $('#stats-display').text('')
  $('#change-password-display').text('')
  $('#sign-out-display').text('')

  events.addHandlers()
  gameEvents.addHandlers()
})
