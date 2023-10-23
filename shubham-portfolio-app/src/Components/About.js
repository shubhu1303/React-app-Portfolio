import React from 'react';
import '../styles.css';
import webImage from '../images/web.png';
import facebookImage from '../images/facebook.png';
import linkedinImage from '../images/link.png';
import githubImage from '../images/git (1).png';

function About() {
  return (
    <section id="about" className="about">
      <div className="container flex items-center about-inner-wrap">
        <div className="flex-1">
          <img className="about-me-img" src={webImage} alt="" />
        </div>
        <div className="flex-1 right">
          <h1>About <span>Me</span></h1>
          <h3>Hello! I’m Shubham Jha.</h3>
          <p align="justify">
            Enthusiastic student with a passion for innovation and problem-solving.
            Proficient in programming languages like C++ and Java, adept at software development, and eager to explore emerging technologies.
            Strong analytical skills honed through coursework and projects, with a keen interest in web development and UI/UX designing.
            Committed to continuous learning, teamwork, and contributing to technology-driven advancements.
          </p>
          <div className="social">
            <a href="https://www.facebook.com/profile.php?id=100069870282437"><img src={facebookImage} alt="" /></a>
            <a href="https://www.linkedin.com/in/shubham-jha-6232811b7"><img src={linkedinImage} alt="" /></a>
            <a href="https://github.com/shubhu1303"><img src={githubImage} alt="" /></a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
