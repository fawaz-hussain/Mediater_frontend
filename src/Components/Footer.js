import React from "react";
import "../Components/style.css"
import Logo from "../Assets/Logo_mediater.png";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";


const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={Logo} alt="" />
        </div>
        <div className="footer-icons">
          <a href="https://twitter.com/mediater_" target="_blank">
            <BsTwitter />
          </a>
          <a href="https://www.linkedin.com/company/mediater-in/" target="_blank">
            <SiLinkedin />
          </a>
          <a href="https://www.youtube.com/@Mediaterz" target="_blank">
            <BsYoutube />
          </a>
          <a href="https://www.instagram.com/mediaterofficial/" target="_blank">
            <FaInstagram />
          </a>
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span><b>Contact Us : </b></span>
          <span>+91 7994076261</span>
          <span><b>Email: </b></span>
          <span>official@mediater.in</span>
        </div>
        <div className="footer-section-columns">
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;