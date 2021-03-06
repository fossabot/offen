/**
 * Copyright 2020 - Offen Authors <hioffen@posteo.de>
 * SPDX-License-Identifier: Apache-2.0
 */

/** @jsx h */
const { h } = require('preact')
const { useState } = require('preact/hooks')

const LabeledInput = require('./../_shared/labeled-input')
const SubmitButton = require('./../_shared/submit-button')

const ChangeEmail = (props) => {
  const [isDisabled, setIsDisabled] = useState(false)
  function handleSubmit (e) {
    e.preventDefault()
    var formData = new window.FormData(e.currentTarget)
    setIsDisabled(true)
    props.onChangeEmail(
      {
        password: formData.get('password'),
        emailAddress: formData.get('email-address'),
        emailCurrent: formData.get('email-current')
      },
      __('Please log in again, using your updated email.'),
      __('Could not change email. Try again.')
    )
      .then(() => setIsDisabled(false))
  }

  return (
    <div class='pa3 bg-black-05'>
      <h4 class='f4 normal mt0 mb3'>
        {__('Change email address')}
      </h4>
      <form class='mw6 center mb4' onsubmit={handleSubmit}>
        <LabeledInput
          type='email'
          name='email-current'
          required
          disabled={isDisabled}
        >
          {__('Current email address')}
        </LabeledInput>
        <LabeledInput
          type='email'
          name='email-address'
          required
          disabled={isDisabled}
        >
          {__('New email address')}
        </LabeledInput>
        <LabeledInput
          type='password'
          name='password'
          required
          disabled={isDisabled}
        >
          {__('Password')}
        </LabeledInput>
        <SubmitButton disabled={isDisabled}>
          {__('Change email address')}
        </SubmitButton>
      </form>
    </div>
  )
}

module.exports = ChangeEmail
