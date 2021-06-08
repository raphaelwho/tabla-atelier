import React, { Component } from 'react'
import $ from 'jquery';
import Dialog from "@material-ui/core/Dialog";
import './Card.css'


function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;
  const handleClose = () => {
    onClose(selectedValue);
  };
  return (
    <Dialog onClose={handleClose} open={open}>
      <div>Comparison</div>
      <div>insideDialog</div>
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
      display:false
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
    const {error, isLoading, item, image, price, discountPrice, display } = this.state;
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
        <br />
        <SimpleDialog open={this.state.display} onClose={this.handlClose} />
      </div>


    )
    }
  }
}
