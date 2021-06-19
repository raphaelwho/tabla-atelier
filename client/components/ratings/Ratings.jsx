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
      productName: '',
      reviews: {results: []},
      sortType: 'relevance', //options are relevance, date, helpfulness; default is relevance
      reviewListEnd: 1,
      addReviewDisplay: false,
      addReviewRating: 0

    };
    this.sortReviews = this.sortReviews.bind(this);
    this.moreReviews = this.moreReviews.bind(this);
    this.fetchReviews = this.fetchReviews.bind(this);
    this.changeSort = this.changeSort.bind(this);
    this.changeAddReviewDisplay = this.changeAddReviewDisplay.bind(this);
    this.changeAddReviewRating = this.changeAddReviewRating.bind(this);
    this.addReviewToggleModal = this.addReviewToggleModal.bind(this);


  }

  addReviewToggleModal () {
    var modal = document.querySelector("#modal");
    var modalOverlay = document.querySelector("#modal-overlay");
    modal.classList.toggle("closed");
    modalOverlay.classList.toggle("closed");
  }

  changeAddReviewDisplay () {
    if (this.state.addReviewDisplay === false) {
      this.setState({addReviewDisplay: true});
    } else {
      this.setState({addReviewDisplay: false});
    }
  }

  changeAddReviewRating (event) {
    if (event.target.className === 'star1') {
      this.setState({addReviewRating: 1});
    } else if (event.target.className === 'star2') {
      this.setState({addReviewRating: 2});
    } else if (event.target.className === 'star3') {
      this.setState({addReviewRating: 3});
    } else if (event.target.className === 'star4') {
      this.setState({addReviewRating: 4});
    } else if (event.target.className === 'star5') {
      this.setState({addReviewRating: 5});
    }
  }

  sortReviews(reviewsResults, sortType = this.state.sortType) {
    if (reviewsResults !== undefined && sortType === 'helpfulness') {
      var sortedReviews = reviewsResults.slice();
      sortedReviews.sort(function (a, b) {
        return a.helpfulness - b.helpfulness;
      });
      sortedReviews.reverse();
      return sortedReviews;
    }
    else if (reviewsResults !== undefined && sortType === 'date') {
      var sortedReviews = reviewsResults.slice();
      sortedReviews.sort(function (a, b) {
        return ((Date.now() - Date.parse(a.date)) - (Date.now() - Date.parse(b.date))) / 2592000000;
      });
      return sortedReviews;
    }
    else if (reviewsResults !== undefined && sortType === 'relevance') {
      var sortedReviews = reviewsResults.slice();
      sortedReviews.sort(function (a, b) {
        return (24.8492 - (5.22794 * Math.log(1.18379 - 5.18465 * (((Date.now() - Date.parse(a.date)) - (Date.now() - Date.parse(b.date))) / 2592000000)))) * (a.helpfulness - b.helpfulness);
      });
      sortedReviews.reverse();
      return sortedReviews;
    }
  }

  changeSort(event) {
    var newSort = event.target.value;
    var sorted = this.sortReviews(this.state.reviews.results, newSort);
    if (newSort === 'relevance') {
      this.setState({
        reviews: {results: sorted},
        sortType: 'relevance'});
    } else if (newSort === 'helpfulness') {
      this.setState({
        reviews: {results: sorted},
        sortType: 'helpfulness'});
    } else if (newSort === 'date') {
      this.setState({
        reviews: {results: sorted},
        sortType: 'date'});
    }
  }

  moreReviews() {
    var lengthList = this.state.reviewListEnd + 2;
    this.setState({reviewListEnd: lengthList});
  }

  fetchReviews(id) {
    var successfulFetch = (response) => {
      var fetchAndSort = this.sortReviews(response.results);
      this.setState({reviews: {results: fetchAndSort}, productName: response.name});
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
        <ReviewList reviews={this.state.reviews} sortType={this.state.sortType} sortTypeUnselected={this.state.sortTypeUnselected} reviewListEnd={this.state.reviewListEnd} moreReviews={this.moreReviews} changeSort={this.changeSort} addReviewDisplay={this.state.addReviewDisplay} changeAddReviewDisplay={this.changeAddReviewDisplay} productName={this.state.productName} addReviewRating={this.state.addReviewRating} changeAddReviewRating={this.changeAddReviewRating} addReviewToggleModal={this.addReviewToggleModal} />
      </div>
    )
  }

  componentDidMount() {
    this.fetchReviews(this.state.id);
  }

}

export default Ratings;