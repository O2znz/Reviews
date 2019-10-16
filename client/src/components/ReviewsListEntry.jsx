import React from 'react';

const ReviewListEntry = (props) => {
  const date = (month, year) => {
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    return months[Number(month) - 1] + ' ' + year;
  };

  return (
    <div>
      <div>
        <div>
          <img src={props.review.imgURL} ></img>
          <div>
            <div>{props.review.name}</div>
            <div>{date(props.month, props.year)}</div>
          </div>
        </div>
      </div>
      <div>{props.review.comment}</div>
    </div>
  );
};

export default ReviewListEntry;