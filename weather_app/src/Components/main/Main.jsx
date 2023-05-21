import React from "react";
import CardWeather from "./card_weather/CardWeather";
import CardHightlights from "./card_hightlights/CardHightlights";

import "./main.css";
const Main = () => {
  return (
    <>
      <CardWeather />
      <div className="divBox">
        <CardHightlights title="Wind Status" number="7mph" />
        <CardHightlights title="Humidity" />
      </div>
      <div className="divBox">
        <CardHightlights title="Visibility" />
        <CardHightlights title="Air Pressure" />
      </div>
    </>
  );
};

export default Main;
