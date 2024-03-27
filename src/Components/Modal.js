import React, { useState } from 'react';
import './Modal.css';
import { FiArrowRight } from "react-icons/fi";

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [socialMediaURL, setSocialMediaURL] = useState('');

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleSocialMediaURLChange = (e) => setSocialMediaURL(e.target.value);

  const handleSubscribe = () => {
    // Handle subscription logic here
    console.log('Email:', email);
    console.log('Social Media URL:', socialMediaURL);
    // Close the modal after subscription
    closeModal();
  };

  return (
    <div>
      <button className='secondary-button' onClick={openModal}>
      Subscribe Now <FiArrowRight />{" "}
      </button>
      {isOpen && (
        <div className="modal">
          <div className="modal-content">
          <span className="close" onClick={closeModal}>&times;</span>
            <p className='primary-text'>
                Elevate Your Experience: Subscribe Now for Exclusive Early Access!
            </p>
            <div className='form'>
                <div className="contact-form-container">
                    <input type="text" placeholder="Email Address" />
                </div>
                <div className="contact-form-container">
                    <input type="text" placeholder="Business URL/Social media URL" />
                    <button className="secondary-button">Submit</button>
                </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
