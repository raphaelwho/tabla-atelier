import React from 'react';
import ReactDOM from 'react-dom';
import './ratings.css'
import ReviewGraphics from './ReviewGraphics.jsx';
import ReviewList from './ReviewList.jsx';
import $ from 'jquery';

import text, {CText, CTextDemoView} from '../shared/CText.jsx';

class Ratings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: {results: []},
      listControls: {
        sortType: 'helpfulness', //options are relevance, date, helpfulness; default is relevance
        reviewListEnd: 1
      }
    };
    this.sortReviews = this.sortReviews.bind(this);
    this.moreReviews = this.moreReviews.bind(this);
    this.fetchReviews = this.fetchReviews.bind(this);
  }

  sortReviews(reviewsResults) {
    if (reviewsResults !== undefined && this.state.listControls.sortType === 'helpfulness') {
      var sortedReviews = reviewsResults.slice();
      sortedReviews.sort(function (a, b) {
        return a.helpfulness - b.helpfulness;
      });
      sortedReviews.reverse();
      return sortedReviews;
    }
  }

  moreReviews() {
    var lengthList = this.state.listControls.reviewListEnd + 2;
    this.setState({listControls: {reviewListEnd: lengthList}})
  }

  fetchReviews(id) {
    var successfulFetch = (response) => {
      var fetchAndSort = this.sortReviews(response.results);
      this.setState({reviews: {results: fetchAndSort}});
    };
    var idData = JSON.stringify({id: this.props.id});

    $.ajax({
      url: 'http://localhost:3000/reviews',
      type: 'POST',
      data: idData,
      success: successfulFetch,
      contentType: 'application/json',
      processData: false
    });
  }

  render() {
    return (
      <div className="reviews">
        <ReviewGraphics />
        <ReviewList reviews={this.state.reviews} listControls={this.state.listControls} moreReviews={this.moreReviews} />
      </div>
    )
  }

  componentDidMount() {
    this.fetchReviews(this.state.id);
  }

}

export default Ratings;