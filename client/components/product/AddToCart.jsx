import React from 'react';

import {Dropdown, DropdownDemo} from '../shared/Dropdown.jsx'
import CButton from '../shared/CButton.jsx'
import ClickableStars from '../shared/ClickableStars.jsx'

class AddToCart extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="addToCart">
                <h1> </h1> {/* Temp Spacer */}
                <div className="size-flexgrid">
                    <Dropdown initValue="SELECT SIZE V" options={[1,2,3,4]}/>
                    <Dropdown initValue="1" options={[1,2,3,4]}/>
                </div>

                
                <h1> </h1> {/* Temp Spacer */}
                <div className="size-flexgrid">
                    <CButton click={() => {log("Button clicked")}} Text={'ADD TO CART'} type={'add'}/>

                    {/* TODO: CORRECTLY CENTER AND MANAGE INTERACTIONS */}
                    <div className="starButton">
                        <ClickableStars numStars={1}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddToCart;