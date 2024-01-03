import React from "react";
import "./Projects.css";
import FYP from "../../Asserts/FYP.jpg";
import Vehicle from "../../Asserts/vehicle.jpg";
import Fish from "../../Asserts/Fish.jpg";

export default function Projects() {
  return (
    <div class="row container">
      <div className="Projects-title">
        <h1>Projects</h1>
      </div>

      <h5 className="Projects-subtitle"> Some Projects done by me.</h5>

      <div class="col-sm-3 xcard">
        <div className="P-card-content">
          <img src={FYP} alt="Description" className="P-card-image" />

          <h6>
            {" "}
            Predicting Oil Price Movement Using Reddit Posts on Israel Palestine
            War (Ongoing)
          </h6>
        </div>
        <div className="P-card-content">
          <p>(Fourth Year Research Project - University Of Moratuwa)</p>
        </div>
        <div className="P-card-details">
          <p>
            Aim to develop a comprehensive predictive model that integrates
            Reddit post content analysis, Oil price data, and user engagement
            metrics.
          </p>
          <p>
            <ul>
              <li>
                Technologies:
                <ul>
                  <li>NLP</li>
                  <li>Python</li>
                </ul>
              </li>
            </ul>
          </p>
        </div>
      </div>
      <div class="col-sm-3 xcard">
        <div className="P-card-content">
          <img src={Vehicle} alt="Description" className="P-card-image" />

          <h6>
            {" "}
            Smart Office,School Transport and Passenger Magagement System
          </h6>
        </div>
        <div className="P-card-content">
          <p> (Second Year Software Project - University Of Moratuwa)</p>
        </div>
        <div className="P-card-details">
          <p>
            A web and mobile based project that provides a user friendly
            interface and a proper computerized system to manage the vehicle
            rent facility and daily transportation of school students and
            employees in the organization
          </p>
          <p>
            Role: Full-stack developer Technologies: React, NodeJs, MongoDB,
            Express (MERN Stack), CSS, Bootstrap
          </p>
        </div>
      </div>
      <div class="col-sm-3 xcard">
        <div className="P-card-content">
          <img src={Fish} alt="Description" className="P-card-image" />

          <h6> An Automated Ornamental Fish Aquarium</h6>
        </div>
        <div className="P-card-content">
          <p> (First Year Hardware Project University Of Moratuwa)</p>
        </div>
        <div className="P-card-details">
          <p>
            Developed an automated aquarium to control a favorable environment
            by controlling PH value, Temprature, Oxygen level, Light conditions
            and automated feeder in order to increase the fish production and
            minimize the labor costs.
          </p>
          <p>
            <ul>
              <li>
              <li>Technologies</li>
                <ul>
                  <li>Atmega32</li>
                  <li>Atmel Studio</li>
                </ul>
              </li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
}
