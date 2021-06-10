import React from 'react';
import ReactDOM from 'react-dom';
// import Square_button from './Square_button/Square_button.jsx';
import Related from './components/related/Related.jsx'

import Stars from './components/shared/Stars.jsx';
import ClickableStars from './components/shared/ClickableStars.jsx'
import text, {CText, CTextDemoView} from './components/shared/CText.jsx';
import $ from 'jquery';
import Ratings from './components/ratings/Ratings.jsx';
import Product from './components/product/Product.jsx';


class App extends React.Component {
  constructor() {
    super();

  }

  render() {


    return <div>
    <h1>hi</h1>
          </div>

  }
}

ReactDOM.render(<App />, document.getElementById('app'));