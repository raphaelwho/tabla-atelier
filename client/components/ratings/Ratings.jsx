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
    this.fetchRatings = this.fetchRatings.bind(this);
  }

  fetchRatings(id) {
    var successfulFetch = (response) => {
      console.log(response);
      this.setState({reviews: response});
    };

    $.ajax({
      url: 'http://localhost:3000/ratings',
      data: {id: id},
      success: successfulFetch
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
    this.fetchRatings(this.state.id);
  }

}

export default Ratings;