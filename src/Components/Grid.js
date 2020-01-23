import React, { useState } from "react"

export default function Grid({ grid, handleClickBox }) {
  return grid.map((box, index) => {
    return (
      <div
        className="box"
        onClick={handleClickBox}
        id={box.toString()}
        key={index}
      ></div>
    )
  })
}
