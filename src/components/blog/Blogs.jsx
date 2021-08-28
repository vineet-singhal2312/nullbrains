import React from "react";
import BlogHeroCard from "./BlogHeroCard";
import { BlogHeroCardData } from "./BlogHeroCardData";
import "./Blogs.css";
import { BlogSmallCardData } from "./BlogSmallCaedData";
import BlogSmallCard from "./BlogSmallCard";
const Blogs = () => {
  return (
    <div id="blogs" className="blogs container-fluid mb-5 d-flex flex-column justify-content-center align-items-center">
      <div className="row blog-heading-div align-self-start">
        <h1 className="col blog-heading fw-bolder ">The projects blogs</h1>
        <p className="blog-sub-heading ">
          Designs and layout to help you with your app
        </p>
      </div>
      <div className="hero-card-div row px-4">
        {BlogHeroCardData.map((BlogInfo) => (
          <BlogHeroCard key={BlogInfo.id} BlogInfo={BlogInfo} />
        ))}
        {BlogSmallCardData.map((BlogInfo) => (
          <BlogSmallCard key={BlogInfo.id} BlogInfo={BlogInfo} />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
