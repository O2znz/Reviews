import React from 'react';
import axios from 'axios';
import RatingsList from './RatingsList.jsx';
import ReviewsList from './ReviewsList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: []
    };

    this.getAllReviews = this.getAllReviews.bind(this);
  }

  componentDidMount() {
    this.getAllReviews();
  }

  getAllReviews() {
    axios.get('/reviews')
      .then(result => this.setState({reviews: result.data}));
  }

  render() {
    // const ratings = this.state.reviews.map(review => review.ratings);
    return (
      <div>
        <RatingsList reviews={this.state.reviews} />
        <ReviewsList reviews={this.state.reviews} />
      </div>
    );
  }
}

export default App;