import "./FooterStyles.css";

import React from 'react';
import {FaHome, FaMailBulk, FaFacebook, FaLinkedin, FaInstagram} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color: "white", marginRight: "2rem" }}/>
                    <div>
                        <p>Birmingham, United Kingdom</p>
                    </div>
                </div>            
                    <div className="email">
                        <h4>
                            <FaMailBulk size={20} style={{color: "white", marginRight: "2rem" }}/>
                            josiahng.han@gmail.com
                        </h4>
                    </div>
                </div>
            <div className="right">
                <p>2025 | Josiah Product Management</p>
                <p>All Rights reserved</p>
                <div className="social">
                    <a href="https://www.linkedin.com/in/josiah-cho-han-ng-380146183/" target="blank" rel="noopener noreferrer">
                        <FaLinkedin size={30} style={{color: "white", marginRight: "1rem" }}/>
                    </a>
                    <a href="https://www.facebook.com/josiah.ng.7/" target="blank" rel="noopener noreferrer">
                        <FaFacebook size={30} style={{color: "white", marginRight: "1rem" }}/>
                    </a>
                    <a href="https://www.instagram.com/josiahhng/" target="blank" rel="noopener noreferrer">
                        <FaInstagram size={30} style={{color: "white", marginRight: "1rem" }}/>
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer;
