import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Grid from './Components/Grid';
import Slider from './Components/Slider';

//GRID CODE
function App() {
  let [grid, setGrid] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const handleClickBox = e => {
    console.log(e.target.innerText);

    let currentIndex = e.target.innerText;

    if (grid[currentIndex] === false) {
      grid[currentIndex] = true;
    } else {
      grid[currentIndex] = false;
    }
    setGrid([...grid]);
  };

  // SLIDER CODE

  let [colorNumber, setColorNumber] = useState([0, 0, 0]);

  return (
    <div className="App">
      <div id="grid">
        <Grid grid={grid} handleClickBox={handleClickBox} />
      </div>
      <Slider colorNumber={colorNumber} />
    </div>
  );
}

export default App;
