import React from "react";
import "./Footer.css";
import { FaFacebook } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";
import { IoBasketballOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <div class="footer container-fluid my-2">
      <div class="row">
        <div class="col-12 my-2">
          <ul class="list d-flex justify-content-center align-items-center ">
            <li class="list-item ">About</li>
            <li class="list-item">blog</li>
            <li class="list-item">Team </li>
            <li class="list-item ">Pricing</li>
            <li class="list-item">Contact</li>
            <li class="list-item">Terms </li>
          </ul>
        </div>
        <div class="col-12 my-2 d-flex justify-content-center align-items-center">
          <ul class="list d-flex justify-content-center align-items-center ">
            <li class="list-item ">
              <FaFacebook id="footer-icon" />
            </li>
            <li class="list-item">
              <AiOutlineInstagram id="footer-icon" />
            </li>
            <li class="list-item">
              <AiOutlineTwitter id="footer-icon" />{" "}
            </li>
            <li class="list-item ">
              <AiOutlineGithub id="footer-icon" />
            </li>
            <li class="list-item">
              <IoBasketballOutline id="footer-icon" />
            </li>
          </ul>
        </div>
        <div class="col-12 my-2 d-flex justify-content-center align-items-center">
          @ SomeCompany , inc. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
