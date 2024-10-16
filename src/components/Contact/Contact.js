import React, { useState } from 'react';
import axios from 'axios';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8000/api/messages', formData)
      .then(response => {
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 3000); // Message fades out after 3 seconds
        setFormData({ name: '', email: '', message: '' });
      })
      .catch(error => console.error('Error sending message:', error));
  };

  return (
    <div className="contact-container">
      <h2 className="contact-title">Contact Me</h2>
      
      {isSubmitted && <p className="success-message">Message sent successfully!</p>}
      
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="form-input"
          ></textarea>
        </div>
        <button type="submit" className="form-button">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
