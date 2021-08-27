import React from "react";
import "./HeroHeadingSection.css";
const HeroHeadingSection = () => {
  return (
    <div className="hero-heading-section d-flex flex-column justify-content-center align-items-center ">
      {" "}
      <h1 className="main-heading-one fw-bolder">Start Crafting Your</h1>
      <h1 className="main-heading-two fw-bolder">Next Great Idea</h1>
      <div className="hero-section-content-div  d-flex flex-column justify-content-center align-items-center">
        <p className="hero-heading-section-description"> 
          Simplifying the creation of landing pages, blog pages, application
          pages and so much more!!
        </p>
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center ">
        <button
          type="button"
          class="btn btn-primary rounded-pill fw-bolder px-4"
        >
          Purchase now
        </button>
        <a href="/" className="link">
          Learn More
        </a>
      </div>
    </div>
  );
};

export default HeroHeadingSection;
