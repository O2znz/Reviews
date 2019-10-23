import React from 'react';

const styled = window.styled;

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
  ${'' /* padding-left: 70px; */}
`;

const ScoreContainerRight = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  ${'' /* padding-left: 70px; */}
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

    // this.category = this.category.bind(this);
  }

  // componentDidMount() {
  //   this.category(checkIn);
  //   this.category(communication);
  //   this.category(location);
  //   this.category(accuracy);
  //   this.category(cleanliness);
  //   this.category(value);
  // }

  // category(name) {
  //   const total = this.props[name].reduce((acc, cur) => acc + cur, 0);

  //   this.setState({[name]: total / 5 * 100});
  // }

  render() {
    // console.log(this.state.checkIn, 'this is new check in state')
    // console.log(this.props.checkIn[0], 'this is checkin prop 0')
    // console.log(this.props.checkIn)
    // console.log(this.category(this.props.checkIn), 'THIS IS CATEGORY');
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
                <RatingBar><RatingBarFiller style={{width: `${this.state.cleanliness}%`}}></RatingBarFiller></RatingBar>
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
                <RatingBar><RatingBarFiller style={{width: `${this.state.communication}%`}}></RatingBarFiller></RatingBar>
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
                <RatingBar><RatingBarFiller style={{width: `${this.state.checkIn}%`}}></RatingBarFiller></RatingBar>
                <Score>{rating(checkIn)}</Score>
              </ScoreContainerRight>
            </CategoryDetails>
          </CategoryContainer>

        </RatingsContainerLeft>


{/*

        <RatingsContainerRight>

          <CategoryContainer>
            <CategoryDetails>Accuracy</CategoryDetails>
            <CategoryDetails>
              <ScoreContainer>
                <RatingBar><RatingBarFiller style={{width: `${this.state.accuracy}%`}}></RatingBarFiller></RatingBar>
                <Score>{rating(accuracy)}</Score>
              </ScoreContainer>
            </CategoryDetails>
          </CategoryContainer>

          <CategoryContainer>
            <CategoryDetails>Location</CategoryDetails>
            <CategoryDetails>
              <ScoreContainer>
                <RatingBar><RatingBarFiller style={{width: `${this.state.location}%`}}></RatingBarFiller></RatingBar>
                <Score>{rating(location)}</Score>
              </ScoreContainer>
            </CategoryDetails>
          </CategoryContainer>

          <CategoryContainer>
            <CategoryDetails>Value</CategoryDetails>
            <CategoryDetails>
              <ScoreContainer>
                <RatingBar><RatingBarFiller style={{width: `${this.state.value}%`}}></RatingBarFiller></RatingBar>
                <Score>{rating(value)}</Score>
              </ScoreContainer>
            </CategoryDetails>
          </CategoryContainer>

        </RatingsContainerRight> */}

      </RatingsCategoryContainer>

    );
  }
}

export default RatingsListEntry;