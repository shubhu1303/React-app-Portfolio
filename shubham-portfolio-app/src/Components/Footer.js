import React from 'react';
import '../styles.css';
import footerLogo from '../images/logo-2.png';
import facebookImage from '../images/facebook.png';
import instagramImage from '../images/instagram.png';

function Footer() {
  return (
    <footer>
      <img className="footer-logo" src={footerLogo} alt="" />
      <div className="footer-socials">
        <a href="https://www.facebook.com/profile.php?id=100069870282437">
          <img src={facebookImage} alt="" />
        </a>
        <a href="https://www.instagram.com/">
          <img src={instagramImage} alt="" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
