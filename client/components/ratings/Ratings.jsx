import React from 'react';
import ReactDOM from 'react-dom';
import ReviewList from './ReviewList.jsx';

import text, {CText, CTextDemoView} from '../shared/CText.jsx';

class Ratings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ReviewList />
    )
  }
}

export default Ratings;