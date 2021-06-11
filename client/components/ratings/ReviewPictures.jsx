import React from 'react';

var ReviewPictures = function (props) {
  var pictures = props.photos.map((photo) => {
      return (
        <img className="review-photo"
        key={`review-photo-${photo.id}`} src={photo.url} />
      );
  });

  return (
    <div className="review-photos">
      {pictures}
    </div>
  );

}
export default ReviewPictures;