import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor() {
    super(props);
  }

  render() {
    return <h1>hi</h1>
  }
}

ReactDOM.render(<App />, document.getElementById('app'));