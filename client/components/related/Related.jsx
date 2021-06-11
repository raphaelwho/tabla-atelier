import React, { Component } from 'react';
import $ from 'jquery';
import Card from './Card.jsx';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import './button.css'

export default class Related extends Component {
  constructor(props){
    super(props);
    this.state={
      error: null,
      isLoading : true,
      items : [],
      cur : null,
      myoutfits:[],

    }

  }

  componentDidMount() {
    $.ajax({
      url: 'http://localhost:3000/card',
      data: {id:this.props.id},
      method: "POST",
      success: (res)=>{
        this.setState({
          cur: res
        })
      }
    })

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

  addToMyoutfits(id) {
    this.setState({
      myoutfits: [...this.state.myoutfits, id]
    })
  }

  render() {
    const {error, isLoading, items, cur } = this.state;
    if (error) {
      return <div>Error: {error} </div> ;
    } else if (isLoading) {
      return <div>Loading...</div>;
    } else {
      const params = {
        slidesPerView: 4.5,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }


    return (
      <div>
        <h1 style={{color:'gray'}}>RELATED PRODUCTS</h1>
        <Swiper {...params}>
        {items.map(item =>(
          <div>
            <Card id={item} cur={cur}/>
            </div>
            ))}
        </Swiper>
        <h1 style={{color:'gray'}}>YOUR OURFIT</h1>
    </div>
    )
    }
  }
}
