import React from 'react';
import ReviewTile from './ReviewTile.jsx';

var ReviewList = function (props) {
  var result = {
    "review_id": 5,
    "rating": 3,
    "summary": "I'm enjoying using this potato peeler as I have found it absolutely necessary in all of my pursuits in cooking up the finest potatoes in the land.",
    "recommend": true,
    "response": null,
    "body": "Slices great!",
    "date": "2019-04-14T00:00:00.000Z",
    "reviewer_name": "peeler4me",
    "helpfulness": 5,
    "photos": [{
        "id": 1,
        "url": "urlplaceholder/review_5_photo_number_1.jpg"
      },
      {
        "id": 2,
        "url": "urlplaceholder/review_5_photo_number_2.jpg"
      }
    ]
  };
  return (
    <ReviewTile result={result} />
  );
}

export default ReviewList;