// show play again when end game is reached
// $('#play-again').hide()

const store = require('../store')

const signUpSuccess = function (formData) {
  console.log('sign up success ran with the data: ', formData)
  $('form').trigger('reset')
  $('#sign-up-form-display').text('New account created! Please sign in below.')
}

const signUpFailure = function (formData) {
  console.log('sign up failure ran with the data: ', formData)
  $('form').trigger('reset')
  $('#sign-up-form-display').text('Something went wrong. Either the passwords did not match, or the email address is already registered. Please try again.')
}

const signInSuccess = function (formData) {
  console.log('sign in success: ', formData)
  store.user = formData.user
  $('.sign-up-sign-in-div').hide()
  $('#create').show(500)
  $('#statistics').show(600)
  $('#show-change-password-form').show(700)
  $('#sign-out').show(800)
  $('#sign-up-form-display').text('')
}

const signInFailure = function (formData) {
  $('#sign-in-display').text('Please try again')
  $('form').trigger('reset')
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
  store.user = null
  $('.sign-up-sign-in-div').show()
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
  $('#sign-in-display').text('')
}

const signOutFailure = function () {

}

// $('.show-sign-in').on('click', function () {
//   $('sign-in-div').show()
// })

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
