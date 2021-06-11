import React from 'react';
import {CText} from '../shared/CText.jsx';
import './css/StyleSelector.css';

class StyleSelector extends React.Component {
    constructor(props) {
        super(props);
    }

    handleClick(event) {
        var prevSelection = document.getElementsByClassName("selected")[0];
        prevSelection.className = "";

        // Add superview function when nessesary
        event.target.childNodes[0].className = "selected";
    }

    renderAvailableStyles() {
        return this.props.styles.map((element, idx) => {
            return <span key={idx} idx={idx} onClick={(e) => {this.handleClick(e)}} className="dot"><span className={idx == 0 ? "selected":""}></span></span>
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