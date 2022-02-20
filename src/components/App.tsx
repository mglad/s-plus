import hero from "../assets/hero_image.png";
import inGame from "../assets/in_game.png";
import { GithubLogo } from "phosphor-react";

import { ReactComponent as Logo } from "../assets/logo_text.svg";
import Overlay from "./Overlay";
import Video from "./Video";

function App() {
  return (
    <main>
      <section className="hero">
        <div className="container">
          <div className="hero-columns">
            <div className="hero-content">
              <Logo />
              <h1 className="shimmer">
                <span>S</span>Plus
              </h1>
              <p>
                The tool that <span>tracks</span> LoL grades,{" "}
                <span>predicts</span> them, and <span>learns</span> from them.
              </p>
              <button />
            </div>
            <img src={hero} alt="application" />
          </div>
        </div>
      </section>
      <section className="container">
        <div className="section-columns">
          <div className="section-image">
            <img src={inGame} alt="In-game overlay" />
            <Overlay />
          </div>
          <div className="section-content">
            <h2>
              <span>View</span> live in-game performance
            </h2>
            <p>
              Grade is calculated using a deep learning model of 1000+ games
            </p>
          </div>
        </div>
      </section>
      <section className="container">
        <div className="section-columns reverse">
          <div className="section-content">
            <h2>
              <span>Track</span> your top champions
            </h2>
            <p>
              Champion data includes recorded grade, kills, assists, and deaths
            </p>
          </div>
          <div className="section-image">
            <Video />
          </div>
        </div>
      </section>
      <section className="container faq">
        <div>
          <h2>FAQ</h2>
          <div>
            <h3>How does it work?</h3>
            <p>
              The application records grades by using the LoL client's endpoint
              for mastery grades.
            </p>
          </div>
          <div>
            <h3>How is live performance calculated?</h3>
            <p>
              Live performance is calculated using a PyTorch deep learning
              model. The model has been trained with a large set of games using
              several statistics such as kills, assists, and deaths.
            </p>
          </div>
          <div>
            <h3>What data is collected?</h3>
            <p>
              Kills, assists, deaths, mastery grade, summoner name, and match ID
              are recorded for every game played while S+ is open.
            </p>
          </div>
          <div>
            <h3>Why is this data collected?</h3>
            <p>
              The data is collected to improve the deep learning algorithm as
              well as to save your mastery data.
            </p>
          </div>
          <div>
            <h3>How can I report a bug?</h3>
            <p>
              <a href="https://github.com/mglad/s-plus/issues/new?assignees=&labels=&template=bug_report.md&title=">
                Report a bug here
              </a>
            </p>
          </div>
          <div>
            <h3>How can I request a new feature?</h3>
            <p>
              <a href="https://github.com/mglad/s-plus/issues/new?assignees=&labels=enhancement&template=feature_request.md&title=">
                Request a new feature here
              </a>
            </p>
          </div>
        </div>
      </section>
      <footer>
        Made by{" "}
        <a href="https://github.com/mglad">
          <GithubLogo />
          MGlad
        </a>
      </footer>
    </main>
  );
}

export default App;
