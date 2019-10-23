import React from 'react';
const styled = window.styled;

const star = 'M972 380c9 28 2 50-20 67L725 619l87 280c11 39-18 75-54 75-12 0-23-4-33-12L499 790 273 962a58 58 0 0 1-78-12 50 50 0 0 1-8-51l86-278L46 447c-21-17-28-39-19-67 8-24 29-40 52-40h280l87-279c7-23 28-39 52-39 25 0 47 17 54 41l87 277h280c24 0 45 16 53 40z';

const OverallRatingContainer = styled.div`
  display: flex;
  justify-content: start;
  font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;
  color: #484848;
  margin-bottom: 4px;
  padding-bottom: 4px;
`;

const AverageRating = styled.div`
  display: flex;
  justify-content: left;
  font-size: 18px;
  font-weight: 700;
  padding-left: 4px;
  padding-right: 10px;
  `;

const Divider = styled.div`
  ${'' /* display: flex;
  align-items: center;
  justify-content: center;
  border-left: 1px solid #484848;
  width: 1px;
  height: 10px;
  padding-left: 20px;
  padding-top: 4px;
  padding-bottom:4px; */}
  display: flex;
  justify-contnet: center;
  height: 12px;
  margin-top: 4px;
  border-right: 1px solid rgb(235, 235, 235);
  border-right-width: 1px;
  border-right-style: solid;
  border-right-color: rgb(235, 235, 235);
`;

const ReviewsNumber = styled.div`
  padding-left: 10px;
  font-size: 18px;
  font-weight: 700;
`;

const ReviewText = styled.div`
  font-size:18px;
  font-weight: 100;
  padding-left: 7.5px;
`;

const Star = styled.svg`
  padding-top: 4px;
  height: 12px;
  width: 12px;
  fill: rgb(0, 132, 137);
  //008489
`;

const OverallRating = (props) => {
  return (
    <OverallRatingContainer>
      <Star viewBox='0 0 1000 1000' xmlns='http://www.w3.org/2000/svg' >
        <path d={star} />
      </Star>

      <AverageRating>{props.totalAvgRating}</AverageRating>

      <Divider></Divider>

      <ReviewsNumber>{props.numReviews}</ReviewsNumber>

      <ReviewText>reviews</ReviewText>
    </OverallRatingContainer>
  );
};

export default OverallRating;