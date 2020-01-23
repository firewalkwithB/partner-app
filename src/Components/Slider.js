import React from 'react';

function Slider(props) {
  let styles = {
    backgroundColor: rgb(
      props.colorNumber[0],
      props.colorNumber[1],
      props.colorNumber[2]
    ),
  };

  return (
    <div id="slider">
      <label htmlFor="rSlider">R</label>
      <input id="rSlider" type="range" min="0" max="255"></input>
      <label htmlFor="gSlider">G</label>
      <input id="gSlider" type="range" min="0" max="255"></input>
      <label htmlFor="bSlider">B</label>
      <input id="bSlider" type="range" min="0" max="255"></input>
      <div id="colorBox"></div>
    </div>
  );
}

export default Slider;
