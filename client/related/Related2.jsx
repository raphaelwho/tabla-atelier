import React, { Component } from 'react';
import $ from 'jquery';
import Card from './Card.jsx';
import Box from './Box.jsx';
import Swiper from 'react-id-swiper';
// Import Swiper styles
//import 'swiper/swiper-bundle.css';
import 'swiper/css/swiper.css';

export default class Related extends Component {
  constructor(props){
    super(props);
    this.state={
      error: null,
      isLoading : true,
      items : [],

    }
  }

  componentDidMount() {

    $.ajax({
      url: 'http://localhost:3000/related',
      data: {id:this.props.id},
      method: "POST",
      success: (res)=>{
        this.setState({
          isLoading : false,
          items: res
        })
      }
    })



  }
  tan(){

    this.setState({display:'block'})
  }

  hide(){
      this.setState({display:'none'})
  }
  render() {
    const {error, isLoading, items } = this.state;

    if (error) {
      return <div>Error: {error} </div> ;
    } else if (isLoading) {
      return <div>Loading...</div>;
    } else {
      const params = {
        slidesPerView: 4,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }


    return (
      <div>
        <h1 style={{color:'gray'}}>RELATED PRODUCTS</h1>

        <div>List of related ID</div>
        <Swiper {...params}>
        {items.map(item =>(
          <div>
            <Card id={item} main={this.props.id}/>
            </div>
            ))}
        </Swiper>


    </div>
    )
    }
  }
}
