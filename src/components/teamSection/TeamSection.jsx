import React from "react";
import TeamMemberCard from "./TeamMemberCard";
import { TeamMemberList } from "./TeamMemberList";
import "./TeamSection.css";
const TeamSection = () => {
  return (
    <div className="team-section container-fluid d-flex flex-column justify-content-center align-items-center my-5 py-5">
      <div className="team-section-top row py-4  d-flex justify-content-between align-items-center ">
        <div className="col-8 team-section-heading-div d-flex flex-column justify-content-center align-items-start ">
          <p className="team-section-heading">Our Team</p>
          <h2 className=" team-section-sub-heading d-flex justify-content-center align-items-center ">
            An incredible team of amazing individuals
          </h2>
        </div>
        <div className="col-4 team-section-heading-bg-color"></div>
      </div>
      <div className="row team-section-bottom card-container px-md-4">
        {TeamMemberList.map((memberInfo) => (
          <TeamMemberCard key={memberInfo.id} memberInfo={memberInfo} />
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
