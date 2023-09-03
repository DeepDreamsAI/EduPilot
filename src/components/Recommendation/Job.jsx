import React from "react";
import "./Job.css";
const Job = () => {
  return (
    <div className="job-card">
      <h2 className="job-title">Full-Stack Developer</h2>
      <p className="job-desc">
        We are looking for talented fullstack developers. We are seeking for
        expert mern stack developer...
      </p>
      {/* <p className="job-salary">$2000</p> */}
      <a href="#" className="btn-job-apply">
        Apply
      </a>
    </div>
  );
};
export default Job;
