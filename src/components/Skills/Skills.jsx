import React from "react";
import Frontend from "./Frontend";
import "./skills.css"

const Skills = () => {
  return (
    <>
      <section className="skills section" id="skills">
        <h2 className="section_title" style={{ textAlign: "center",marginBottom: 25 }}>
          Skills
        </h2>

        <div className="skills_container container " style={{display:"flex",justifyContent:"center"}}>
          <Frontend/>
        </div>
      </section>
    </>
  );
};

export default Skills;
