import React from 'react';
import {CText} from '../shared/CText.jsx';
import './css/StyleSelector.css';

class StyleSelector extends React.Component {
    constructor(props) {
        super(props);
    }

    handleClick(event) {
        [...document.getElementsByClassName("style-div")].forEach( (div, idx) => {
            if (event.target.className.split(" ")[1] === idx + "") {
                div.childNodes[1].className = "selected";
            } else {
                div.childNodes[1].className = "";
            }
        } );

    }

    renderAvailableStyles() {
        return this.props.styles.map((element, idx) => {
            return (
                <div key={idx} idx={idx} className="style-div" onClick={(e) => {this.handleClick(e)}}>
                    <img key={idx} idx={idx} className={"dot " + idx} src='./sample.jpeg'></img>
                    <span className={idx == 0 ? "selected":""}></span>
                </div>
            )

        });

    }

    render() {
        return (
            <div>
                <CText text="Style >" style="bold"/>
                <div className="stylesgrid">
                    {this.renderAvailableStyles()}
                    
                </div>

            </div>
        )
    }
}

export default StyleSelector;