import MyImage from "../../Asserts/1.jpg";
import "./About.css";

export default function Home() {
  return (
    <div>
      <div className="row about-container">
        <div className="col-sm-6">
          <div className="">
            <h1 className="card-text">
              Hi, I am
              <br />
              Chamika Rathnayaka
            </h1>

            <p className="developer">I am a Fullstack Developer</p>

            <h4 className="description">
              A responsible, skillful, self learning, dedicated undergraduate
              with team spirit and leadership qualities who is willing to accept
              challenges, seeking an opportunity as a Software Engineer to apply
              and explore the existing and forthcoming technologies in the field
              of Information Technology.
            </h4>
          </div>

          <div class="wrapper">
            <a className="Resume-button"href="https://drive.google.com/file/d/1LH1xzRjbMb69YLA5ZjWFXrpTXNAskMm3/view?usp=drive_link">
              <span>Check Resume</span>
            </a>
          </div>
        </div>

        <div className="col-sm-6">
          <div className="image">
            <img src={MyImage} alt="Description" className="card-image" />
          </div>
        </div>
      </div>
    </div>
  );
}
