import React from "react";
import "./Skills.css";

export default function Skills() {
  return (
    <div>
      <div className="skill_container">
        <h1>SKILLS</h1>
      </div>
      <div className="skill-title">
        <h5>Here are some of my skills on which I have been working on </h5>
      </div>
      <div className="skill-title">
        <h5>for the past few years. </h5>
      </div>

      <div class="row skills_grid">
        <div class="col-sm-6">
          <div class="card skills_card">
            <div className="card-header">
              <h3>Web Development</h3>
            </div>
            <div className="skill-details">
              <div class="row skills_grid">
                <div class="col-sm-3 individual-skill glow">Spring Boot</div>
                <div class="col-sm-3 individual-skill glow">Java Script</div>
              </div>
              <div class="row skills_grid">
                <div class="col-sm-3 individual-skill glow ">React</div>
                <div class="col-sm-3 individual-skill glow">Node js</div>
              </div>
              <div class="row skills_grid">
                <div class="col-sm-3 individual-skill glow ">Bootstrap</div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="card skills_card">
            <div className="card-header">
              <h3>Programming languages</h3>
            </div>
            <div className="skill-details">
              <div class="row skills_grid">
                <div class="col-sm-3 individual-skill glow">Java</div>
                <div class="col-sm-3 individual-skill glow">C</div>
              </div>
            </div>
          </div>
          <div class="card skills_card">
            <div className="card-header">
              <h3>Database</h3>
            </div>
            <div className="skill-details">
              <div class="row skills_grid">
                <div class="col-sm-3 individual-skill glow">MySQL</div>
                <div class="col-sm-3 individual-skill glow">MSSQL</div>
                <div class="col-sm-3 individual-skill glow">Oracle</div>
                <div class="col-sm-3 individual-skill glow">MongoDB</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
