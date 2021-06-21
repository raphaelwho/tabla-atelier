import { timers } from 'jquery';
import React from 'react';
import ProductInfo from './ProductInfo.jsx'
import StyleSelector from './StyleSelector.jsx'


import './css/Product.css'
import AddToCart from './AddToCart.jsx'
import ImageGallery from './ImageGallery.jsx'
import { getActiveProductInfo } from './serverHelper.js'

class Product extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedStyle: null,
            styles: null,
            activeProduct: null,
        }
    }

    componentDidMount() {
        getActiveProductInfo().then((data) => {
            this.setState({activeProduct: data});
        });
    }

    render() {
        return(
            <div className="product-master-grid">
                <div className="leading" >
                    <ImageGallery />
                </div>

                <div classname="trailing">
                    <ProductInfo product={this.state.activeProduct}/>
                    <StyleSelector styles={[1,2,3,4,5]}/>
                    <AddToCart />

                </div>


               
            </div>
        )
    }
}

export default Product;