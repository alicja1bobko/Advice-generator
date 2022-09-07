import React from "react";
import dice from "../assets/images/icon-dice.svg";
import dividerMobile from "../assets/images/pattern-divider-mobile.svg";
import dividerDesktop from "../assets/images/pattern-divider-desktop.svg";
const Card = () => {
  return (
    <div className="advice-container">
      <h1 className="advice-id">Advice #117</h1>
      <blockquote className="advice-text">
        "It is easy to sit up and take notice, what's difficult is getting up
        and taking action."
      </blockquote>
      <picture>
        <source media="(min-width:1440px)" srcSet={dividerDesktop} />
        <img src={dividerMobile} alt="divider" className="divider" />
      </picture>
      <button id="dice">
        <img src={dice} alt="dice to generate new advice" />
      </button>
    </div>
  );
};

export default Card;
