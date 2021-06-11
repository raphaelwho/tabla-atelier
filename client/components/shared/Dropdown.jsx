import React from 'react';
import './css/Dropdown.css'

class Dropdown extends React.Component {
    constructor(props) {
        super(props);
    }

    handleEvent(event) {
        this.props.onChange(event);
    }

    renderOptions() {
        return this.props.options.map((x, idx) => {
            return <option key={idx} value={idx}>{x}</option>
        })
    }

    render() {
        return(
            <div className="dropdown">
                <select id="custom-dropdown" onChange={(e) => {this.handleEvent(e)}}>
                    <option value={0}>{this.props.initValue}</option>
                    {this.renderOptions()}
                </select>
                <i className="arrow down"></i>
            </div>
        )
    }
}

class DropdownDemo extends React.Component {
    constructor() {
        super()
    }

    render() {

        return( 
        <div>
            {/* Basic Usage Example */}
            <Dropdown initValue="My Initial Value" options={["The", "Options", "I", "Allow"]}/>

            {/* A superview which needs information about the chaged event can use onChange as below*/}
            <Dropdown initValue="Listen For Event" onChange={(event) => {log(event);}} options={[1,2,3,4]}/>
        </div>)

    }
}

export {
    Dropdown,
    DropdownDemo
};