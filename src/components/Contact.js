import React, { useState } from 'react';
import { validateEmail } from '../utils/helpers';


function Contact() {

  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const formContent = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('That is an invalid email.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`You must fill a ${e.target.name}.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);
    }
  };

  return (
    <div>
      <p className="content is-medium">Contact Me</p>
      <hr />
      <form id="contact-form" >
        <div className="field">
          <label className="label" htmlFor="name">Name:</label>
          <input className="input" type="text" name="name" defaultValue={name} onBlur={formContent} />
        </div>
        <div className="field">
          <label className="label" htmlFor="email">Email Address:</label>
          <input className="input" type="email" name="email" defaultValue={email} onBlur={formContent} />
        </div>
        <div className="field">
          <label className="label" htmlFor="message">Message:</label>
          <textarea className="textarea" name="message" rows="5" defaultValue={message} onBlur={formContent} />
        </div>
        {errorMessage && (
          <div>
            <p className="is-danger">{errorMessage}</p>
          </div>
        )}
        <button className="button is-medium is-dark is-halfwidth" data-testid="button" type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
