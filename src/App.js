import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Grid from './Components/Grid';
import Slider from './Components/Slider';
import ThisWeek from './Components/ThisWeek';
import Inflect from './Components/Inflect';
import moment from 'moment';

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

  const handleSlider = e => {
    let newColor = [...colorNumber];
    if (e.target.id === 'rSlider') {
      newColor[0] = e.target.value;
    } else if (e.target.id === 'gSlider') {
      newColor[1] = e.target.value;
    } else if (e.target.id === 'bSlider') {
      newColor[2] = e.target.value;
    }
    setColorNumber(newColor);
  };

  // THISWEEK CODE

  let [startDate, setStartDate] = useState(moment('01/19/2020').toDate());

  let weekArray = [
    startDate.toString(),
    moment(startDate)
      .add(1, 'days')
      .toString(),
    moment(startDate)
      .add(2, 'days')
      .toString(),
    moment(startDate)
      .add(3, 'days')
      .toString(),
    moment(startDate)
      .add(4, 'days')
      .toString(),
    moment(startDate)
      .add(5, 'days')
      .toString(),
    moment(startDate)
      .add(6, 'days')
      .toString(),
  ];

  //  console.log(weekArray)
  let [week, setWeek] = useState([...weekArray]);

  const previousWeek = e => {
    let newStartDate = moment(startDate)
      .subtract(7, 'days')
      .toString();

    let previousWeekArray = [
      newStartDate,
      moment(newStartDate)
        .add(1, 'days')
        .toString(),
      moment(newStartDate)
        .add(2, 'days')
        .toString(),
      moment(newStartDate)
        .add(3, 'days')
        .toString(),
      moment(newStartDate)
        .add(4, 'days')
        .toString(),
      moment(newStartDate)
        .add(5, 'days')
        .toString(),
      moment(newStartDate)
        .add(6, 'days')
        .toString(),
    ];

    setStartDate(newStartDate);
    setWeek([...previousWeekArray]);
  };
  const nextWeek = e => {
    let newStartDate = moment(startDate)
      .add(7, 'days')
      .toString();
    console.log(newStartDate);
    let previousWeekArray = [
      newStartDate,
      moment(newStartDate)
        .add(1, 'days')
        .toString(),
      moment(newStartDate)
        .add(2, 'days')
        .toString(),
      moment(newStartDate)
        .add(3, 'days')
        .toString(),
      moment(newStartDate)
        .add(4, 'days')
        .toString(),
      moment(newStartDate)
        .add(5, 'days')
        .toString(),
      moment(newStartDate)
        .add(6, 'days')
        .toString(),
    ];

    setStartDate(newStartDate);
    setWeek([...previousWeekArray]);
  };

  // INFLECT CODE

  let [inflectList, setInflectList] = useState([]);

  const handleSubmitInflect = e => {
    e.preventDefault();
    let inflectListCopy = [...inflectList, e.target.elements[0].value];
    setInflectList(inflectListCopy);
  };

  const handleDeleteInflect = e => {
    let inflectListCopy = [...inflectList];
    inflectListCopy.splice(e.target.value, 1);
    setInflectList(inflectListCopy);
  };

  return (
    <div id="app">
      <div id="grid">
        <h3>Grid</h3>
        <div id="gridDiv">
          <Grid grid={grid} handleClickBox={handleClickBox} />
        </div>
      </div>
      <h3>Color Slider</h3>
      <Slider colorNumber={colorNumber} handleSlider={handleSlider} />
      <div id="thisWeek">
        <h3>This Week</h3>
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
      <div id="inflect">
        <h3>Inflection</h3>
        <form id="inflectForm" onSubmit={handleSubmitInflect}>
          <input id="inflectInput" type="text"></input>
          <input id="submitInflect" type="submit" value="+" />
        </form>
        <Inflect
          inflectList={inflectList}
          handleDeleteInflect={handleDeleteInflect}
        />
      </div>
    </div>
  );
}

export default App;
