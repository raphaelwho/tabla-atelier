/* eslint-disable react/prop-types */
/* eslint-disable require-jsdoc */
import React, {Component} from 'react';
import Card from './Card.jsx';
import SwiperCore, { Navigation} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import './button.css';
import {FaRegStar} from 'react-icons/fa';
import {CgCloseO} from 'react-icons/cg';
import axios from 'axios';

SwiperCore.use([Navigation]);
export default class Related extends Component {
  constructor(props) {
    super(props);
    this.state={
      error: null,
      isLoading: true,
      items: [],
      cur: null,
      myoutfits: [],
      rememberMe: false,

    };
    this.addToMyoutfits=this.addToMyoutfits.bind(this);
    this.removeMyOutfit=this.removeMyOutfit.bind(this);
  }

  componentDidMount() {
    const myoutfits = JSON.parse(localStorage.getItem('myoutfits')|| '[]');
    this.setState({myoutfits});
    axios.all([
      axios.post('/card', {id: this.props.id}),
      axios.post('related', {id: this.props.id}),
    ]).then(axios.spread((data1, data2) => {
      this.setState({
        cur: data1.data,
        isLoading: false,
        items: data2.data,
      });
    }));





  }
  removeMyOutfit(id) {
    const myoutfits = [...this.state.myoutfits.filter((item) => item !== id)];
    localStorage.setItem('myoutfits', JSON.stringify(myoutfits) );
    this.setState({myoutfits});
  }
  addToMyoutfits(id) {
    if (!this.state.myoutfits.includes(id)) {
      const myoutfits = [...this.state.myoutfits, id];
      localStorage.setItem('myoutfits', JSON.stringify(myoutfits) );
      this.setState({myoutfits});
    }
  }

  render() {
    const {error, isLoading, items, cur, myoutfits} = this.state;



    if (error) {
      return <div>Error: {error} </div>;
    } else if (isLoading) {
      return <div>Loading...</div>;
    } else {
      const params = {
        slidesPerView: 4.5,
        navigation: true,
        observer: true,
        allowTouchMove: false,
      };


      return (
        <div>
          <h1 style={{color: 'gray'}}>RELATED PRODUCTS</h1>
          <Swiper {...params}>
            {items.map((itemId) =>(
              <SwiperSlide key={itemId}>
                <Card
                  itemId={itemId}
                  cur={cur}
                  add={()=>this.addToMyoutfits(itemId)}
                  icon={<FaRegStar/>}/>
              </SwiperSlide>
            ))}
          </Swiper>
          <h1 style={{color: 'gray'}}>YOUR OURFIT</h1>
          <Swiper {...params}>
            <SwiperSlide >
              <div onClick={()=>this.addToMyoutfits(cur.id)}>
                <Card item_id={cur.id} cur={'blank'} add ={()=>{}}/>
              </div>
            </SwiperSlide>
            {myoutfits.map( (itemId, index) =>(
              <SwiperSlide key={itemId}>
                <Card
                  itemId={itemId}
                  cur={cur}
                  add={()=>this.removeMyOutfit(itemId)}
                  icon={< CgCloseO />}/>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      );
    }
  }
}
