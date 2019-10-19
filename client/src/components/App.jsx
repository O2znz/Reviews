import React from 'react';
import axios from 'axios';
import Search from './Search.jsx';
import RatingsList from './RatingsList.jsx';
import ProgressBarClass from './ProgressBar.jsx';
import ReviewsList from './ReviewsList.jsx';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  max-width: 525px;
  font-family:Circular, -apple-system, system-ui, Roboto, "Helvetica Neue", sans-serif;
  color: #484848;
`;

const ReviewsContainer = styled.div`
`;

const Header = styled.div`
  font-size: 24px;
  font-weight: 648;
  padding-top: 2px;
  padding-bottom: 2px;
`;

const AverageRatingContainer = styled.div`
  display: flex;
  ${'' /* justify-content: baseline; */}
  padding-top: 17px;
  padding-bottom: 2px;
`;

const StarAvgContainer = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const StarContainer = styled.div`
  height: 12px;
  width: 12px;
`;

const AverageRating = styled.div`
  font-size: 17px;
  font-weight: 700;
  padding-left: 4px;
`;

const DividerContainer = styled.div`
  padding-left: 14px;
  padding-right: 14px;
`;

const Divider = styled.div`
  display: -webkit-inline-box;
  border-left: 1px solid #484848;
  width: 1px;
  height: 12px;
`;

const ReviewsCount = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const NumReviews = styled.div`
  font-size:17px;
  font-weight: 700;
`;

const Header2 = styled.div`
  font-size:17px;
  font-weight: 100;
  padding-left: 7.5px;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      filteredReviews: [],
      search: ''
    };

    this.getAllReviews = this.getAllReviews.bind(this);
    this.searchValue = this.searchValue.bind(this);
    this.getRating = this.getRating.bind(this);
  }

  componentDidMount() {
    this.getAllReviews();
  }

  getAllReviews() {
    axios.get('/reviews')
      .then(result => this.setState({reviews: result.data}));
  }

  searchValue(value) {
    this.setState({search: value});
  }

  getRating(rating) {
    return rating;
  }

  render() {
    const star = 'M972 380c9 28 2 50-20 67L725 619l87 280c11 39-18 75-54 75-12 0-23-4-33-12L499 790 273 962a58 58 0 0 1-78-12 50 50 0 0 1-8-51l86-278L46 447c-21-17-28-39-19-67 8-24 29-40 52-40h280l87-279c7-23 28-39 52-39 25 0 47 17 54 41l87 277h280c24 0 45 16 53 40z';

    if (!this.state.reviews.length) {
      return (
        <div></div>
      );
    } else {
      return (
        <Wrapper>
          <ReviewsContainer>
            <Header>Reviews</Header>
            <AverageRatingContainer>
              <StarAvgContainer>
                <StarContainer>
                  <svg viewBox='0 0 1000 1000' xmlns='http://www.w3.org/2000/svg' fill='#008489' >
                    <path d={star} />
                  </svg>
                </StarContainer>

                <AverageRating>4.24</AverageRating>
              </StarAvgContainer>

              <DividerContainer>
                <Divider></Divider>
              </DividerContainer>

              <ReviewsCount>
                <NumReviews>{this.state.reviews.length}</NumReviews>

                <Header2>reviews</Header2>
              </ReviewsCount>
            </AverageRatingContainer>

              {/* <div>
                <Search reviews={this.state.reviews} searchValue={this.searchValue} />
              </div> */}

            <div>
              <RatingsList reviews={this.state.reviews} getRating={this.getRating} />
              <ReviewsList reviews={this.state.reviews} />
            </div>
          </ReviewsContainer>
        </Wrapper>
      );
    }
  }
}

export default App;