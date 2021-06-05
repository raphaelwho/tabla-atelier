import React, { Component } from 'react'
import $ from 'jquery';
import Box from './Box.jsx';
export default class Card extends Component {
  constructor(props){
    super(props);
    this.state={
      error: null,
      isLoading : true,
      item: null,
      image:null,
      price:null,
      discountPrice: null,
      display:'none'
    }
    this.tan=this.tan.bind(this);
    this.hide=this.hide.bind(this);
  }

  tan() {
    this.setState({display:'block'})
  }

  hide(){
      this.setState({display:'none'})
  }


  componentDidMount() {
    $.ajax({
      url: 'http://localhost:3000/card',
      data: {id:this.props.id},
      method: "POST",
      success: (res)=>{
        this.setState({
          isLoading : false,
          item: res,
          price: res.default_price
        },()=>console.log(res))
      }
    });
    $.ajax({
      url: 'http://localhost:3000/cardimage',
      data: {id:this.props.id},
      method: "POST",
      success: (res)=>{
        let cur = res.results[0];
        this.setState({
          image: cur.photos[0].thumbnail_url,
          price: cur['original_price'],
          discountPrice: cur['sale_price']
        })
        for (let i=0; i<res.results.length;i++) {
          cur = res.results[i];
          // console.log(this.props.id,cur)
          if (cur['default?']){
            this.setState({
              image: cur.photos[0].thumbnail_url,
              price: cur['original_price'],
              discountPrice: cur['sale_price']
            })


            break
          }
        }

      }
    });

  }
  render() {
    const {error, isLoading, item,image,price,discountPrice } = this.state;

      if (error) {
        return <div>Error: {error} </div> ;
      } else if (isLoading) {
        return <div>Loading...</div>;
      } else {
      const imgStyle= {
        resizeMode: "repeat",
        width: '100%',
        height:220,
      }
      let displayPrice;
      if (discountPrice === null )  {
        displayPrice= <div>${price}</div>
      } else {
        displayPrice= <div style = {{color: 'red'}}>${discountPrice} </div>
      }
    return (
      <div >
        <Box display={this.state.display} hide={this.hide} current = {this.props.main} related={item}/>
        <img src = {image} style={imgStyle}onClick={this.tan} ></img>
        <div>{item.category}</div>
        <div>{item.name}</div>
        <div>{displayPrice}</div>
      </div>
    )
    }
  }
}
