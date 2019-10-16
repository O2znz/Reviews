import React from 'react';
import ReviewsListEntry from './ReviewsListEntry.jsx';

const ReviewsList = (props) => {
  return (
    <div>
      {props.reviews.map(review => <ReviewsListEntry key={review.reviewId} review={review} month={review.date.slice(5, 7)} year={review.date.slice(0, 4)}/>)}
    </div>
  );
};

export default ReviewsList;