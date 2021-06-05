import React from 'react';
import Stars from '../shared/Stars.jsx';
import './ratings.css';

var ReviewTile = function (props) {
  var titlewrap = false;
  var wrapCharacter = 0;
  var reviewDate = new Date(props.result.date);
  var dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  if (props.result.summary.length > 60) {
    titlewrap = true;
    for (var i = 59; i >= 0; i--) {
      if (props.result.summary[i] === ' ') {
        wrapCharacter = i;
        break;
      }
    }
  }
  return (
    <div className="reviewtile">
      {titlewrap
        ? <h4 className="review-title">{props.result.summary.slice(0, wrapCharacter)}...</h4>
        : <h4 className="review-title">{props.result.summary}</h4>
      }
      {titlewrap === true &&
        <p className="review-titlewrap">...{props.result.summary.slice(wrapCharacter + 1)}</p>
      }
      <div className="review-stars">
        <Stars rating={props.result.rating} />
      </div>
      <p className="review-userdate">{props.result.reviewer_name}, {reviewDate.toLocaleDateString('en-US', dateOptions)}</p>
      <p className="review-body">{props.result.body}</p>
      {props.result.recommend === true &&
        <p className="review-recommend">&#10003; I recommend this product</p>
      }
      {props.result.response !== null &&
        <div className="review-response">
          <h4>Response:</h4>
          <p>{props.result.response}</p>
        </div>
      }
      <p className="review-helpfulness">Helpful? Yes ({props.result.helpfulness})  |  Report</p>
    </div>
  );
}

export default ReviewTile;