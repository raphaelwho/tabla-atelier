import React from 'react';
import ReactDOM from 'react-dom';

import Stars from './components/shared/Stars.jsx';
import ClickableStars from './components/shared/ClickableStars.jsx'
import text, {CText, CTextDemoView} from './components/shared/CText.jsx';


class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (<div>
      <CTextDemoView />
      <Stars rating={0.5} />
      <ClickableStars />
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));