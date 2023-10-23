// Skills.js
import React from 'react';
import '../styles.css';
import Card from './Card'; // Import the Card component
import brushImage from '../images/brush.png';
import codeImage from '../images/code.png';
import mediaImage from '../images/media.png';
const skillsData = [
  {
    image: brushImage,
    title: 'FrontEnd Designing',
    description: 'Creating and designing the user interface (UI) and user experience (UX) of websites and web applications.',
  },

  {
    image: codeImage,
    title: 'Intermediate Coding',
    description: 'Intermediate level programming in languages like C, C++, Java which builds upon my foundational knowledge in a content area.',
  },

  {
    image: mediaImage,
    title: 'Enthusiastic',
    description: 'Always ready to learn something new through different platforms to enhance my skillsets.',
  },
  // Add more skills data as needed
];

function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <h1 className="section-heading"><span>My</span> Skills</h1>
        <p>Skillsets I Possess</p>
        <div className="card-wrapper">
          {skillsData.map((skill, index) => (
            <Card key={index} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;




