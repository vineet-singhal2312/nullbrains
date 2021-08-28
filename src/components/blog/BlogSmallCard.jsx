import React from "react";

const BlogSmallCard = ({ BlogInfo }) => {
  return (
    <div className="col-12 col-md-4 p-3">
      <div className="card blog-small-card" style={{ width: "100%" }}>
        <img
          src={BlogInfo.imgURL}
          className="blog-small-card-img-top"
          alt="..."
        />
        <div className={`small-card-body text-start `}>
          <h5 className="small-card-title fw-bolder">{BlogInfo.heading}</h5>
          <p className="small-card-text mt-3">{BlogInfo.subHeading}</p>
          <div
            className={`blog-small-card-badge fw-bolder rounded-pill text-center ${BlogInfo.bgColorClass}`}
          >
            {BlogInfo.badge}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSmallCard;
