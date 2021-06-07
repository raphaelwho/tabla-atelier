import React from 'react';
import ReactDOM from 'react-dom';
import data from './DummyQuestionData.js';
import IndividualQuestion from './IndividualQuestion/IndividualQuestion.jsx';
import CText from '../shared/CText.jsx';

class Questions extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      questions: '',
      answers: '',
      data: data,
      helpful: 0
    }
    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    if (e.target.id === 'yes') {
      this.setState({
        helpful: this.state.helpful += 1
      }, () => {
        console.log(this.state.helpful)
      });
    }
  }

  render() {
    return (
      <div id="qanda">
        <h3 className="default">Questions &amp; Answers</h3>
        <IndividualQuestion data={this.state.data} helpful={this.state.helpful} />
      </div>
    )
  }
}

export default Questions;