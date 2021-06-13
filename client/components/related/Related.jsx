import React, { Component } from 'react';
import $ from 'jquery';
import Card from './Card.jsx';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import './button.css'
import {FaRegStar } from 'react-icons/fa';
import {CgCloseO } from 'react-icons/cg';

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
    this.addToMyoutfits=this.addToMyoutfits.bind(this)
    this.removeMyOutfit=this.removeMyOutfit.bind(this)

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
  removeMyOutfit(id) {
    const myoutfits =  this.state.myoutfits.filter(item => item !== id)
    this.setState({ myoutfits })
  }
  addToMyoutfits(id) {
    if (!this.state.myoutfits.includes(id)) {
      const myoutfits = [...this.state.myoutfits,id]
      this.setState({ myoutfits })
    }
  }

  render() {

    const {error, isLoading, items, cur,myoutfits } = this.state;

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
        },
        observer: true,
        observeParents: true,
      }


    return (
      <div>
        <h1 style={{color:'gray'}}>RELATED PRODUCTS</h1>
        <Swiper {...params}>
        {items.map(item =>(
          <div>
            <Card item_id={item} cur={cur} add={this.addToMyoutfits} icon={<FaRegStar />}/>
            </div>
            ))}
        </Swiper>
        <h1 style={{color:'gray'}}>YOUR OURFIT</h1>
        <Swiper {...params}>
        {myoutfits.map(item =>(
          <div>
            <Card item_id={item} cur={cur} add={this.removeMyOutfit} icon={< CgCloseO />}/>
            </div>
            ))}
        </Swiper>
    </div>
    )
    }
  }
}
