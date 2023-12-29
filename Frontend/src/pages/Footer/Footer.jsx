

import React from 'react';
import footerStyle from './Footer.module.css'; // 

const Footer = () => {
  return (
    <div className={footerStyle.footer}>
      <p>&copy; 2023 Your Company. All rights reserved.</p>

      <div className={footerStyle.socialIcons}>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
