import React from "react";
import "./Footer.css";
import { FaFacebook } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";
import { IoBasketballOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <div id="footer" className="footer container-fluid my-2">
      <div className="row">
        <div className="col-12 my-2">
          <ul className="list d-flex justify-content-center align-items-center ">
            <li className="list-item ">About</li>
            <li className="list-item">blog</li>
            <li className="list-item">Team </li>
            <li className="list-item ">Pricing</li>
            <li className="list-item">Contact</li>
            <li className="list-item">Terms </li>
          </ul>
        </div>
        <div className="col-12 my-2 d-flex justify-content-center align-items-center">
          <ul className="list d-flex justify-content-center align-items-center ">
            <li className="list-item ">
              <FaFacebook id="footer-icon" />
            </li>
            <li className="list-item">
              <AiOutlineInstagram id="footer-icon" />
            </li>
            <li className="list-item">
              <AiOutlineTwitter id="footer-icon" />{" "}
            </li>
            <li className="list-item ">
              <AiOutlineGithub id="footer-icon" />
            </li>
            <li className="list-item">
              <IoBasketballOutline id="footer-icon" />
            </li>
          </ul>
        </div>
        <div className="col-12 my-2 d-flex justify-content-center align-items-center">
          @ SomeCompany , inc. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
