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
      reviews: [],
      sortType: 'relevance', //options are relevance, date, helpfulness; default is relevance
      reviewListEnd: 1,
      addReviewRating: 0,
      ratings: {},
      recommend: {},
      characteristics: {},
      characteristicsSize: 0,
      characteristicsWidth: 0,
      characteristicsComfort: 0,
      characteristicsQuality: 0,
      characteristicsLength: 0,
      characteristicsFit: 0,
      reviewBodyTextCharacterCount: 0
    };
    this.sortReviews = this.sortReviews.bind(this);
    this.moreReviews = this.moreReviews.bind(this);
    this.fetchReviews = this.fetchReviews.bind(this);
    this.changeSort = this.changeSort.bind(this);
    this.changeAddReviewRating = this.changeAddReviewRating.bind(this);
    this.addReviewToggleModal = this.addReviewToggleModal.bind(this);
    this.addReviewHandleSubmit = this.addReviewHandleSubmit.bind(this);
    this.handleRadioCharacteristics = this.handleRadioCharacteristics.bind(this);
    this.handleReviewBodyText = this.handleReviewBodyText.bind(this);
    this.handleFiles = this.handleFiles.bind(this);

  }

  addReviewToggleModal () {
    var modal = document.querySelector("#modal");
    var modalOverlay = document.querySelector("#modal-overlay");
    modal.classList.toggle("closed");
    modalOverlay.classList.toggle("closed");
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

  addReviewHandleSubmit(event) {
    event.preventDefault();
    console.log(event);
  }

  sortReviews(reviewsArray, sortType = this.state.sortType) {
    if (reviewsArray !== undefined && sortType === 'helpfulness') {
      var sortedReviews = reviewsArray.slice();
      sortedReviews.sort(function (a, b) {
        return a.helpfulness - b.helpfulness;
      });
      sortedReviews.reverse();
      return sortedReviews;
    }
    else if (reviewsArray !== undefined && sortType === 'date') {
      var sortedReviews = reviewsArray.slice();
      sortedReviews.sort(function (a, b) {
        return ((Date.now() - Date.parse(a.date)) - (Date.now() - Date.parse(b.date))) / 2592000000;
      });
      return sortedReviews;
    }
    else if (reviewsArray !== undefined && sortType === 'relevance') {
      var sortedReviews = reviewsArray.slice();
      sortedReviews.sort(function (a, b) {
        return (24.8492 - (5.22794 * Math.log(1.18379 - 5.18465 * (((Date.now() - Date.parse(a.date)) - (Date.now() - Date.parse(b.date))) / 2592000000)))) * (a.helpfulness - b.helpfulness);
      });
      sortedReviews.reverse();
      return sortedReviews;
    }
  }

  changeSort(event) {
    var newSort = event.target.value;
    var sorted = this.sortReviews(this.state.reviews, newSort);
    if (newSort === 'relevance') {
      this.setState({
        reviews: sorted,
        sortType: 'relevance'});
    } else if (newSort === 'helpfulness') {
      this.setState({
        reviews: sorted,
        sortType: 'helpfulness'});
    } else if (newSort === 'date') {
      this.setState({
        reviews: sorted,
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
      this.setState({reviews: fetchAndSort, productName: response.name, ratings: response.ratings, recommend: response.recommend, characteristics: response.characteristics});
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

  handleRadioCharacteristics(event) {
    console.log('radio buttons', event);
    var name = `characteristics${event.target.name[0].toUpperCase()}${event.target.name.slice(1)}`;
    var characteristic = {};
    characteristic[name] = Number(event.target.value);
    this.setState(characteristic);
  }

  handleReviewBodyText(event) {
    console.log('body text:', event);
    this.setState({reviewBodyTextCharacterCount: event.target.textLength});
  }

  handleFiles(event) {
    var thumbnail = document.getElementById("image-file-1-thumb");
    console.log(event);
    if (!event.target.files.length) {
      thumbnail.innerHTML = "<p>No files selected!</p>";
    } else {
      var reviewImage = document.getElementById(event.target.id).files[0];

      var multipart = new FormData();
      multipart.append('image', reviewImage, event.target.files[0].name);

      var postThumbs = function () {

        var thumbnails = document.getElementById(`${event.target.id}-thumb`);
        thumbnails.innerHTML = "";
        const list = document.createElement("ul");
        thumbnails.appendChild(list);
        for (let i = 0; i < event.target.files.length; i++) {
          const li = document.createElement("li");
          list.appendChild(li);

          const img = document.createElement("img");
          img.src = URL.createObjectURL(event.target.files[i]);
          img.height = 60;
          img.onload = function() {
            URL.revokeObjectURL(this.src);
          }
          li.appendChild(img);
          const info = document.createElement("span");
          info.innerHTML = event.target.files[i].name + ": " + event.target.files[i].size + " bytes";
          li.appendChild(info);
        }
      };

      $.ajax({
        url: 'http://localhost:3000/uploadreviewimage',
        type: 'POST',
        data: multipart,
        success: postThumbs,
        contentType: false,
        processData: false
      });

    }
  }

  render() {
    return (
      <div className="reviews">
        <ReviewGraphics />
        <ReviewList reviews={this.state.reviews} sortType={this.state.sortType} reviewListEnd={this.state.reviewListEnd} moreReviews={this.moreReviews} changeSort={this.changeSort} productName={this.state.productName} addReviewRating={this.state.addReviewRating} changeAddReviewRating={this.changeAddReviewRating} addReviewToggleModal={this.addReviewToggleModal} addReviewHandleSubmit={this.addReviewHandleSubmit} handleRadioCharacteristics={this.handleRadioCharacteristics} characteristicsSize={this.state.characteristicsSize} characteristicsWidth={this.state.characteristicsWidth} characteristicsComfort={this.state.characteristicsComfort} characteristicsQuality={this.state.characteristicsQuality} characteristicsLength={this.state.characteristicsLength} characteristicsFit={this.state.characteristicsFit} characteristics={this.state.characteristics} handleRadioCharacteristics={this.handleRadioCharacteristics} handleReviewBodyText={this.handleReviewBodyText} reviewBodyTextCharacterCount={this.state.reviewBodyTextCharacterCount} handleFiles={this.handleFiles} />
      </div>
    )
  }

  componentDidMount() {
    this.fetchReviews(this.state.id);
  }

}

export default Ratings;