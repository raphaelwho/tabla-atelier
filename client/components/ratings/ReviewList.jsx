import React from 'react';
import ReactDOM from 'react-dom';
import ReviewTile from './ReviewTile.jsx';

var ReviewList = function (props) {

    return (
      <div className="review-list-and-sorting">
        <div className="review-sorting">
          <h4>Lots of reviews, sorted by the Magic Filing Cabinet</h4>
        </div>
        {(props.reviews.results.length > 0) &&
        props.reviews.results.map((review, index) => {
          if ((index >= 0) && (index <= props.listControls.reviewListEnd)) {
            return (
              <div className="review-list" key={review.review_id}>
              <ReviewTile review={review} />
              </div>
            );
          }
        })
        }
        <div className="review-controls">
        <button onClick={props.moreReviews}>More Reviews</button>
          <h4>Add new review here.</h4>
        </div>
      </div>
    );

}

export default ReviewList;