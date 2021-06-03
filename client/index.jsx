import React from 'react';
import ReactDOM from 'react-dom';
// import Square_button from './Square_button/Square_button.jsx';
import Related from './related/Related.jsx'
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
          <div><Related id={22122}/></div>
          </div>
  }
}

ReactDOM.render(<App />, document.getElementById('app'));