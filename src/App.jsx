import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

// imports
import TeamBuilder from "./assets/images/icon-team-builder.svg";
import Calculator from "./assets/images/icon-calculator.svg";
import Karma from "./assets/images/icon-karma.svg";
import Supervisor from "./assets/images/icon-supervisor.svg";

const App = () => {
  return (
    <>
      <div className="text__wrap">
        <h1 className="container_title1">Reliable, efficient delivery</h1>
        <h1 className="container_title2">Powered by Technology</h1>
        <p className="container_para">
          Our Artificial Intelligence powered tools use millions of project data
          points to ensure that your project is successful
        </p>
      </div>
      <div className="container">
        {/* container left */}
        <div className="container__left">
          <div className="container">
            <div className="card__wrapper green">
              <p className="card__title">Supervisor</p>
              <p className="card__subtitle">
                Monitors activity to identify project roadblocks
              </p>
              <div className="card__bottom">
                <img
                  src={Supervisor}
                  alt="Supervisor"
                  className="card__image"
                />
              </div>
            </div>
          </div>
        </div>
        {/* container middle */}
        <div className="container__middle">
          {/* item 1 */}
          <div className="container">
            <div className="card__wrapper red">
              <p className="card__title">Team Builder</p>
              <p className="card__subtitle">
                Scans our talent network to create the optimal team for your
                project
              </p>
              <div className="card__bottom">
                <img
                  src={TeamBuilder}
                  alt="Team Builder"
                  className="card__image"
                />
              </div>
            </div>
          </div>
          {/* item 2 */}
          <div className="container">
            <div className="card__wrapper yellow">
              <p className="card__title">Karma</p>
              <p className="card__subtitle">
                Regularly evaluates our talent to ensure quality
              </p>
              <div className="card__bottom">
                <img src={Karma} alt="Karma" className="card__image" />
              </div>
            </div>
          </div>
        </div>
        {/* container right */}
        <div className="container">
          <div className="card__wrapper blue">
            <p className="card__title">Calculator</p>
            <p className="card__subtitle">
              Uses data from past projects to provide better delivery estimates
            </p>
            <div className="card__bottom">
              <img src={Calculator} alt="Calculator" className="card__image" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
