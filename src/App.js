import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Grid from './Components/Grid';

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

  return (
    <div className="App">
      <div id="grid">
        <Grid grid={grid} handleClickBox={handleClickBox} />
      </div>
    </div>
  );
}

export default App;
