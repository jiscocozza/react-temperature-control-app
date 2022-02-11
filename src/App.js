import React from 'react';
import { useState } from 'react';

const App = () => {
  const [temperatureValue, setTemperatureValue] = useState(24);
  const [redValue, setRedValue] = useState(153);
  const [greenValue, setGreenValue] = useState(190);
  const [blueValue, setBlueValue] = useState(102);
  const [outerRingColor, setOuterRingColor] = useState(`rgba(${redValue}, ${greenValue}, ${blueValue}, 1)`);
  
  const addTemperature = () => {
    if (temperatureValue > 39) return;
    setTemperatureValue(temperatureValue + 1);
    setRedValue(redValue + 6.375);
    setGreenValue(greenValue - 6.375);
    setBlueValue(blueValue - 6.375);
    setOuterRingColor(`rgba(${redValue}, ${greenValue}, ${blueValue}, 1)`);    
  }

  const restTemperature = () => {
    if (temperatureValue < 1) return
    setTemperatureValue(temperatureValue - 1);
    setRedValue(redValue - 6.375);
    setGreenValue(greenValue + 6.375);
    setBlueValue(blueValue + 6.375);
    setOuterRingColor(`rgba(${redValue}, ${greenValue}, ${blueValue}, 1)`);
    console.log(redValue, greenValue, blueValue);
  }

  return (
    <div className="App">
        <div className="container">
          <div className="outer-ring" style={{borderColor: outerRingColor}}>
            <div className="temperature-container">
              <h1 className="temperature">{temperatureValue}°</h1>
            </div>
          </div>
          <div className="buttons-container">
            <span className="add-button-extrude">
              <button onClick={ ()=> addTemperature() }>+</button>
            </span>
            <span className="rest-button-extrude">
              <button onClick={ ()=> restTemperature() }>-</button>
            </span>
            <span className="light"></span>
          </div>
        </div>
        <span className="control-extrude">
      </span>
    </div>
  );
}

export default App;
