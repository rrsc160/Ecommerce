jsx
import React from 'react';

function ContactPage() {
  return (
    <section className="contact-section">
      <h2>Contact Us</h2>
      <div className="contact-info">
        <p>Email: <a href="mailto:info@dhuledistrictmatrimony.com">info@dhuledistrictmatrimony.com</a></p>
        <p>Phone: +91-8888559924</p>
      </div>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default ContactPage;