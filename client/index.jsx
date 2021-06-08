import React from 'react';
import ReactDOM from 'react-dom';
// import Square_button from './Square_button/Square_button.jsx';
import Related from './related/Related2.jsx'
import Dialog from './related/Dialog.jsx'

import Stars from './components/shared/Stars.jsx';
import ClickableStars from './components/shared/ClickableStars.jsx'
import text, {CText, CTextDemoView} from './components/shared/CText.jsx';
import Slide from './related/Slide.jsx';
import $ from 'jquery';


class App extends React.Component {
  constructor() {
    super();
  }
  handleclick() {
    alert('Help');
  }

  render() {

    return <div>
    <h1>hi</h1>
          <Related id={22129} />
          <Slide />
          <Dialog />
          </div>
  }
}

ReactDOM.render(<App />, document.getElementById('app'));