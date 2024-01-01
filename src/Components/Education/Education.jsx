import React from "react";
import "./Education.css";
import University from "../../Asserts/moratuwa.png";

export default function Education() {
  return (
    <div className="Education_container">
      <div className="Education-title">
        <h1>Education</h1>
      </div>

      <div className="Education-subtitle">
        <h5> My education has been a journey of self-discovery and growth.</h5>
      </div>
      <div className="Education-subtitle">
        <h5> My educational details are as follows.</h5>
      </div>

      <div className="container">
        <div class="card">
          <div class="imgbox">
            <img
              src={University}
              alt="Description"
              className="uni-card-image"
            />
            <h5>
              Undergraduate
              <br />
              (University of Moratuwa)
              <br />
              Faculty of Infomation Technology
              <br />
              Dec 2022 - Jun 2023
            </h5>
          </div>
          <div class="content"></div>
        </div>
      </div>
    </div>
  );
}
