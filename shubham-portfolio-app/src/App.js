import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import About from './Components/About';
import Skills from './Components/Skills';
import Qualifications from './Components/Qualifications';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import ThankYou from './Components/ThankYou';

import './styles.css';
import './utilities.css';

function App() {
  return (
    <Router>
      <div className="site-main-wrapper">
        <Header />
        <About />
        <Skills />
        <Qualifications />
        <Projects />
        <Contact contactInfo={{ phone: '+985 123 7856', email: 'jha132003@gmail.com', location: '202 Hillside Residency. Anand Nagar, Badlapur. India' }} />



        <Routes>
          <Route path="/ThankYou" element={<ThankYou/>} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;