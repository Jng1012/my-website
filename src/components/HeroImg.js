import "./HeroImgStyles.css";

import React from 'react';

import Hero from "../assets/MainImg.png";
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={Hero} alt="background-img"/>
      </div>
      <div className="content">
        <h1> Josiah Ng</h1>
        <h2>Product Manager | Product Owner | Tech Explorer</h2>
        <p>Hi there, welcome to my portfolio! I am a Product Manager with 5 years of experience who loves building impactful features and exploring the tech space through side projects. Feel free to browse through my work, check out my projects, and get a sense of my journey so far.</p>
        <div className="btn-container">
            <Link to="/project" className="btn">Projects</Link>
            <Link to="/contact" className="btn btn-light">Contact</Link>
        </div>
      </div>
    </div>
  )
}

export default HeroImg
