import React from 'react';
import '../styles.css';
import logoImage from '../images/logo.svg';
import shubhamImage from '../images/Shubham1.jpg';
import resumePdf from '../images/Resume.docx';


function Header() {
  return (
    <header>
      <div className="container">
        <nav id="main-nav" className="flex items-center justify-between">
          <div className="left flex items-center">
            <div className="branding">
              <img src={logoImage} alt="" />
            </div>
            <div>
              <a href="#">Home</a>
              <a href="#about">About</a>
              <a href="#skills">Skills</a>
              <a href="#qualifications">Qualification</a>
              <a href="#projects">Projects</a>
            </div>
          </div>
          <div className="right">
            <a href="#contact">
              <button className="btn btn-primary">Contact</button>
            </a>
          </div>
        </nav>
        <div className="student flex items-center justify-between">
          <div className="left flex-1 flex justify-center">
            <img src={shubhamImage} alt="" />
          </div>
          <div className="right flex-1">
            <h3>Shubham Jha</h3>
            <h1>
              I’m a Creative <span>web Designer</span>
            </h1>
            <p></p>
            <div>
              <a href={resumePdf}>
                <button className="btn btn-secondary">DOWNLOAD CV</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
