import React from 'react';
import CText from '../../../components/shared/CText.jsx';
import '../css/IndividualQuestion.css';

var SearchBar = (props) => {
  return (
    <div>
      <input id="search" type="text" placeholder="Have A Question? Search For Answers..." className="default"></input>
      <button id="searchbutton" type="submit"><i className="fa fa-search" aria-hidden="true"></i></button>
    </div>
  );
}

export default SearchBar;