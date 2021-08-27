import React from "react";
import "./QualitySection.css";
import { HiOutlineDeviceMobile } from "react-icons/hi";

const QualitySection = () => {
  return (
    <div class="container-fluid p-4 d-flex justify-content-center align-items-center ">
      <div class="quality-section">
        <div class="row px-4">
          <div className="col-12 col-md-6">
            <img src="./rocket.png" alt="img" className="quality-section-img" />
          </div>
          <div className="col-12 col-md-6 d-flex flex-column justify-content-center align-items-start p-5">
            <h2 class="quality-section-heading">Boost Productivity</h2>
            <p class="quality-section-sub-heading">
              Built an atmosphere thats creates productivity in your
              organization and your company culture
            </p>
            <ul class="quality-section-list">
              <li class="quality-section-list-item ">
                <div className="quality-section-list-item-icon  d-flex flex-column justify-content-center align-items-center">
                  {" "}
                  <HiOutlineDeviceMobile id="quality-section-icon" />
                </div>{" "}
                Maximum productivity and growth
              </li>
              <li class="quality-section-list-item">
                <div className="quality-section-list-item-icon  d-flex flex-column justify-content-center align-items-center">
                  {" "}
                  <HiOutlineDeviceMobile id="quality-section-icon" />
                </div>{" "}
                Speed past past competition
              </li>
              <li class="quality-section-list-item">
                <div className="quality-section-list-item-icon  d-flex flex-column justify-content-center align-items-center">
                  {" "}
                  <HiOutlineDeviceMobile id="quality-section-icon" />
                </div>{" "}
                Learn the top techniques
              </li>
            </ul>
          </div>
        </div>
        <div class="row px-4">
          <div className="col-12 col-md-6 d-flex flex-column justify-content-center align-items-start p-5">
            <h2 class="quality-section-heading">Boost Productivity</h2>
            <p class="quality-section-sub-heading">
              Built an atmosphere thats creates productivity in your
              organization and your company culture
            </p>
            <ul class="quality-section-list">
              <li class="quality-section-list-item ">
                <div className="quality-section-list-item-icon  d-flex flex-column justify-content-center align-items-center">
                  {" "}
                  <HiOutlineDeviceMobile id="quality-section-icon" />
                </div>{" "}
                Maximum productivity and growth
              </li>
              <li class="quality-section-list-item">
                <div className="quality-section-list-item-icon  d-flex flex-column justify-content-center align-items-center">
                  {" "}
                  <HiOutlineDeviceMobile id="quality-section-icon" />
                </div>{" "}
                Speed past past competition
              </li>
              <li class="quality-section-list-item">
                <div className="quality-section-list-item-icon  d-flex flex-column justify-content-center align-items-center">
                  {" "}
                  <HiOutlineDeviceMobile id="quality-section-icon" />
                </div>{" "}
                Learn the top techniques
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-6">
            <img
              src="./automated.png"
              alt="img"
              className="quality-section-img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QualitySection;
