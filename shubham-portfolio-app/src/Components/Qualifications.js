import React from 'react';
import '../styles.css';
import qualifyImage from '../images/qualify.png';

function Qualifications() {
  return (
    <section id="qualifications" className="qualifications">
      <div className="container">
        <h1 className="section-heading"><span>My</span> Qualifications</h1>
        <p>Currently Pursuing BTech in Information Technology at Vivekanand Education Society's Institute</p>

        <div className="slider">
          {/* Slide 1 */}
          <div className="slide">
            <img src={qualifyImage} alt="" />
            <p>
              <b>Qualifications: SSC</b> <br />
              <b>Board:</b> Maharashtra State Board of Secondary & Higher Secondary Education, Pune <br />
              <b>Year:</b> 2019 <br />
              <b>Percentage:</b> 80.40%
            </p>
          </div>

          {/* Slide 2 */}
          <div className="slide">
            <img src={qualifyImage} alt="" />
            <p>
              <b>Qualifications: Diploma</b> <br />
              <b>Board:</b> Maharashtra State Board of Technical Education <br />
              <b>Year:</b> 2022 <br />
              <b>Percentage:</b> 94.94%
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Qualifications;
