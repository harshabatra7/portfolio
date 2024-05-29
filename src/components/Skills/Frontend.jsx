import React from "react";
import "./skills.css";

const Frontend = () => {
  return (
    <>
      <div className="skills_content">
        <h3 className="skills_title">Technical Skills</h3>
        <div className="skills_box">
          <div className="skills_group">
            <div className="skills_data">
              <i class="fa-solid fa-shield-halved"></i>
              <div>
                <h3 className="skills_name">HTML:5</h3>
              </div>
            </div>

            <div className="skills_data">
              <i class="fa-solid fa-shield-halved"></i>
              <div>
                <h3 className="skills_name">CSS</h3>
              </div>
            </div>

            <div className="skills_data">
              <i class="fa-solid fa-shield-halved"></i>
              <div>
                <h3 className="skills_name"> Bootstrap </h3>
              </div>
            </div>
            <div className="skills_data">
              <i class="fa-solid fa-shield-halved"></i>
              <div>
                <h3 className="skills_name"> Tailwind CSS </h3>
              </div>
            </div>
          </div>

          <div className="skills_group">
            <div className="skills_data">
              <i class="fa-solid fa-shield-halved"></i>
              <div>
                <h3 className="skills_name">Java</h3>
              </div>
            </div>
            <div className="skills_data">
              <i class="fa-solid fa-shield-halved"></i>
              <div>
                <h3 className="skills_name">SQL</h3>
              </div>
            </div>

            <div className="skills_data">
              <i class="fa-solid fa-shield-halved"></i>
              <div>
                <h3 className="skills_name">JavaScript</h3>
              </div>
            </div>

            <div className="skills_data">
              <i class="fa-solid fa-shield-halved"></i>
              <div>
                <h3 className="skills_name">Git</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Frontend;
