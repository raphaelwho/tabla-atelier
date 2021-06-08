import React from 'react';
import {CText} from '../../shared/CText.jsx';
import '../css/IndividualQuestion.css';


var IndividualQuestion = (props) => {

  return (
    <div>
      {console.log('this is the props: ', props)}
    {props.data.results.map((item, i) => {
      var keys = Object.keys(item.answers);
      var key = keys[0];
      var answer = item.answers[key].body;
      var user = item.answers[key].answerer_name;
      var date = item.answers[key].date;
      var d = new Date(date);
      console.log('this is the new date:', d)
      return (
        <div key={i}>
          <div id="q">
          <CText style="default" color="black" size={2} text={`Q: ${item.question_body}`} id="q" />
          <p className="default" id="helpful">Helpful? <u id="yes">Yes</u> {props.helpful} | <u id="addAnswer" >Add Answer</u></p>
          </div>
          <div id="a">
          <CText style="default" color="black" size={1} text={`A: ${answer} `} id="a" />
          <p className="default"> By {user}, { JSON.stringify(d) } | <u id="yes">Yes</u> {props.helpful} | <u id="report" >Report</u></p>
          </div>
        </div>
      )
    })}
    </div>
  );
}

export default IndividualQuestion;