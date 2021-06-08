import React from 'react';

var ReviewPictures = function (props) {
  console.log(props.photos);
  var pictures = props.photos.map((photo) => {
      return (
        <img className="review-photo"
        key={`review-photo-${photo.id}`} src={photo.url} />
      );
  });
  console.log(pictures);

  return (
    <div className="review-photos">
      {pictures}
    </div>
  );

}
export default ReviewPictures;