import React from "react";
import MyImage from "../../Asserts/1.jpg";
import "./About.css";

export default function Home() {
  return (
    <div>
      <div className="row">
        <div className="col-sm-6">
            <div className="">
              <img src={MyImage} alt="Description" className="card-image" />
            </div> 
        </div>
        <div className="col-sm-6">
          <div className="description">
            <h1 className="card-text">
              Hi, I am
              <br />
              Chamika Rathnayaka
            </h1>

            <p className="developer">I am a Fullstack Developer</p>

            <h4 >
              A responsible, skillful, self learning, dedicated undergraduate
              with team spirit and leadership qualities who is willing to accept
              challenges, seeking an opportunity as a Software Engineer to apply
              and explore the existing and forthcoming technologies in the field
              of Information Technology.
            </h4>
          </div>

        </div>
      </div>
    </div>
  );
}
