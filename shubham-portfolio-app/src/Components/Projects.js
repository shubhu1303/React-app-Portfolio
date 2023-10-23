import React from 'react';
import '../styles.css';
import grpexpImage from '../images/grpexp.png';
import javaImage from '../images/JAVA.png';
import pythonImage from '../images/python.png';

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h1 className="section-heading"><span>My</span> Projects</h1>
        <p>These are some projects which I have created in my ongoing course</p>

        <div className="card-wrapper">
          <div className="card">
            <div className="img-wrapper">
              <img src={grpexpImage} alt="" />
            </div>
            <div className="card-content">
              <h1>Group Expense Tracker</h1>
              <span>May 12, 2021</span>
              <p>Group Expense Tracker will not only help us divide our money, but it will also help us track our expenses with respect to several modules to make our journey more comfortable.</p>
            </div>
          </div>
          <div className="card">
            <div className="img-wrapper">
              <img src={javaImage} alt="" />
            </div>
            <div className="card-content">
              <h1>Electricity Bill Management System</h1>
              <span>Jan 10, 2022</span>
              <p>Electricity Billing System is a system that is meant to partially computerize the work performed in the Electricity Board like generating monthly electricity bill, record of consuming unit of energy, store record of the customer and previous unpaid record.</p>
            </div>
          </div>
          <div className="card">
            <div className="img-wrapper">
              <img src={pythonImage} alt="" />
            </div>
            <div className="card-content">
              <h1>Product Comparison System</h1>
              <span>April 14, 2022</span>
              <p>Project will help the consumer compare the price, size, and brand of the product in two or three e-commerce websites, see which product is more worthy to the consumer, then the application system will make a decision-making to the consumer after doing a calculation of the total price in the consumer product list.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
