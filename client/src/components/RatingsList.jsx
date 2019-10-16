import React from 'react';
import RatingsListEntry from './RatingsListEntry.jsx';

const RatingsList = (props) => {
  const reviewId = props.reviews.map(review => review.reviewId);
  const checkIn = props.reviews.map(review => review.ratings.checkIn);
  const communication = props.reviews.map(review => review.ratings.communication);
  const location = props.reviews.map(review => review.ratings.location);
  const accuracy = props.reviews.map(review => review.ratings.accuracy);
  const cleanliness = props.reviews.map(review => review.ratings.cleanliness);
  const value = props.reviews.map(review => review.ratings.value);

  return (
    <div className="ratings-category">
      <RatingsListEntry key={reviewId} checkIn={checkIn} communication={communication} location={location} accuracy={accuracy} cleanliness={cleanliness} value={value} />
    </div>
  );
};

export default RatingsList;