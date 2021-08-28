import React from "react";
import "./Features.css";
import FeaturesCard from "./FeaturesCard";
import { FeaturesData } from "./FeaturesData";
const Features = () => {
  return (
    <div className="features container-fluid mb-5 ">
      <div className="row px-4">
        <h1 className="col feature-heading fw-bolder d-flex justify-content-center align-items-center ">
          Our features
        </h1>
        <p className="feature-sub-heading">
          Check out our list of awesome features below.
        </p>
      </div>
      <div className="row px-md-4">
        {FeaturesData.map((contentObj) => (
          <FeaturesCard key={contentObj.id} contentObj={contentObj} />
        ))}
      </div>
    </div>
  );
};

export default Features;
