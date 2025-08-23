import { Link } from "react-router-dom";
import "./AboutContentStyles.css";
import Profile from "../assets/Profile.png";
import Img1 from "../assets/portfolio.png";


import React from 'react'

export default function AboutContent() {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am I?</h1>
            <p>I am a product manager</p>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
        </div>

        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={Profile} className="img" alt="true" />
                </div>
                <div className="img-stack bottom">
                    <img src={Img1} className="img" alt="true" />
                </div>
            </div>
        </div>
      
    </div>
  )
}
