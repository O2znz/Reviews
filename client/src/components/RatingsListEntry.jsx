import React from 'react';

const RatingsListEntry = (props) => {
  console.log(props, 'THIS IS props')
  const checkIn = props.checkIn.reduce((acc, cur) => acc + cur, 0);
  const communication = props.communication.reduce((acc, cur) => acc + cur, 0);
  const location = props.location.reduce((acc, cur) => acc + cur, 0);
  const accuracy = props.accuracy.reduce((acc, cur) => acc + cur, 0);
  const cleanliness = props.cleanliness.reduce((acc, cur) => acc + cur, 0);
  const value = props.value.reduce((acc, cur) => acc + cur, 0);
  const rating = (num) => Number.parseFloat(num / 100).toFixed(1);

  console.log(checkIn, 'with reduce')

  return (
    <div className="ratings-1">
      <div>
        <div>
          <span>Check-in</span> [IMAGE BAR WILL BE ENTERED HERE] <span>{rating(checkIn)}</span>
          <span>Communication</span> [IMAGE BAR WILL BE ENTERED HERE] <span>{rating(communication)}</span>
        </div>
        <div>
          <span>Location</span> [IMAGE BAR WILL BE ENTERED HERE] <span>{rating(location)}</span>
          <span>Accuracy</span> [IMAGE BAR WILL BE ENTERED HERE] <span>{rating(accuracy)}</span>
        </div>
        <div>
          <span>Cleanliness</span> [IMAGE BAR WILL BE ENTERED HERE] <span>{rating(cleanliness)}</span>
          <span>Value</span> [IMAGE BAR WILL BE ENTERED HERE] <span>{rating(value)}</span>
        </div>
      </div>
    </div>
  );
};

export default RatingsListEntry;