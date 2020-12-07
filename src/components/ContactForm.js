import React from 'react'

const ContactForm = () => (
  <form className="form" action={process.env.FORMSPREE_API_URL} method="POST">
    <div className="form-field-wrapper">
      <label htmlFor="fullName">Full name</label>
      <input id="fullName" type="text" name="fullname" placeholder="Full name"/>
    </div>
    <div className="form-field-wrapper">
      <label htmlFor="email">Email</label>
      <input id="email" type="email" name="email" placeholder="Email"/>
    </div>
    <div className="form-field-wrapper">
      <label htmlFor="message">Message</label>
      <textarea id="message" name="message" rows="5" placeholder="Message"></textarea>
    </div>
    <ul className="form-field-wrapper actions">
      <li>
        <button type="submit"  className="button special">Send</button>
      </li>
    </ul>
  </form>
)

export default ContactForm
