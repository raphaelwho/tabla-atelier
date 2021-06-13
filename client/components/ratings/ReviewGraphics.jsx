import React from 'react';
import Stars from '../shared/Stars.jsx';
import Bars from './Bars.jsx';
import Sliders from './Sliders.jsx';

var ReviewGraphics = function (props) {

  return (
    <div className="review-graphics">
      <div className="star-average">
        <h3>Ratings &#38; Reviews</h3>
        <h4>3.5</h4>
        <Stars rating={3.5} />
      </div>
      <div className="bars-sliders">
        <h3>100% of reviews recommend this product</h3>
        <span>5 stars</span><Bars percentage={10} />
        <span>4 stars</span><Bars percentage={15} />
        <span>3 stars</span><Bars percentage={20} />
        <span>2 stars</span><Bars percentage={25} />
        <span>1 stars</span><Bars percentage={30} />
        <span>Size</span>
        <Sliders rating={2} />
        <Sliders rating={3} />
      </div>
    </div>
  );
}

export default ReviewGraphics;