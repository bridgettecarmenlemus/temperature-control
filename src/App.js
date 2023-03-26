import React from "react";
import { useState } from "react";

const App = () => {
  const [temperature, setTemperature] = useState(10);

  return (
    <div className="app-container">
      <div className="temperature-display-container">
        <div className="temperature-display">{temperature}</div>
      </div>
      <div className="button-container">
        <button onClick={() => setTemperature(temperature + 1)}>+</button>
        <button onClick={() => setTemperature(temperature-1)}>-</button>
      </div>
    </div>
  );
};

export default App;
