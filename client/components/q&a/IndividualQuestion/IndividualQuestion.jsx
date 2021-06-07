import React from 'react';
import CText from '../../../components/shared/CText.jsx';
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
      return (
        <div key={i}>
          <div id="q">
          <h1 className="default" id="q">{`Q: ${item.question_body}`}</h1>
          <p className="default" id="helpful">Helpful? <u id="yes">Yes</u> {props.helpful} | <u id="addAnswer" >Add Answer</u></p>
          </div>
          <div id="a">
          <h3 className= "default" >{`A: ${answer} `}</h3>
          <p className="default"> By {user} <u id="yes">Yes</u> {props.helpful} | <u id="report" >Report</u></p>
          </div>
        </div>
      )
    })}
    </div>
  );
}

export default IndividualQuestion;