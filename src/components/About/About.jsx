import React from "react";
import "./about.css";
import AboutImg from "./harshee.png";
import Pdf from "./Harsha_Batra.pdf";
import Info from "./Info";
const About = () => {
  return (
    <section className="about section " id="about">
      <h2 className="section_title" style={{ textAlign: "center" }}>
        About Me
      </h2>
      <div className="section_subtitle" style={{ textAlign: "center" }}>
        My introduction
      </div>

      <div className="about_container container grid">
        <img src={AboutImg} alt="Profile" className="about_img" />
        <div className="about_data">
          <Info />

          <p className="about_description">
            Passionate web developer skilled in creating dynamic and
            user-friendly websites. Specializes in both front-end and back-end
            development with expertise in HTML, CSS, JavaScript. Let's connect and bring your web projects to
            life!
          </p>
          <a href={Pdf} className="button button--flex" target="_blank">
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
