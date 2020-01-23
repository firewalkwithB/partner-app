import React, { useState } from "react"
import logo from "./logo.svg"
import "./App.css"
import Grid from "./Components/Grid"
import Slider from "./Components/Slider"
import ThisWeek from "./Components/ThisWeek"
import moment from "moment"

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
    false
  ])

  const handleClickBox = e => {
    console.log(e.target.innerText)

    let currentIndex = e.target.innerText

    if (grid[currentIndex] === false) {
      grid[currentIndex] = true
    } else {
      grid[currentIndex] = false
    }
    setGrid([...grid])
  }

  // SLIDER CODE

  let [colorNumber, setColorNumber] = useState([0, 0, 0])

  const handleSlider = e => {
    let newColor = [...colorNumber]
    if (e.target.id === "rSlider") {
      newColor[0] = e.target.value
    } else if (e.target.id === "gSlider") {
      newColor[1] = e.target.value
    } else if (e.target.id === "bSlider") {
      newColor[2] = e.target.value
    }
    setColorNumber(newColor)
  }

  // THISWEEK CODE

  let [startDate, setStartDate] = useState(moment("01/19/2020").toDate())

  let weekArray = [
    startDate.toString(),
    moment(startDate)
      .add(1, "days")
      .toString(),
    moment(startDate)
      .add(2, "days")
      .toString(),
    moment(startDate)
      .add(3, "days")
      .toString(),
    moment(startDate)
      .add(4, "days")
      .toString(),
    moment(startDate)
      .add(5, "days")
      .toString(),
    moment(startDate)
      .add(6, "days")
      .toString()
  ]

  //  console.log(weekArray)
  let [week, setWeek] = useState([...weekArray])

  const previousWeek = e => {
    let newStartDate = moment(startDate)
      .subtract(7, "days")
      .toString()

    let previousWeekArray = [
      newStartDate,
      moment(newStartDate)
        .add(1, "days")
        .toString(),
      moment(newStartDate)
        .add(2, "days")
        .toString(),
      moment(newStartDate)
        .add(3, "days")
        .toString(),
      moment(newStartDate)
        .add(4, "days")
        .toString(),
      moment(newStartDate)
        .add(5, "days")
        .toString(),
      moment(newStartDate)
        .add(6, "days")
        .toString()
    ]
    console.log(previousWeekArray)
    setStartDate(newStartDate)
    setWeek([...previousWeekArray])
  }
  const nextWeek = e => {
    let newStartDate = moment(startDate)
      .add(7, "days")
      .toString()
    console.log(newStartDate)
    let previousWeekArray = [
      newStartDate,
      moment(newStartDate)
        .add(1, "days")
        .toString(),
      moment(newStartDate)
        .add(2, "days")
        .toString(),
      moment(newStartDate)
        .add(3, "days")
        .toString(),
      moment(newStartDate)
        .add(4, "days")
        .toString(),
      moment(newStartDate)
        .add(5, "days")
        .toString(),
      moment(newStartDate)
        .add(6, "days")
        .toString()
    ]
    console.log(previousWeekArray)
    setStartDate(newStartDate)
    setWeek([...previousWeekArray])
  }

  return (
    <div className="App">
      <div id="grid">
        <Grid grid={grid} handleClickBox={handleClickBox} />
      </div>
      <Slider colorNumber={colorNumber} handleSlider={handleSlider} />
      <div id="thisWeek">
        <ThisWeek week={week} />
        <div id="weekButtons">
          <button id="previous" onClick={previousWeek}>
            Previous Week
          </button>
          <button id="next" onClick={nextWeek}>
            Next Week
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
