import "./JobExperience.css";

import React from 'react'
import JobCard from "./JobExperienceCard";
import JobCardData from "./JobExperienceCardData";

export default function Job() {
  return (
    <div className="work-container">
        <h1 className="job-heading">Work Experience</h1>
        <div className="job-container">
            {JobCardData.map((val, ind) => {
                return (
                    <JobCard
                        key={ind}
                        imgsrc={val.imgsrc}
                        title={val.title}
                        text={val.text}
                        view={val.view}/>
                )
            })}
        </div>
    </div>
  )
}
