import React from 'react';
import Stars from '../shared/Stars.jsx';
import './ratings.css';

var ReviewTile = function (props) {

  return (
    <div className="reviewtile">
      <h4 className="review-title">Here is the title.</h4>
      <div className="review-stars">
        <Stars rating={4} />
      </div>
    </div>
  );
}

export default ReviewTile;