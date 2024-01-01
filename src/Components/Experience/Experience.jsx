import React from "react";
import "./Experience.css";
import IntervestImage from "../../Asserts/intervest.jpg";

export default function Experience() {
  return (
    <div className="Experience_container">
      <div className="Experience-title">
        <h1>EXPERIENCE</h1>
      </div>
      <div className="Experience-title">
        <h5> My work experience as a software engineer Intern</h5>
      </div>

      <div className="container">
        <div class="card">
          <div class="imgbox">
            <img
              src={IntervestImage}
              alt="Description"
              className="card-image"
            />
            <h5>
              Software Engineer- Intern
              <br />
              (Intervest Software Technologies)
              <br />
              Dec 2022 - Jun 2023
            </h5>
          </div>
          <div class="content">
            <ul>
              <li>Working on a variety of tasks and projects</li>
              <li>Working on Company real-world projects</li>
              <li>Working on Automation process - Selenium</li>
              <li>Bug fixing and testing</li>
              <li>Research and development</li>
              <li>Skills and Technologies:</li>
              <ul>
                <li>Enonic XP</li>
                <li>Agile</li>
                <li>Liquibase</li>
                <li>Spring Boot</li>
                <li>Oracle DB</li>
                <li>ReactJS</li>
                <li>Selenium</li>
              </ul>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
