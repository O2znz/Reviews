import React from 'react';
import ReviewsListEntry from './ReviewsListEntry.jsx';
import styled from 'styled-components';

const CommentContainer = styled.div`
  max-width: 648px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

const ReviewsList = (props) => {
  return (
    <CommentContainer>
      {props.reviews.map(review => <ReviewsListEntry key={review.reviewId} review={review} month={review.date.slice(5, 7)} year={review.date.slice(0, 4)}/>)}
    </CommentContainer>
  );
};

export default ReviewsList;