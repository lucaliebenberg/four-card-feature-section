import React from "react";

// imports
import TeamBuilder from "../assets/images/icon-team-builder.svg";

const Card = () => {
  return (
    <div className="container">
      <div className="card__wrapper">
        <p className="card__title">Team Builder</p>
        <p className="card__subtitle">
          Scans our talent network to create the optimal team for your project
        </p>
        <div className="card__bottom">
          <img src={TeamBuilder} alt="Team Builder" className="card__image" />
        </div>
      </div>
    </div>
  );
};

export default Card;
