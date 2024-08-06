// Footer.jsx
import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <a href="#Homepage">Home</a>
          <a href="#Qualification">Qualification</a>
          <a href="#Portfolio">Portfolio</a>
          <a href="#Contact">Contact</a>
          <a href="#About">About</a>
        </div>
        <button
          className="back-to-top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          Back to Top
        </button>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Rahul Paliwal R.
      </div>
    </footer>
  );
};

export default Footer;
