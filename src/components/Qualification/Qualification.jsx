import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <>
      <section className="qualification section" id="portfolio">
        <h2 className="section_title" style={{ textAlign: "center" }}>
          Qualification
        </h2>
        <div className="section_subtitle" style={{ textAlign: "center" }}>
          My personal journey
        </div>

        <div className="qualification_container container">
          <div className="qualification_tabs">
            <div
              className={
                toggleState === 1
                  ? "qualification_button qualification_active button--flex"
                  : "qualification_button button--flex"
              }
              onClick={() => toggleTab(1)}
            >
              <i class="fa-sharp fa-solid fa-graduation-cap icon"></i> Education
            </div>
            <div
              className={
                toggleState === 2
                  ? "qualification_button qualification_active button--flex"
                  : "qualification_button button--flex"
              }
              onClick={() => toggleTab(2)}
            >
              <i class="fa-solid fa-briefcase icon"></i> Experience
            </div>
          </div>
          <div className="qualification_sections">
            <div
              className={
                toggleState === 1
                  ? "qualification_content qualification_content_active"
                  : "qualification_content "
              }
            >
              <div className="qualification_data">
                <div>
                  <h3 className="qualification_title">
                    Bachelor of Information Technology
                  </h3>
                  <span className="qualification_subtitle">
                    Sant Gadge Baba Amravati University
                  </span>

                  <div className="qualification_calender">
                    <i class="fa-solid fa-calendar-days"></i>
                    2020-2024
                  </div>
                </div>

                <div>
                  <span className="qualification_rounder"></span>
                  <span className="qualification_line"></span>
                </div>
              </div>
              <div className="qualification_data">
                <div></div>
                <div>
                  <span className="qualification_rounder"></span>
                  <span className="qualification_line"></span>
                </div>

                <div>
                  <h3 className="qualification_title">HSC Board Examination</h3>
                  <span className="qualification_subtitle">
                    New English Junior College, Wardha
                  </span>

                  <div className="qualification_calender">
                    <i class="fa-solid fa-calendar-days"></i>
                    2018-2020
                  </div>
                </div>
              </div>

              <div className="qualification_data">
                <div>
                  <h3 className="qualification_title">
                    SSC Board of Examination
                  </h3>
                  <span className="qualification_subtitle">
                    Parivartan Mission School, Wardha
                  </span>

                  <div className="qualification_calender">
                    <i class="fa-solid fa-calendar-days"></i>
                    2017 - 2018
                  </div>
                </div>

                <div>
                  <span className="qualification_rounder"></span>
                  <span className="qualification_line"></span>
                </div>
              </div>
              <div className="qualification_data">
                <div></div>
                <div></div>
              </div>
            </div>
            <div
              className={
                toggleState === 2
                  ? "qualification_content qualification_content_active"
                  : "qualification_content "
              }
            >
              <div className="qualification_data">
                <div>
                  <h3 className="qualification_title">Salesforce Develope</h3>
                  <span className="qualification_subtitle">
                    Provoke Pvt.ltd
                  </span>

                  <div className="qualification_calender">
                    <i class="fa-solid fa-calendar-days"></i>
                    May 2023 - July2023
                  </div>
                </div>

                <div>
                  <span className="qualification_rounder"></span>
                  <span className="qualification_line"></span>
                </div>
              </div>
              <div className="qualification_data">
                <div></div>
                <div>
                  <span className="qualification_rounder"></span>
                  <span className="qualification_line"></span>
                </div>

                <div>
                  <h3 className="qualification_title">
                    Web Development Training{" "}
                  </h3>
                  <span className="qualification_subtitle">
                    Internshala Training
                  </span>

                  <div className="qualification_calender">
                    <i class="fa-solid fa-calendar-days"></i>March 2023 - April
                    2023
                  </div>
                </div>
              </div>

              <div className="qualification_data">
                <div>
                  <h3 className="qualification_title">-</h3>
                  <span className="qualification_subtitle">-</span>

                  <div className="qualification_calender">
                    <i class="fa-solid fa-calendar-days"></i>-
                  </div>
                </div>

                <div>
                  <span className="qualification_rounder"></span>
                  <span className="qualification_line"></span>
                </div>
              </div>
              <div className="qualification_data">
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Qualification;
