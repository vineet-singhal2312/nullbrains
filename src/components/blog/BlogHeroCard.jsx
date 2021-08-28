import React from "react";

const BlogHeroCard = ({ BlogInfo }) => {
  return (
    <div className="col-12 col-md-4 p-3">
      <div className="card blog-hero-card" style={{ width: "100%" }}>
        <img
          src={BlogInfo.imgURL}
          className="blog-hero-card-img-top"
          alt="..."
        />
        <div className={`card-body text-start ${BlogInfo.bgColorClass}`}>
          <h1 className="card-title">{BlogInfo.heading}</h1>
          <p className="card-text mt-3">{BlogInfo.subHeading}</p>
          <div
            className={`blog-hero-card-badge fw-bolder rounded-pill text-center ${BlogInfo.colorClass}`}
          >
            {BlogInfo.badge}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogHeroCard;
