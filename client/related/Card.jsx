import React, { Component } from 'react'
import $ from 'jquery';

export default class Card extends Component {
  constructor(props){
    super(props);
    this.state={
      error: null,
      isLoading : true,
      item: null,
      image:null
    }
  }


  componentDidMount() {
    $.ajax({
      url: 'http://localhost:3000/card',
      data: {id:this.props.id},
      method: "POST",
      success: (res)=>{
        this.setState({
          isLoading : false,
          item: res
        })
        console.log(res)
      }
    });
    $.ajax({
      url: 'http://localhost:3000/cardimage',
      data: {id:this.props.id},
      method: "POST",
      success: (res)=>{
        this.setState({
          image: res.results[0].photos[0].thumbnail_url,
        })
        console.log(res)
      }
    });

  }
  render() {
    const {error, isLoading, item,image  } = this.state;
    if (error) {
      return <div>Error: {error} </div> ;
    } else if (isLoading) {
      return <div>Loading...</div>;
    } else {
    return (
      <div>
        <div>${item.category}</div>
        <div>${item.default_price}</div>
        <img src = {image}></img>
        <br></br>
      </div>
    )
    }
  }
}
