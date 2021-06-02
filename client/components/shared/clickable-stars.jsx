import React from 'react';
import ReactDOM from 'react-dom';

class ClickableStars extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      review: ''
    }
    this.onClick = this.onClick.bind(this)
  }

  onClick(e) {
    this.setState({
      review: e.target.id
    }, () => {
      for (var i = 1; i <= 5; i++) {
        if (i <= parseInt(this.state.review)) {
          document.getElementById(JSON.stringify(i)).style.color = "gold";
        } else {
          document.getElementById(JSON.stringify(i)).style.color = "black";
        }
      }
    })
  }

  render() {
    return (
      <div>
        <span className="fa fa-star" id="1" onClick={this.onClick}></span>
        <span className="fa fa-star" id="2" onClick={this.onClick}></span>
        <span className="fa fa-star" id="3" onClick={this.onClick}></span>
        <span className="fa fa-star" id="4" onClick={this.onClick}></span>
        <span className="fa fa-star" id="5" onClick={this.onClick}></span>
      </div>
    )
  }
}

export default ClickableStars;