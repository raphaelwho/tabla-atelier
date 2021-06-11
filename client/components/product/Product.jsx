import { timers } from 'jquery';
import React from 'react';
import ProductInfo from './ProductInfo.jsx'
import StyleSelector from './StyleSelector.jsx'
import {Dropdown, DropdownDemo} from '../shared/Dropdown.jsx'
import CButton from '../shared/CButton.jsx'
import './css/Product.css'

class Product extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedStyle: null
        }
    }

    render() {
        return(
            <div>
                <ProductInfo />
                <StyleSelector styles={[1,2,3,4,5]}/>
                <div className="size-flexgrid">
                    <Dropdown initValue="SELECT SIZE V" options={[1,2,3,4]}/>
                    <Dropdown initValue="1" options={[1,2,3,4]}/>
                </div>
                <CButton click={() => {log("Button clicked")}} Text={'ADD TO CART'} type={'add'}/>
               
            </div>
        )
    }
}

export default Product;