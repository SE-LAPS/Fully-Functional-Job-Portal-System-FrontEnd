// src/pages/Contact.js
import React from 'react';


const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Contact For Any Query</h2>
      <div className="contact-info">
        <div className="contact-item">
          <i className="fa fa-map-marker"></i>
          <p>123 Street, New York, USA</p>
        </div>
        <div className="contact-item">
          <i className="fa fa-envelope"></i>
          <p>info@example.com</p>
        </div>
        <div className="contact-item">
          <i className="fa fa-phone"></i>
          <p>+012 345 6789</p>
        </div>
      </div>
      <div className="contact-content">
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.490953412857!2d-74.00601568459352!3d40.71277577933024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a316f934c05%3A0x3c8b0b5e4b14e720!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1598795123456!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="New York Location"
          ></iframe>
        </div>
        <div className="contact-form">
          <p>
            The contact form is currently inactive. Get a functional and working
            contact form with Ajax & PHP in a few minutes. Just copy and paste the
            files, add a little code and you're done.{' '}
            <a href="https://example.com/download">Download Now</a>.
          </p>
          <form>
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <input type="text" name="subject" placeholder="Subject" required />
            <textarea name="message" placeholder="Message" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
