import React, { useState, useMemo } from 'react';
import './App.css';

const App = () => {
  const [height, setHeight] = useState(170); 
  const [weight, setWeight] = useState(70); 
  const [conclusion, setConclusion] = useState('');

  const onWeightChange = (e) => {
    setWeight(e.target.value);
  };

  const onHeightChange = (e) => {
    setHeight(e.target.value);
  };

  const handleConclusion = (result) => {
    if (result < 18.5) {
      return 'Underweight';
    } else if (result >= 18.5 && result < 24.9) {
      return 'Normal weight';
    } else if (result >= 25 && result < 29.9) {
      return 'Overweight';
    } else {
      return 'Obese';
    }
  };

  const output = useMemo(() => {
    const calculateHeight = height / 100;
    const result = weight / (calculateHeight * calculateHeight);
    const conclusionText = handleConclusion(result);
    setConclusion(conclusionText); // Set conclusion directly here

    return Math.round(result * 10) / 10;
  }, [height, weight]);

  return (
    <main>
      <div>
        <h1>BMI Calculator</h1>
        <div className="input-section">
          <p className="slider-output">
            Weight: {weight} kg
          </p>
          <input
            className="input-slider"
            type="range"
            step="1"
            min="40"
            max="200"
            value={weight}
            onChange={onWeightChange}
          />
          <p className="slider-output">
            Height: {height} cm
          </p>
          <input
            className="input-slider"
            type="range"
            min="140"
            max="220"
            value={height}
            onChange={onHeightChange}
          />
        </div>
        <div className="output-section">
          <p>Your BMI is: </p>
          <p className="output">{Math.round(output * 10) / 10}</p>
        </div>
        <div className="conclusion">
          <h2>{conclusion}</h2>
        </div>
      </div>
    </main>
  );
};

export default App;
