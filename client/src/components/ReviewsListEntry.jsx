import React from 'react';

const ReviewListEntry = (props) => {
  const date = (month, year) => {
    if (month === '01') {
      return 'January ' + year;
    }
    if (month === '02') {
      return 'Febuary ' + year;
    }
    if (month === '03') {
      return 'March ' + year;
    }
    if (month === '04') {
      return 'April ' + year;
    }
    if (month === '05') {
      return 'May ' + year;
    }
    if (month === '06') {
      return 'June ' + year;
    }
    if (month === '07') {
      return 'July ' + year;
    }
    if (month === '08') {
      return 'August ' + year;
    }
    if (month === '09') {
      return 'September ' + year;
    }
    if (month === '10') {
      return 'October ' + year;
    }
    if (month === '11') {
      return 'November ' + year;
    }
    if (month === '12') {
      return 'December ' + year;
    }
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