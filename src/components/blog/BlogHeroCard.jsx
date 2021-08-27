import React from "react";

const BlogHeroCard = ({ BlogInfo }) => {
  return (
    <div className="col-12 col-md-4 p-3">
      <div class="card blog-hero-card" style={{ width: "100%" }}>
        <img src={BlogInfo.imgURL} class="blog-hero-card-img-top" alt="..." />
        <div class={`card-body text-start ${BlogInfo.bgColorClass}`}>
          <h1 class="card-title">{BlogInfo.heading}</h1>
          <p class="card-text mt-3">{BlogInfo.subHeading}</p>
          <div
            class={`blog-hero-card-badge fw-bolder rounded-pill text-center ${BlogInfo.colorClass}`}
          >
            {BlogInfo.badge}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogHeroCard;
