import React from 'react';
import ReactDOM from 'react-dom';
// import Square_button from './Square_button/Square_button.jsx';
import Related from './components/related/Related.jsx';
import Stars from './components/shared/Stars.jsx';
import ClickableStars from './components/shared/ClickableStars.jsx'
import text, {CText, CTextDemoView} from './components/shared/CText.jsx';
import Ratings from './components/ratings/Ratings.jsx';
import Product from './components/product/Product.jsx';
import Questions from './components/q&a/Questions.jsx';

class App extends React.Component {
  constructor() {
    super();

  }

  render() {

    return (
    <div>
      <Product />
      <Related id={22128}/>
      <Questions />
      <Ratings />
    </div>);




}
}

ReactDOM.render(<App />, document.getElementById('app'));