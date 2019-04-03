'use strict'

const getFormFields = require('./../../../lib/get-form-fields.js')
const api = require('./api')
const ui = require('./ui')

const onSignUp = function (event) {
  event.preventDefault()
  const formData = getFormFields(event.target)
  api.signUp(formData)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  const formData = getFormFields(event.target)
  api.signIn(formData)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const addHandlers = function () {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
}

module.exports = {
  addHandlers
}
