import React from 'react';
import './css/Stars.css';
import $ from 'jquery';

var Stars = function (props) {
  //find nearest quarter of a review point based on value obtained from props.rating
  var nearestQuarter = ((Math.floor(props.rating / 0.25)) * 0.25);
  var ratingPercentage = (nearestQuarter * 20);


  //increase quarter star visibility, or in other words accounting for volume filled in star rather than width



  if (nearestQuarter - Math.trunc(nearestQuarter) === 0.25) {
    ratingPercentage = ratingPercentage + 2.5;
  } else if (nearestQuarter - Math.trunc(nearestQuarter) === 0.75) {

    ratingPercentage = ratingPercentage - 2.5;
  }

  //defing width for CSS styling
  var starPercentage = `${ratingPercentage.toString()}%`;
  var ratingStyle = {
    width: starPercentage
  };

  //Unicode stars are returned in HTML code, respresenting Unicde Black Star (U2605) -> HTML &#9733; and Unicode White Star (U2606) -> HTML &#9734; https://www.unicode.org/charts/PDF/U2600.pdf
  return (
    <span className="stars-container">
      <span className="stars">
        <span className="star1">&#9734;</span><span className="star2">&#9734;</span><span className="star3">&#9734;</span><span className="star4">&#9734;</span><span className="star5">&#9734;</span>
      </span>
      <span className="starsoverlap" style={ratingStyle}><span className="star1">&#9733;</span><span className="star2">&#9733;</span><span className="star3">&#9733;</span><span className="star4">&#9733;</span><span className="star5">&#9733;</span></span>
    </span>
  );
}

export default Stars;