import React from "react";

const FeaturesCard = ({ contentObj }) => {
  return (
    <div className="col-12 col-md-4 p-3">
      <div className="features-card  d-flex flex-column justify-content-around align-items-center ">
        <div className="features-card-icon  d-flex flex-column justify-content-center align-items-center">
          {" "}
          {contentObj.icon}
        </div>
        <div className="features-card-heading">{contentObj.title}</div>
        <p className="features-card-sub-heading">{contentObj.subTitle}</p>
      </div>
    </div>
  );
};

export default FeaturesCard;
