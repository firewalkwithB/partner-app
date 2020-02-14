import React from 'react';
import inflection from 'inflection';

function Inflect(props) {
  return props.inflectList.map(function(item, i) {
    let key = 'inflectItem' + i;
    return (
      <div className="inflectItem" key={key}>
        <div className="singular">
          {inflection.singularize(item)} (singular)
        </div>
        <div className="plural">{inflection.pluralize(item)} (plural)</div>
        <button
          className="deleteInflect"
          value="i"
          onClick={props.handleDeleteInflect}
        >
          X
        </button>
      </div>
    );
  });
}

export default Inflect;
