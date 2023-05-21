import React from "react";
import "./cardHightlights.css";

const CardHightlights = (props) => {
  return (
    <div className="divContainerBox">
      <h2>{props.title}</h2>
      <p>{props.number}</p>
    </div>
  );
};

export default CardHightlights;
