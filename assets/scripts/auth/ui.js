// show play again when end game is reached
// $('#play-again').hide()

const store = require('../store')

const signUpSuccess = function (formData) {
  console.log('sign up success ran with the data: ', formData)
  $('form').trigger('reset')
}

const signUpFailure = function (formData) {
  console.log('sign up failure ran with the data: ', formData)
}

const signInSuccess = function (formData) {
  console.log('sign in success: ', formData)
  store.user = formData.user
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#create').show(500)
  $('#statistics').show(600)
  $('#show-change-password-form').show(700)
  $('#sign-out').show(800)
}

const signInFailure = function (formData) {
  console.log('sign in failed: ', formData)
}

const changePwSuccess = function () {
  $('#change-password-message').show()
  $('#change-password-message').text('Password changed!')
  $('#show-change-password-form').show()
  $('#change-password-form').hide()
  $('form').trigger('reset')
}

const changePwFailure = function () {
  $('#change-password-message').text('Current password is incorrect. Please try again.')
  $('form').trigger('reset')
}

const signOutSuccess = function () {
  console.log('sign out successful!')
  store.user = null
  $('#sign-up').show()
  $('#sign-in').show()
  $('#game-board').hide()
  $('#change-password-form').hide()
  $('#winner-display').hide()
  $('#turn-display').hide()
  $('#show-change-password-form').hide()
  $('#change-password-message').hide()
  $('#create').hide()
  $('#statistics').hide()
  $('#sign-out').hide()
  $('form').trigger('reset')
}

const signOutFailure = function () {
  console.log('sign out failed!')
}

module.exports = {
  signInSuccess,
  signInFailure,
  signUpSuccess,
  signUpFailure,
  changePwSuccess,
  changePwFailure,
  signOutSuccess,
  signOutFailure
}
