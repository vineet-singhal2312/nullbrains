import React from "react";
import "./Features.css";
import FeaturesCard from "./FeaturesCard";
import { FeaturesData } from "./FeaturesData";
const Features = () => {
  return (
    <div class="features container-fluid mb-5 ">
      <div class="row px-4">
        <h1 class="col feature-heading fw-bolder d-flex justify-content-center align-items-center ">
          Our features
        </h1>
        <p className="feature-sub-heading">
          Check out our list of awesome features below.
        </p>
      </div>
      <div class="row px-md-4">
        {FeaturesData.map((contentObj) => (
          <FeaturesCard contentObj={contentObj} />
        ))}
      </div>
    </div>
  );
};

export default Features;
