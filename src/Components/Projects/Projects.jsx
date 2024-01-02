import React from "react";
import "./Projects.css";

export default function Projects() {
  return (
    <div class="row container">
      <div className="Projects-title">
        <h1>Projects</h1>
      </div>
      <div className="Projects-title">
        <h5 className="Projects-subtitle"> Here are some of my projects.</h5>
      </div>

      <div className="Projects-content">
        <div class="col-sm-4 zoom">
          <div class="P-card">
            <div class="P-card-body">
              <h5 class="P-card-title">Card title</h5>
              <p class="P-card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              {/* <a href="#" class="btn btn-primary">
                Go somewhere
              </a> */}
            </div>
          </div>
        </div>

        <div class="col-sm-4">
        <div class="P-card">
            <div class="P-card-body">
              <h5 class="P-card-title">Card title</h5>
              <p class="P-card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              {/* <a href="#" class="btn btn-primary">
                Go somewhere
              </a> */}
            </div>
          </div>
        </div>
        <div class="col-sm-4"><div class="P-card">
            <div class="P-card-body">
              <h5 class="P-card-title">Card title</h5>
              <p class="P-card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              
            </div>
          </div></div>
      </div>
    </div>
  );
}
