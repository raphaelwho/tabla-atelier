import React from 'react';
import {CText} from '../shared/CText.jsx';
import './css/StyleSelector.css';

class StyleSelector extends React.Component {
    constructor(props) {
        super(props);
    }

    renderAvailableStyles() {
        return this.props.styles.map((element, idx) => {
            return <span key={idx} className="dot"></span>
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