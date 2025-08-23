import "./ResumeCardStyles.css";
import ResumeData from "./ResumeData";
import { useEffect } from "react";

import React from 'react'

export default function ResumeCard() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <h1 className="resume-header">My Employment History</h1>
      <div className="resume-container">
        {ResumeData.map((job, ind) => (
          <div className="resume-card" key={ind}>
            <h2>{job.jobTitle}</h2>
            <h3>{job.company} - {job.location} <em>({job.date})</em></h3>
            <ul>
              <li>{job.exp1}</li>
              <li>{job.exp2}</li>
              <li>{job.exp3}</li>
              <li>{job.exp4}</li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

