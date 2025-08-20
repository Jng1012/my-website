import "./JobExperience.css";

import React from 'react'
import { NavLink } from "react-router-dom";

export default function JobCard(props) {
  return (
            <div className="job-card">
                <img src={props.imgsrc} alt="image1" />
                <h2 className="job-title">{props.title}</h2>
                <div className="job-details">
                    <p>{props.text}</p>
                    <div className="job-btns">
                        <NavLink to={props.view} className="btn">View</NavLink>
                    </div>
                </div>
            </div>
  )
}