import React from 'react';
import axios from 'axios';
import Search from './Search.jsx';
import RatingsList from './RatingsList.jsx';
import ReviewsList from './ReviewsList.jsx';

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

  render() {
    return (
      <div>
        <Search reviews={this.state.reviews} searchValue={this.searchValue} />
        <RatingsList reviews={this.state.reviews} />
        <ReviewsList reviews={this.state.reviews} />
      </div>
    );
  }
}

export default App;