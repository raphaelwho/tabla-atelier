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
      id: props.id,
      reviews: {}
    };
    this.fetchReviews = this.fetchReviews.bind(this);
  }

  fetchReviews(id) {
    var successfulFetch = (response) => {

      this.setState({reviews: response});
    };
    var idData = JSON.stringify({id: id});

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
        <ReviewList reviews={this.state.reviews} />
      </div>
    )
  }

  componentDidMount() {
    console.log('component did mount');
    this.fetchReviews(this.state.id);
  }

}

export default Ratings;