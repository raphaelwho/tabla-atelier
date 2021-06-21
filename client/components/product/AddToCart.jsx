import React from 'react';

import {Dropdown, DropdownDemo} from '../shared/Dropdown.jsx'
import CButton from '../shared/CButton.jsx'
import ClickableStars from '../shared/ClickableStars.jsx'

class AddToCart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedSize: undefined
        }
    }

    getSizes() {
        if (this.props.product) {
            var sizes = [];
            for (let [k, v] of Object.entries(this.props.product.skus)) {
                sizes.push(v.size);
            }
            return sizes;
        } else {
            return [];
        }
    }

    getQuantity() {
        return 20
    }

    selectSize(event) {
        log(event);
    }

    render() {
        return (
            <div className="addToCart">
                <h1> </h1> {/* Temp Spacer */}
                <div className="size-flexgrid">
                    <Dropdown initValue="SELECT SIZE" options={this.getSizes()} onChange={(e) => {this.selectSize(e);}}/>

                    {/* Fix this ridiculous line */}
                    <Dropdown initValue={this.state.selectedSize ? "1":""} options={this.getQuantity() > 15 ? Array.from(Array(15 + 1).keys()).slice(1):Array.from(Array(this.getQuantity()+1).keys()).slice(1)}/>
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