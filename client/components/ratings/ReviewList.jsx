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
        "url": "https://www.thoughtco.com/thmb/ZDvyjscp_yiqtzlBWIvwCLV0lMI=/1333x1000/smart/filters:no_upscale()/examples-of-matter-608348-FINAL-5c891bba46e0fb0001431a70.jpg"
      },
      {
        "id": 2,
        "url": "https://www.spinxdigital.com/blog/wp-content/uploads/2019/05/Infographic-Example-2-1.jpg"
      }
    ]
  };
  return (
    <ReviewTile result={result} />
  );
}

export default ReviewList;