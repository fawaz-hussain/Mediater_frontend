import React from "react";
import AboutBackground from "../Assets/about-background-1.png";
import AboutBackgroundImage from "../Assets/about-background-image-1.png";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container" id="Mission">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container" >
        <p className="primary-subheading">Mission</p>
        <p className="primary-text">
        Empowering collaboration and innovation, our mission is to seamlessly connect content creators with businesses, 
        fostering meaningful partnerships in the digital landscape. By providing a dynamic platform that facilitates efficient communication, 
        secure transactions, and insightful analytics, we aim to be the catalyst for creativity, growth, and success in the online content creation ecosystem. 
        Our commitment lies in building a vibrant community where creators thrive, businesses prosper, and authentic collaborations flourish.
        </p>
      </div>
    </div>
  );
};

export default About;