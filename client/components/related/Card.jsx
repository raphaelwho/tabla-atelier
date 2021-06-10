import React, { Component } from 'react'
import $ from 'jquery';
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import Comparing from "./Comparing.jsx" ;
import './Card.css';


import Stars from '../shared/Stars.jsx';

function SimpleDialog(props) {
  const { onClose, selectedValue, open,item,cur } = props;
  const handleClose = () => {
    onClose(selectedValue);
  };
  return (
    <Dialog scroll='paper' onClose={handleClose} open={open}>
      <DialogTitle><h2>Comparing</h2>
      <div>{item.name}----{cur.name}</div>
      </DialogTitle>
      <DialogContent>
      <Comparing item= {item} cur={cur}/>
      </DialogContent>
    </Dialog>
  );
}

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
      display:false,
      ratings: {}
    }
    this.handleClickOpen=this.handleClickOpen.bind(this);
    this.handlClose=this.handlClose.bind(this);
  }

  handlClose() {
    this.setState({display:false})
  }

  handleClickOpen(){
      this.setState({display:true})
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
        })
      }
    });
    $.ajax({
      url: 'http://localhost:3000/review/meta',
      data: {id:this.props.id},
      method: "POST",
      success: (res)=>{
        this.setState({
          ratings: res.ratings
        })
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
    const {error, isLoading, item, image, price, discountPrice, display, ratings } = this.state;
    const cur = this.props.cur
    let rating = 0;
    let Star;
      if (Object.keys(ratings).length !== 0) {
        let numberOfrating=0;
        let sum = 0;
        for(let key in ratings) {
          numberOfrating += Number(ratings[key]);
          sum += Number(key) * Number(ratings[key])
        }
        rating = sum / numberOfrating;
        Star=<div><Stars rating = {rating} /></div>;
      } else {
        Star = <div></div>
      }

      if (error) {
        return <div>Error: {error} </div> ;
      } else if (isLoading) {
        return <div>Loading...</div>;
      } else {
      let displayPrice;
      if (discountPrice === null )  {
        displayPrice= <div>${price}</div>
      } else {
        displayPrice= <div style = {{color: 'red'}}>${discountPrice} </div>
      }
    return (
      <div class='card' >
        <img src = {image} onClick={this.handleClickOpen} ></img>
        <div>{item.category}</div>
        <div>{item.name}</div>
        <div>{displayPrice}</div>
        {Star}
        <br />
        <SimpleDialog  open={this.state.display} onClose={this.handlClose} item={item} cur ={cur}/>
      </div>


    )
    }
  }
}
