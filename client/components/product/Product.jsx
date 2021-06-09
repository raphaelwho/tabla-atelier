import { timers } from 'jquery';
import React from 'react';
import ProductInfo from './ProductInfo.jsx'
import StyleSelector from './StyleSelector.jsx'

class Product extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedStyle:null
        }
    }

    render() {
        return(
            <div>
                <ProductInfo />
                <StyleSelector styles={[1,2,3,4, 5]}/>
            </div>
        )
    }
}

export default Product;