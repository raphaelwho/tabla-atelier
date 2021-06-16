import React from 'react';
import ReactDOM from 'react-dom';
// import Square_button from './Square_button/Square_button.jsx';
import Stars from './components/shared/Stars.jsx';
import ClickableStars from './components/shared/ClickableStars.jsx';
import text, {CText, CTextDemoView} from './components/shared/CText.jsx';
import Ratings from './components/ratings/Ratings.jsx';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      id: 22124,
    };
  }

  render() {

    return (
    <div>
      <Ratings id={this.state.id}/>
    </div>);




}
}

ReactDOM.render(<App />, document.getElementById('app'));