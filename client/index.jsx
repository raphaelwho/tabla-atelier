import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
// import Square_button from './Square_button/Square_button.jsx';
import Related from './related/Related.jsx'
=======

import Stars from './components/shared/Stars.jsx';
import ClickableStars from './components/shared/ClickableStars.jsx'
import text, {CText, CTextDemoView} from './components/shared/CText.jsx';


>>>>>>> main
class App extends React.Component {
  constructor() {
    super();
  }
  handleclick() {
    alert('Help');
  }

  render() {
<<<<<<< HEAD

    return <div>
    <h1>hi</h1>
          <div><Related id={22122}/></div>
          </div>
=======
    return (<div>
      <CTextDemoView />
      <Stars rating={0.5} />
      <ClickableStars />
    </div>)
>>>>>>> main
  }
}

ReactDOM.render(<App />, document.getElementById('app'));