import React from "react";

const BlogSmallCard = ({ BlogInfo }) => {
  return (
    <div className="col-12 col-md-4 p-3">
      <div class="card blog-small-card" style={{ width: "100%" }}>
        <img src={BlogInfo.imgURL} class="blog-small-card-img-top" alt="..." />
        <div class={`small-card-body text-start `}>
          <h5 class="small-card-title fw-bolder">{BlogInfo.heading}</h5>
          <p class="small-card-text mt-3">{BlogInfo.subHeading}</p>
          <div
            class={`blog-small-card-badge fw-bolder rounded-pill text-center ${BlogInfo.bgColorClass}`}
          >
            {BlogInfo.badge}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSmallCard;
