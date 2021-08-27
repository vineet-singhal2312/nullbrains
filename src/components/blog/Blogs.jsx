import React from "react";
import BlogHeroCard from "./BlogHeroCard";
import { BlogHeroCardData } from "./BlogHeroCardData";
import "./Blogs.css";
import { BlogSmallCardData } from "./BlogSmallCaedData";
import BlogSmallCard from "./BlogSmallCard";
const Blogs = () => {
  return (
    <div class="blogs container-fluid mb-5 d-flex flex-column justify-content-center align-items-center">
      <div class="row blog-heading-div align-self-start">
        <h1 class="col blog-heading fw-bolder ">The projects blogs</h1>
        <p className="blog-sub-heading ">
          Designs and layout to help you with your app
        </p>
      </div>
      <div class="hero-card-div row px-4">
        {BlogHeroCardData.map((BlogInfo) => (
          <BlogHeroCard BlogInfo={BlogInfo} />
        ))}
        {BlogSmallCardData.map((BlogInfo) => (
          <BlogSmallCard BlogInfo={BlogInfo} />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
