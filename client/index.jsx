import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Stars from './Stars.jsx';

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h1>Sample Stars</h1>
        <Stars rating={2.846} />
      </div>
    );}
}

ReactDOM.render(<App />, document.getElementById('app'));