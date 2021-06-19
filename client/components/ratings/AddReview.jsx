import React from 'react';
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import Stars from '../shared/Stars.jsx';

var AddReview = function (props) {

  return (
    <Dialog scroll='paper' onClose={props.changeAddReviewDisplay} open={props.addReviewDisplay}>
      <DialogTitle>Write Your Review</DialogTitle>
      <DialogTitle>About the {props.productName}</DialogTitle>
      <DialogContent>
        <DialogContentText>Overall Rating</DialogContentText>
        <div onClick={props.changeAddReviewRating}>
          <Stars rating={props.addReviewRating} />
          {(props.addReviewRating) === 1 &&
            <span>Poor</span>
          }
          {(props.addReviewRating) === 2 &&
            <span>Fair</span>
          }
          {(props.addReviewRating) === 3 &&
            <span>Average</span>
          }
          {(props.addReviewRating) === 4 &&
            <span>Good</span>
          }
          {(props.addReviewRating) === 5 &&
            <span>Great</span>
          }
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default AddReview;