import React from 'react';
import {CText} from '../../shared/CText.jsx';
import '../css/IndividualQuestion.css';
import Helpful from './Helpful.jsx';
import AnswerInfo from './AnswerInfo.jsx';


var IndividualQuestion = (props) => {
  return (
    <div>
    {props.data.results.map((item, i) => {
      var keys = Object.keys(item.answers);
      var key = keys[0];
      var answer = item.answers[key].body;
      var user = item.answers[key].answerer_name;
      var date = item.answers[key].date;
      var d = new Date(date)
      var dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
      var answerDate = d.toLocaleDateString('en-US', dateOptions);
      return (
        <div key={i}>
          <div id="q">
          <CText style="default" color="black" size={2} text={`Q: ${item.question_body}`} id="q" />
          <Helpful helpfulness={item.question_helpfulness} />
          </div>
          <div id="a">
          <CText style="default" color="black" size={1} text={`A: ${answer} `} id="a" />
          <AnswerInfo user={user} answerDate={answerDate} helpfulness={item.answers[key].helpfulness} />
          </div>
        </div>
      )
    })}
    </div>
  );
}

export default IndividualQuestion;