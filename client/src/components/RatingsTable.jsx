import React from 'react';
const styled = window.styled;

const RatingsTableContainer = styled.div`
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  margin-top: 16px;
  margin-bottom: 24px;
  width: 648px;
  justify-content:space-between;
  padding: 24px 24px 16px 24px;
  fill: rgb(255, 255, 255);
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.16);
  border-radius: 12px;
  border-color: rgb(255, 255, 255);
  border-width: 1px;
  border-style: solid;
`;

// const RatingsContainerTop = styled.div`
//   margin-bottom: 24px;
// `;

// const RatingsContainerBottom = styled.div`
//   margin-bottom: 8px;
// `;

const RatingsCategoryContainerLeft = styled.div`
  display: flex;
  flex-direction: column;
  width: 324px;
  padding-right: 32px;
`;

const RatingsCategoryContainerRight = styled.div`
  display: flex;
  flex-direction: column;
  width: 324px;
  padding-left: 32px;
`;

const TextScoreContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 8px;
  margin-bottom: 14px;
`;

const TextContainer = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const Text = styled.div`
  display: flex;
  justify-content: flex-start;
  font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;
  color: #484848;
  font-size: 14px;
  font-weight: 300px;
`;

const ScoreContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding-left: 24px;
`;

// const Divider = styled.div`
//   margin-top: 24px;
//   margin-bottom: 24px;
//   box-sizing: border-box;
//   display: block;
//   border-bottom-width: var(--border-rule-border-width, 1px);
//   border-bottom-color: var(--color-divider, #EBEBEB);
//   border-bottom-style: solid; */}
// `;

const Score = styled.div`
  padding-left: 6px;
  font-size: 14px;
  font-weight: 450;
  font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;
  color: #484848;
  font-size: 14px;
  font-weight: 300px;
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

class RatingsTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkIn: this.props.ratings.avgCheckIn / 5 * 100,
      accuracy: this.props.ratings.avgAccuracy / 5 * 100,
      cleanliness: this.props.ratings.avgCleanliness / 5 * 100,
      communication: this.props.ratings.avgCommunication / 5 * 100,
      location: this.props.ratings.avgLocation / 5 * 100,
      value: this.props.ratings.avgValue / 5 * 100
    };
  }

  render() {
    return (
      <RatingsTableContainer>

        <RatingsCategoryContainerLeft>
          <TextScoreContainer>
            <Text>Check-in</Text>
            <ScoreContainer>
              <RatingBar>
                <RatingBarFiller style={{width: `${this.state.cleanliness}%`}}></RatingBarFiller>
              </RatingBar>
              <Score>{this.props.ratings.avgCheckIn}</Score>
            </ScoreContainer>
          </TextScoreContainer>

          <TextScoreContainer>
            <Text>Accuracy</Text>
            <ScoreContainer>
              <RatingBar>
                <RatingBarFiller style={{width: `${this.state.accuracy}%`}}></RatingBarFiller>
              </RatingBar>
              <Score>{this.props.ratings.avgAccuracy}</Score>
            </ScoreContainer>
          </TextScoreContainer>

          <TextScoreContainer>
            <Text>Cleanliness</Text>
            <ScoreContainer>
              <RatingBar>
                <RatingBarFiller style={{width: `${this.state.cleanliness}%`}}></RatingBarFiller>
              </RatingBar>
              <Score>{this.props.ratings.avgCleanliness}</Score>
            </ScoreContainer>
          </TextScoreContainer>

        </RatingsCategoryContainerLeft>
        <RatingsCategoryContainerRight>
          <TextScoreContainer>
            <Text>Communication</Text>
            <ScoreContainer>
              <RatingBar>
                <RatingBarFiller style={{width: `${this.state.communication}%`}}></RatingBarFiller>
              </RatingBar>
              <Score>{this.props.ratings.avgCommunication}</Score>
            </ScoreContainer>
          </TextScoreContainer>

          <TextScoreContainer>
            <Text>Location</Text>
            <ScoreContainer>
              <RatingBar>
                <RatingBarFiller style={{width: `${this.state.location}%`}}></RatingBarFiller>
              </RatingBar>
              <Score>{this.props.ratings.avgLocation}</Score>
            </ScoreContainer>
          </TextScoreContainer>

          <TextScoreContainer>
            <Text>Value</Text>
            <ScoreContainer>
              <RatingBar>
                <RatingBarFiller style={{width: `${this.state.value}%`}}></RatingBarFiller>
              </RatingBar>
              <Score>{this.props.ratings.avgValue}</Score>
            </ScoreContainer>
          </TextScoreContainer>

        </RatingsCategoryContainerRight>

      </RatingsTableContainer>
    );
  }
}

export default RatingsTable;


// USE THIS IF YOU WANT TO INTEGRATE THE NEW UPDATED INTERFACE
// const RatingsTableContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   box-sizing: border-box;
//   margin-top: 16px;
//   margin-bottom: 24px;
//   padding: 24px 24px 16px 24px;
//   fill: rgb(255, 255, 255);
//   box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.16);
//   border-radius: 12px;
//   border-color: rgb(255, 255, 255);
//   border-width: 1px;
//   border-style: solid;
//   width: 648px;
// `;

// const RatingsContainerTop = styled.div`
//   margin-bottom: 24px;
// `;

// const RatingsContainerBottom = styled.div`
//   margin-bottom: 8px;
// `;
// <RatingsTableContainer>
//       <RatingsContainerTop>

//       </RatingsContainerTop>

//       <Divider></Divider>

//       <RatingsContainerBottom>

//       </RatingsContainerBottom>
//     </RatingsTableContainer>

