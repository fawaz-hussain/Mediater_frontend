import React from "react";
import HomeBackground from "../Assets/contact-banner-image.png"

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-bannerImage-container">
          <img src={HomeBackground} alt="" />
      </div>
    <div className="contact-page-wrapper" id="Contact">
      <h1 className="primary-heading">Have Question In Mind?</h1>
      <h1 className="primary-heading">Contact Us !</h1>
      <div className="contact-form-container">
        <input type="text" placeholder="Your Name" />
      </div>
      <div className="contact-form-container">
        <input type="text" placeholder="Your Contact Email" />
        <button className="secondary-button">Submit</button>
      </div>
    </div>
    </div>
  );
};

export default Contact;