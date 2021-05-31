import React from 'react';
import './Stars.css';
import $ from 'jquery';

var Stars = function (props) {
  //find nearest quarter of a review point based on value obtained from props.rating
  var nearestQuarter = ((Math.floor(props.rating / 0.25)) * 0.25);
  var ratingPercentage = (nearestQuarter * 20).toString();
  var starPercentage = `${ratingPercentage}%`;
  var ratingStyle = {
    width: starPercentage
  };

  return (
    <span className="stars">
      &#9734;&#9734;&#9734;&#9734;&#9734;
      <span className="starsoverlap" style={ratingStyle}>&#9733;&#9733;&#9733;&#9733;&#9733;</span>
    </span>
  );
}

export default Stars;