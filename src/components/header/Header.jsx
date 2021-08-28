import React from "react";
import "./Header.css";
import { AiOutlineSearch } from "react-icons/ai";
const Header = () => {
  return (
    <div className="header container-fluid ">
      <div className="row px-md-4">
        <h2 className="col-3 col-md-3 header-title fw-bolder d-flex justify-content-start align-items-center mb-0 ">
          nullbrains
        </h2>
        <div className="col-6 d-none d-md-flex justify-content-center align-items-center">
          <a href="/" className="header-list-item">
            Home
          </a>
          <a href="/" className="header-list-item">
            Features
          </a>
          <a href="/" className="header-list-item">
            Blog
          </a>
          <a href="/" className="header-list-item">
            Contact
          </a>
          <a href="/" className="header-list-item">
            <AiOutlineSearch />
          </a>
        </div>
        <div className="col-9 col-md-3 header-left d-flex justify-content-end align-items-center ">
          {" "}
          <div type="button" className="btn-div rounded-pill">
            Sign In
          </div>
          <button type="button" className="btn btn-primary rounded-pill">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
