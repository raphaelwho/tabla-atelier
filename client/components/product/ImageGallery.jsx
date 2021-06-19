import React from 'react';
import './css/ImageGallery.css';

class ImageGallery extends React.Component {
    constructor() {
        super();

        this.state = {
            expanded: false
        }
    }

    render() {
        return(
            <div className="img-gallery">
                <img className="featured-image" src='./sample.jpeg'></img>
                <h1 className="expand-button">+</h1>
            </div>

        )
    }
}

export default ImageGallery;