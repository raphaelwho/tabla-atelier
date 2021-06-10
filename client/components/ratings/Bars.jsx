import React from 'react';

var Bars = function (props) {
  var barPercentage = props.percentage;

  //defing width of bar for CSS styling
  var barPercentageText = `${barPercentage.toString()}%`;
  var ratingStyle = {
    width: barPercentageText
  };

  return (
    <span className="bars-container">
      <span className="bars"></span>
      <span className="barsoverlap" style={ratingStyle}></span>
    </span>
  );
}

export default Bars;