import React from 'react'
import { useForm, ValidationError } from '@statickit/react';
import Button from '../Button'
import './styles.css'

const FormGroup = ({ slug, name, type = 'text', state }) => (
  <div className={`form__group`}>
    <label htmlFor={slug} className="form__label">
      {name}
    </label>
    {'textarea' === type
      ? (
        <textarea
          id={slug}
          name={slug}
          className="form__input"
          rows="12"
        ></textarea>
      ) : (
        <input
          id={slug}
          type={type}
          name={slug}
          className="form__input"
        />
      )}
    <ValidationError
      className={`form__error`}
      prefix={name}
      field={slug}
      errors={state.errors}
    />
  </div>
)

export default ({ id = 'contactForm' }) => {
  const [state, handleSubmit] = useForm(id);
  console.log(state)

  if ( state.succeeded ) {
    return <p>Success! I will be in touch with you as soon as possible.</p>
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <FormGroup slug="name" name="Full Name" state={state} />
      <FormGroup slug="email" name="Email" type="email" state={state} />
      <FormGroup slug="message" name="Message" type="textarea" state={state} />
      <Button type="submit" disabled={state.submitting} label="Submit" />
    </form>
  )
}
