import React from "react";
import "./Education.css";
import University from "../../Asserts/moratuwa.png";
import diploma from "../../Asserts/unicat.jpg";
import School from "../../Asserts/ICC.png";

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
        <div class="Educard">
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
            </h5>
          </div>
          <div class="content">
            <ul>
              <li>Undergraduate</li>
              <li>University of Moratuwa</li>
              <li>BSc.(Hons)in InformationTechnology</li>
              <li>2020-2024 (expected)</li>
              <li>Current GPA - 3.37</li>
            </ul>
          </div>
        </div>

        {/* UniCAT */}
        <div class="Educard">
          <div class="imgbox">
            <img src={diploma} alt="Description" className="uni-card-image" />
            <h5 className="unicat">
              UNICAT
              <br />
              Universal Computer Accounting
              <br />
              Technologies
            </h5>
          </div>
          <div class="content">
            <ul>
              <li> UNICAT(Universal Computer Accounting Technologies)</li>
              <li>Certificate course in :</li>
              <ul>
                <li>C/C++</li>
                <li>Python</li>
                <li>Java</li>
                <li>Web Design</li>
              </ul>
              <li>2019</li>
            </ul>
          </div>
        </div>

        {/* Ibbagamuwa Central Collage*/}
        <div class="Educard">
          <div class="imgbox">
            <img src={School} alt="Description" className="uni-card-image" />
            <h5 className="icc">
              Ibbagamuwa Central College
              <br />
              (2008-2016)
            </h5>
          </div>
          <div class="content">
            <ul>
              <li> Ibbagamuwa Central College </li>
              <li>2008- 2016</li>

              <li> G.C.E Advance Level 2018 - Physical Science Stream</li>
              <li>1-A , 2-B (Z score 1.5412)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
