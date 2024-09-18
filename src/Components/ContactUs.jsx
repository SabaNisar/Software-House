import React, { useState } from 'react';
import './ContactUs.css';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const ContactUs = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission (for now just logging to console)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // You can add your form submission logic here (e.g., send data to a server)
  };

  return (
    <section className="contact-us">
      <div className="container" style={{width:'100%'}}>
        <h2 className="contact-us-heading">Contact Us</h2>
        
        {/* Contact Info */}
        <div className="contact-info">
          <div className="info-item">
            <FaPhoneAlt className="contact-icon" />
            <h3>Phone</h3>
            <p>+123 456 7890</p>
          </div>
          <div className="info-item">
            <FaEnvelope className="contact-icon" />
            <h3>Email</h3>
            <p>info@softwarehouse.com</p>
          </div>
          <div className="info-item">
            <FaMapMarkerAlt className="contact-icon" />
            <h3>Address</h3>
            <p>123 Software Street, Tech City</p>
          </div>
        </div>

        {/* Contact Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
            />
          </div>
          <div className="form-group">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="5"
              required
            />
          </div>
          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
