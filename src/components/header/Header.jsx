import React, { useState } from "react";
import "./header.css";
const Header = () => {
  // window scroll then change the color
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");

    if (window.scrollY >= 80) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
  });
// useState
  const [toggle, setToggle] = useState(false);
  const [activeNav,setActiveNav] = useState("#home")
  return (
    <>
      <header className="header container">
        <nav className="nav">
          <a href="index.html" className="nav_logo">
            <span className="dark">Harsha </span>Batra
          </a>

          <div className={toggle ? "nav_menu show_menu" : "nav_menu"}>
            <ul className="nav_list grid">
              <li className="nav_item">
                <a href="#home" 
                onClick={()=>setActiveNav("#home")}
                className={activeNav === "#home" ?  "nav_link active-link" :"nav_link "}>
                  <i className="fa-solid fa-house nav_icon"></i> Home
                </a>
              </li>
              <li className="nav_item">
                <a href="#about"  onClick={()=>setActiveNav("#about")}
                className={activeNav === "#about" ? "nav_link active-link" :"nav_link "}>
                  <i className="fa-solid fa-user nav_icon"></i> About
                </a>
              </li>
              <li className="nav_item">
                <a href="#skills"  onClick={()=>setActiveNav("#skills")}
                className={activeNav === "#skills" ? "nav_link active-link" :"nav_link "}>
                  <i className="fa-solid fa-code nav_icon"></i> Skills
                </a>
              </li>
              <li className="nav_item">
                <a href="#services"  onClick={()=>setActiveNav("#services")}
                className={activeNav === "#services" ? "nav_link active-link" :"nav_link "}>
                  <i className="fa-solid fa-briefcase nav_icon"></i> Services
                </a>
              </li>
              <li className="nav_item">
                <a href="#portfolio"  onClick={()=>setActiveNav("#portfolio")}
                className={activeNav === "#portfolio" ? "nav_link active-link" :"nav_link "}>
                  <i class="fa-solid fa-user nav_icon"></i> Qualification
                </a>
              </li>
              <li className="nav_item">
                <a href="#contact"  onClick={()=>setActiveNav("#contact")}
                className={activeNav === "#contact" ? "nav_link active-link" :"nav_link "}>
                  <i class="fa-solid fa-phone nav_icon"></i> Contact
                </a>
              </li>
            </ul>

            <i
              className="fa-solid fa-xmark nav_close nav_icon"
              onClick={() => {
                setToggle(!toggle);
              }}
            ></i>
          </div>
          <div
            className="nav_toggle"
            onClick={() => {
              setToggle(!toggle);
            }}
          >
            <i className="fa-solid fa-bars"></i>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
