import React from 'react';
import ReactDOM from 'react-dom';
// import Square_button from './Square_button/Square_button.jsx';
import Related from './components/related/Related.jsx'

import Stars from './components/shared/Stars.jsx';
import ClickableStars from './components/shared/ClickableStars.jsx'
import text, {CText, CTextDemoView} from './components/shared/CText.jsx';
<<<<<<< HEAD
import $ from 'jquery';
=======
import Questions from './components/q&a/Questions.jsx';
>>>>>>> e00e9723ee59ae89c35bfb89d8f6f4d482eaf573
import Ratings from './components/ratings/Ratings.jsx';
import Product from './components/product/Product.jsx';


class App extends React.Component {
  constructor() {
    super();

  }

  render() {

<<<<<<< HEAD
    return <div>
    <h1>hi</h1>
          </div>
=======
    return (
    <div>
      <Product />
      <Ratings />
    </div>);
>>>>>>> e00e9723ee59ae89c35bfb89d8f6f4d482eaf573
  }
}

ReactDOM.render(<App />, document.getElementById('app'));