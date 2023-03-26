import React from "react";
import { useState } from "react";

const App = () => {
  const [temperature, setTemperature] = useState(10);
  const [temperatureColor, setTemperatureColor] = useState("cold");

  return (
    <div className="app-container">
      <div className="temperature-display-container">
        <div className={`temperature-display ${temperatureColor}`}>{temperature}°</div>
      </div>
      <div className="button-container">
        <button onClick={() => setTemperature(temperature + 1)}>+</button>
        <button onClick={() => setTemperature(temperature-1)}>-</button>
      </div>
    </div>
  );
};

export default App;
