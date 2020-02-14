import React from 'react';

function Slider(props) {
  let styles = {
    backgroundColor: `rgb(${props.colorNumber[0]},${props.colorNumber[1]},${props.colorNumber[2]})`,
  };

  return (
    <div id="slider">
      <div id="colorBox" style={styles}></div>
      <div id="sliderDiv">
        <label htmlFor="rSlider">R</label>
        <input
          id="rSlider"
          type="range"
          min="0"
          max="255"
          onChange={props.handleSlider}
          value={props.colorNumber[0]}
        ></input>
        <label htmlFor="gSlider">G</label>
        <input
          id="gSlider"
          type="range"
          min="0"
          max="255"
          onChange={props.handleSlider}
          value={props.colorNumber[1]}
        ></input>
        <label htmlFor="bSlider">B</label>
        <input
          id="bSlider"
          type="range"
          min="0"
          max="255"
          onChange={props.handleSlider}
          value={props.colorNumber[2]}
        ></input>
      </div>
    </div>
  );
}

export default Slider;
