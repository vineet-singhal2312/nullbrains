import React from "react";
import "./ComponyNetwork.css";
const ComponyNetwork = () => {
  return (
    <div className="compony-network container-fluid p-5">
      <div className="row px-4">
        <h5 className="col compony-network-heading fw-bolder d-flex flex-column justify-content-center align-items-center ">
          TRUSTED BY TOP-LEADING COMPANIES
        </h5>
        <div className=" d-flex flex-column flex-md-row justify-content-around align-items-center">
          <img
            src="https://media.discordapp.net/attachments/832535400244445185/880710353086988358/disney.png"
            className="network-img1"
            alt="img"
          />
          <img
            src="https://cdn.discordapp.com/attachments/832535400244445185/880710355297382400/google.png"
            className="network-img"
            alt="img"
          />{" "}
          <img
            src="https://i.vippng.com/png/small/420-4205098_hubspots-snapchat-employer-branding-philosophy-use-hubspot-logos.png"
            className="network-img"
            alt="img"
          />{" "}
          <img
            src="https://media.discordapp.net/attachments/832535400244445185/880710348376784916/youtube.png?width=1005&height=670"
            className="network-img"
            alt="img"
          />{" "}
          <img
            src="https://i.vippng.com/png/small/107-1077103_slack-new-logo-png.png"
            className="network-img2"
            alt="img"
          />{" "}
          <img
            src="https://i.vippng.com/png/small/370-3703615_shopifys-plan-to-let-half-a-million-merchants.png"
            className="network-img"
            alt="img"
          />
        </div>
      </div>
    </div>
  );
};

export default ComponyNetwork;
