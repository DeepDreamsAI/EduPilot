import React from "react";
import ailogo from "../../assets/images/ailogo.jpg";
import "./Recommendation.css";

import Job from "./Job";
const Recommendation = () => {
  return (
    <>
      <div className="recom-page-main-con">
        <div className="recom-left-sidebar">
          <div className="main-logo">
            <img className="logo-img" src={ailogo} />
            <div className="logo-info">
              <h2 className="logo-title">Edupilot</h2>
              <p className="logo-description">by DeepDream</p>
            </div>
          </div>
          <div className="btn-new">Search Jobs</div>
        </div>

        <div className="recom-section-con">
          <div className="chat-nav-icons">
            <h1 className="icon1">EduPilot</h1>
          </div>

          <h2 className="recom-section-title">
            Here are the list of job
            <span className="recom-title-span">recommendations</span>for you.
          </h2>

          <div className="job-cards-con">
            <Job />
            <Job />
            <Job />
          </div>
        </div>
      </div>
    </>
  );
};
export default Recommendation;
