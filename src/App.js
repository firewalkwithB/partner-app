import React, { useState } from "react"
import logo from "./logo.svg"
import "./App.css"
import Grid from "./Components/Grid"

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
    false
  ])

  const handleClickBox = e => {
    let boxes = document.querySelectorAll(".box")
    let currentIndex = boxes.indexOf(e.target)
    if (grid[currentIndex].id === false) {
      grid[currentIndex].id = true
    } else {
      grid[currentIndex].id = false
    }
  }

  return (
    <div className="App">
      <div id="grid">
        <Grid grid={grid} handleClickBox={handleClickBox} />
      </div>
    </div>
  )
}

export default App
