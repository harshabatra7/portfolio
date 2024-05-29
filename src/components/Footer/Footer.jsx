import React from "react";
import "./footer.css"
const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer_container container">
          <h1 className="footer_title">Harsha Batra</h1>

          <ul className="footer_list">
            <li>
              <a href="#about" className="footer_link">
                About
              </a>
            </li>
           
            <li>
              <a href="#skills" className="footer_link">
                Skills
              </a>
            </li>
            <li>
              <a href="#contact" className="footer_link">
                Contact
              </a>
            </li>
          </ul>

          <div className="footer_social">
            <a href="https://www.instagram.com/harsha_batra07?igsh=d2dzang4NjY2cmcz" className="footer_social_link" target="_blank">
              <i class="fa-brands fa-instagram"></i>
            </a>
            <a href="#" className="footer_social_link" target="_blank">
              <i class="fa-brands fa-twitter"></i>
            </a>
            <a href="https://github.com/harshabatra7" className="footer_social_link" target="_blank">
              <i class="fa-brands fa-github"></i>
            </a>
          </div>

          <span className="footer_copy">
            &copy; Harsha_Batra : All rights reserved 
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
