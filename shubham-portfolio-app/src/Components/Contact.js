import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../styles.css';
import phoneImage from '../images/phone-2.png';
import emailImage from '../images/msg.png';
import mapImage from '../images/map.png';

function Contact(props) {
  const { contactInfo } = props; // Extract contactInfo from props
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    navigate('/thankyou');
  };

  const handleOkClick = () => {
    setSubmitted(false);
    setName('');
    setEmail('');
    setCompany('');
    setMessage('');
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h1 className="section-heading">Contact <span>Us</span></h1>
        <p>We provide high standard clean websites for your business solutions</p>
        <div className="card-wrapper">
          <div className="card">
            <img src={phoneImage} alt="" />
            <h1>Call Us On</h1>
            <h6>{contactInfo.phone}</h6> {/* Using phone from props */}
          </div>
          <div className="card">
            <img src={emailImage} alt="" />
            <h1>Email Us At</h1>
            <h6>{contactInfo.email}</h6> {/* Using email from props */}
          </div>
          <div className="card">
            <img src={mapImage} alt="" />
            <h1>Location</h1>
            <h6>{contactInfo.location}</h6> {/* Using location from props */}
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="input-wrap">
            <input
              type="text"
              placeholder="Your Name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-wrap-2">
            <input
              type="text"
              placeholder="Your Company"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
            <textarea
              cols="30"
              rows="10"
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <div className="btn-wrapper">
            <Link to="/ThankYou">
            <button className="btn btn-primary">Send Message</button>
            </Link>
          </div>
        </form>

        {submitted && (
          <div className="message-box">
            <div className="message-content">
              <p>Name of the Person: {name}</p>
              <p>Email Id: {email}</p>
              <p>Message: {message}</p>
              <button className="btn btn-primary" onClick={handleOkClick}>OK</button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Contact;
