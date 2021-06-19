import React from 'react';
import './css/ImageGallery.css';

class ImageGallery extends React.Component {
    constructor() {
        super();
    }

    render() {
        return(
                <img className="featured-image" src='./sample.jpeg' ></img>

        )
    }
}

export default ImageGallery;