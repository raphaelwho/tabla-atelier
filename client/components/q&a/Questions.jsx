import React from 'react';
import ReactDOM from 'react-dom';
import data from './DummyQuestionData.js';
import IndividualQuestion from './IndividualQuestion/IndividualQuestion.jsx';
import CText from '../shared/CText.jsx';
import SearchBar from './IndividualQuestion/SearchBar.jsx';

class Questions extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      reported: false,
      data: data,
      questionHelpfulness: 0,
      answerHelpfulness: 0
    }
  }

  render() {
    return (
      <div id="qanda">
        <h3 className="default">Questions &amp; Answers</h3>
        <SearchBar />
        <IndividualQuestion data={this.state.data} questionHelpfulness={this.state.questionHelpfulness} answerHelpfulness={this.state.answerHelpfulness} />
      </div>
    )
  }
}

export default Questions;