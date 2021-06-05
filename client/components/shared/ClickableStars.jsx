import React from 'react';
import ReactDOM from 'react-dom';

class ClickableStars extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      review: '',
      stars: 1
    }
    this.onClick = this.onClick.bind(this)
  }

  onClick(e) {
    this.setState({
      review: e.target.id
    }, () => {
      if (this.props.stars > 1)  {
        for (var i = 1; i <= this.props.stars; i++) {
          if (i <= parseInt(this.state.review)) {
            document.getElementById(JSON.stringify(i)).style.color = "gold";
          } else {
            document.getElementById(JSON.stringify(i)).style.color = "black";
          }
        }
      } else if (document.getElementById("1").style.color === "black") {
        document.getElementById("1").style.color = "gold";
      } else {
        document.getElementById("1").style.color = "black";
      }
    })
  }

  render() {
    if (this.props.stars === 1) {
      return (
        <span className="fa fa-star" id="1" onClick={this.onClick}></span>
      )
    } else {
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
}

export default ClickableStars;