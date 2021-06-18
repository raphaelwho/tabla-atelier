import React from 'react';
import ReactDOM from 'react-dom';
import ReviewTile from './ReviewTile.jsx';

var ReviewList = function (props) {
    console.log(props);
    return (
      <div className="review-list-and-sorting">
        <div className="review-sorting">
          {(props.reviews.results.length >= 1) &&
          <h4>{props.reviews.results.length} review{(props.reviews.results.length > 1) && <span>s</span>}, sorted by <span className="review-sort-type"><select name="sortType" onChange={props.changeSort}>
          <option value="relevance" defaultValue>relevance</option>
          <option value="date">date</option>
          <option value="helpfulness">helpfulness</option>
        </select></span></h4>
          }
        </div>
        {(props.reviews.results.length > 0) &&
        props.reviews.results.map((review, index) => {
          if ((index >= 0) && (index <= props.reviewListEnd)) {
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