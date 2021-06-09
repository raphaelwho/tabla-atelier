import React from 'react';
import ProductInfo from './ProductInfo.jsx'

class Product extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <ProductInfo />
        )
    }
}

export default Product;