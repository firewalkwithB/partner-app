import React from 'react';

function ThisWeek(props) {
  return props.week.map(function(day, index) {
    return (
      <div className="day" key={index}>
        {day}
      </div>
    );
  });
}

export default ThisWeek;
