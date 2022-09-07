/* eslint-disable react-hooks/exhaustive-deps */
import React, { FunctionComponent, useEffect, useState } from "react";
import dice from "../assets/images/icon-dice.svg";
import dividerMobile from "../assets/images/pattern-divider-mobile.svg";
import dividerDesktop from "../assets/images/pattern-divider-desktop.svg";

interface Advice {
  id: number;
  advice: string;
}

const Card: FunctionComponent = () => {
  const [advice, setAdvice] = useState<Advice>({
    id: 0,
    advice: "",
  });

  const api = `https://api.adviceslip.com/advice`;

  useEffect(() => {
    fetchAdvice();
  }, []);

  const fetchAdvice = (): void => {
    fetch(api)
      .then((res) => res.json())
      .then((data) => {
        setAdvice({ id: data.slip.id, advice: data.slip.advice });
      });
  };

  return (
    <div className="advice-container">
      <h1 className="advice-id">Advice #{advice.id}</h1>
      <blockquote className="advice-text">{advice.advice}</blockquote>
      <picture>
        <source media="(min-width:1440px)" srcSet={dividerDesktop} />
        <img src={dividerMobile} alt="divider" className="divider" />
      </picture>
      <button id="dice" onClick={fetchAdvice}>
        <img src={dice} alt="dice to generate new advice" />
      </button>
    </div>
  );
};

export default Card;
