import React from 'react';
import {CText} from '../../shared/CText.jsx';
import '../css/IndividualQuestion.css';

var AnswerInfo = (props) => {
  return (
    <div>
      <p className="default"> By {props.user}, { props.answerDate } | <u id="yes">Yes</u> {props.helpfulness}| <u id="report" >Report</u></p>
    </div>
  )
}

export default AnswerInfo;