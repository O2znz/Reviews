import React from 'react';
import styled from 'styled-components';

const RatingsCategoryContainer = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 525px;
`;

const RatingsContainerLeft = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 262.5px;
`;

const RatingsContainerRight = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 75px;
  max-width: 262.5px;
`;

const CategoryContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const CategoryDetails = styled.div`
  font-size: 14px;
  font-weight: 300;
`;

const ScoreContainerLeft = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

const ScoreContainerRight = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const Score = styled.div`
  padding-left: 6px;
  font-size: 14px;
  font-weight: 450;
`;

const RatingBar = styled.div`
  display: flex;
  align-self: center;
  height: 3px;
  width: 80px;
  border-radius: 60px;
  background-color: var(--color-accent-light-gray, #D8D8D8);
`;

const RatingBarFiller = styled.div`
  background: #1DA598;
  height: 100%;
  border-radius: inherit;ß
`;

class RatingsListEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkIn: 25,
      communication: 50,
      location: 70,
      accuracy: 80,
      cleanliness: 30,
      value: 100
    };

  }

  render() {
    const checkIn = this.props.checkIn.reduce((acc, cur) => acc + cur, 0);
    const communication = this.props.communication.reduce((acc, cur) => acc + cur, 0);
    const location = this.props.location.reduce((acc, cur) => acc + cur, 0);
    const accuracy = this.props.accuracy.reduce((acc, cur) => acc + cur, 0);
    const cleanliness = this.props.cleanliness.reduce((acc, cur) => acc + cur, 0);
    const value = this.props.value.reduce((acc, cur) => acc + cur, 0);
    const averageRating = Number.parseFloat((checkIn + communication + location + accuracy + cleanliness + value) / 600).toFixed(2);
    const rating = (num) => Number.parseFloat(num / 100).toFixed(1);

    return (
      <RatingsCategoryContainer>
        <RatingsContainerLeft>
          <CategoryContainer>
            <CategoryDetails>
              <ScoreContainerLeft>
                Cleanliness
              </ScoreContainerLeft>
            </CategoryDetails>
            <CategoryDetails>
              <ScoreContainerRight>
                <RatingBar><RatingBarFiller style={{ width: `${this.state.cleanliness}%` }}></RatingBarFiller></RatingBar>
                <Score>{rating(cleanliness)}</Score>
              </ScoreContainerRight>
            </CategoryDetails>
          </CategoryContainer>

          <CategoryContainer>
            <CategoryDetails>
              <ScoreContainerLeft>
                Communication
              </ScoreContainerLeft>
            </CategoryDetails>
            <CategoryDetails>
              <ScoreContainerRight>
                <RatingBar><RatingBarFiller style={{ width: `${this.state.communication}%` }}></RatingBarFiller></RatingBar>
                <Score>{rating(communication)}</Score>
              </ScoreContainerRight>
            </CategoryDetails>
          </CategoryContainer>

          <CategoryContainer>
            <CategoryDetails>
              <ScoreContainerLeft>
                Check-in
              </ScoreContainerLeft>
            </CategoryDetails>
            <CategoryDetails>
              <ScoreContainerRight>
                <RatingBar><RatingBarFiller style={{ width: `${this.state.checkIn}%` }}></RatingBarFiller></RatingBar>
                <Score>{rating(checkIn)}</Score>
              </ScoreContainerRight>
            </CategoryDetails>
          </CategoryContainer>
        </RatingsContainerLeft>
      </RatingsCategoryContainer>
    );
  }
}

export default RatingsListEntry;