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
  $('#show-change-password-form').show()
  $('#create').show()
  $('#statistics').show(800)
  $('#sign-out').show()
}

const signInFailure = function (formData) {
  console.log('sign in failed: ', formData)
}

const changePwSuccess = function () {
  $('#change-password-message').text('Password changed!')
}

const changePwFailure = function () {
  console.log('change password failure')
}

const signOutSuccess = function () {
  console.log('sign out successful!')
  store.user = null
  $('#sign-up').show()
  $('#sign-in').show()
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
