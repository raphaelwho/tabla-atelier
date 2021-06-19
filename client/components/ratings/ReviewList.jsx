import React from 'react';
import ReactDOM from 'react-dom';
import ReviewTile from './ReviewTile.jsx';
import AddReview from './AddReview.jsx';

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
        <button onClick={props.moreReviews}>MORE REVIEWS</button>
        <button onClick={props.changeAddReviewDisplay}>ADD A REVIEW +</button>


        <div className="modal-overlay closed" id="modal-overlay"></div>

        <div className="modal closed" id="modal">
        <button className="close-button" id="close-button" onClick={props.addReviewToggleModal}>Obvious Close Button</button>
        <div className="modal-guts">
        <h1>Modal Example</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae expedita corrupti laudantium aperiam, doloremque explicabo ipsum earum dicta saepe delectus totam vitae ipsam doloribus et obcaecati facilis eius assumenda, cumque.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae expedita corrupti laudantium aperiam, doloremque explicabo ipsum earum dicta saepe delectus totam vitae ipsam doloribus et obcaecati facilis eius assumenda, cumque.</p>

        </div>
        </div>

        <button id="open-button" className="open-button" onClick={props.addReviewToggleModal}>Open Button</button>



          <AddReview changeAddReviewDisplay={props.changeAddReviewDisplay} addReviewDisplay={props.addReviewDisplay} productName={props.productName} addReviewRating={props.addReviewRating} changeAddReviewRating={props.changeAddReviewRating} />
        </div>
      </div>
    );

}

export default ReviewList;