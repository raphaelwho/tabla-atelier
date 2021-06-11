import React from 'react';
import ReactDOM from 'react-dom';
import './ratings.css'
import Bars from './Bars.jsx';
import ReviewList from './ReviewList.jsx';
import Sliders from './Sliders.jsx';

import text, {CText, CTextDemoView} from '../shared/CText.jsx';

class Ratings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="reviews">
        <Bars percentage={50} />
        <Sliders rating={2.5} />
        <ReviewList />
      </div>
    )
  }
}

export default Ratings;