import React from 'react';
import {CText} from '../../shared/CText.jsx';
import '../css/IndividualQuestion.css';

var Helpful = (props) => {
  return (
    <div>
      <p className="default" id="helpful">Helpful? <u id="yes">Yes</u> {props.helpfulness} | <u id="addAnswer" >Add Answer</u></p>
    </div>
    )
}

export default Helpful;