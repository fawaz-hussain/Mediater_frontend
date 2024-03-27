import React from "react";
import Modal from "./Modal";
import Navbar from "./Navbar";
import "../Components/style.css"
import HomeBackground from "../Assets/home-banner-background-1.png"
import BannerImage from "../Assets/home-banner-image-1.png"

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={HomeBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Connecting Brands with Creativity
          </h1>
          <p className="primary-text">
            Welcome to Mediater - Your Gateway to Digital Collaboration!<br/>
            At Mediater, we redefine collaboration by seamlessly connecting content creators with businesses, fostering innovation and creativity. Join us to unlock endless possibilities in the digital landscape and elevate every collaboration.
          </p>
            
            <Modal className="modal"/>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;