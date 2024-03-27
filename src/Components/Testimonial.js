import React from "react";
import test1 from "../Assets/test-1.jpg"
import test2 from "../Assets/test-2.jpg"
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper" id="Reviews">
      <div className="work-section-top">
        <p className="primary-subheading">Reviews</p>
        <p className="primary-text">
        Don't Just Take Our Word for It : Read the customer's Reviews!
        </p>
      </div>
      <div className="testimonial-card-container">
      <div className="testimonial-section-bottom">
        <img src={test1} alt="" />
        <p>
        "I do Online business through instagram. I haven't really thought of marketing my product 
        since cost is just too high. Since the platform would assist in marketing in a cheap rate 
        by connecting to micro influencer, It would be really helpful. "
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>- Prayag_gift_</h2>
      </div>
      <div className="testimonial-section-bottom">
        <img src={test2} alt="" />
        <p>
        "We are a group of college students who started the production house - "Visual Voyagers". 
        Currently it's very expensive to rent a high quality camera even for one day. It would be really 
        great if we can monetise our content, even if it's low.
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>- visualvoyager__</h2>
      </div>
      </div>
    </div>
  );
};

export default Testimonial;