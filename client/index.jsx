import React from 'react';
import ReactDOM from 'react-dom';
import Square_button from './Square_button/Square_button.jsx';
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
    <h1>hi<Square_button Text="ADD TO BAG" width={200} height={50} Click ={this.handleclick}/></h1>
          <div><Related/></div>
          </div>
  }
}

ReactDOM.render(<App />, document.getElementById('app'));