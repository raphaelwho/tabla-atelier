import React, { Component } from 'react'
import Swiper from "swiper";
import $ from 'jquery';
// Import Swiper styles
// import 'swiper/css/swiper.css';
// import 'swiper/dist/css/swiper.css';
// import 'swiper/swiper-bundle.css';

export default class Slide extends Component {

  componentDidMount() {
    this.swiper = new Swiper('.swiper-container', {

      slidesPerView: 4,
      spaceBetween: 30,
  // If we need pagination

  // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  // And if we need scrollbar
    })
  }
  render() {
    return (
      <div>
          <div className="swiper-container">
          <div className="swiper-wrapper">
            <div className="swiper-slide"><div>HH</div>Slide 1</div>
            <div className="swiper-slide"><div>HH</div>Slide 2</div>
            <div className="swiper-slide"><div>HH</div>Slide 3</div>
            <div className="swiper-slide"><div>HH</div>Slide 4</div>
            <div className="swiper-slide"><div>HH</div>Slide 5</div>
            <div className="swiper-slide">Slide 6</div>
            <div className="swiper-slide">Slide 7</div>
            <div className="swiper-slide">Slide 8</div>
            <div className="swiper-slide">Slide 9</div>
          </div>
          <button className="swiper-button-prev"></button>
          <button className="swiper-button-next"></button>

        </div>
      </div>

    );
  }
}
