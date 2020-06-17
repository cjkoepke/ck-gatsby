import React from 'react'
import { useForm, ValidationError } from '@statickit/react';
import './styles.css'

export default () => {
  const [state, handleSubmit] = useForm('1447765');

  console.log( state )

  if ( state.succeeded ) {
    return <p>Success!</p>
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <label htmlFor="email" className="form__label">
        Email Address
      </label>
      <input
        id="email"
        type="email"
        name="email"
        className="form__input"
      />
      <ValidationError
        prefix="Email"
        field="email"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting} className="form__btn">
        Sign Up
      </button>
    </form>
  )
}
