import React from 'react';
import Stars from '../shared/Stars.jsx';
import {CText} from '../shared/CText.jsx';
import './css/ProductInfo.css';


class ProductInfo extends React.Component {
    constructor(props) {
        super(props);
    }

    getProductRating() {
        return (
        <div className="ratingbutton">
            <div className="griditem">
                <Stars className="griditem"/>
            </div>
            <div className="griditem">
                <CText text="Read all reviews" color="grey"/>
            </div>
        </div>
        )
    }

    render() {
        return (
            <div className="productinfo">
                {this.getProductRating()}
                <CText text="CATEGORY" style="thin" color="grey"/>
                <CText text="EXPANDED PRODUCT NAME" style="bold" size={2}/>
                <CText text="$365" style="thin" size={0.75} color="grey"/>
            </div>
        )
    }
}

export default ProductInfo;