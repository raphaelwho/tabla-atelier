import React, { Component } from 'react';
import $ from 'jquery';
import Card from './Card.jsx';
// import axios from 'axios';
export default class Related extends Component {
  constructor(props){
    super(props);
    this.state={
      error: null,
      isLoading : true,
      items : []
    }
  }
  componentDidMount() {
    $.ajax({
      url: 'http://localhost:3000/related',
      method: "GET",
      success: (res)=>{
        this.setState({
          isLoading : false,
          items: res
        })
      }
    })

  }
  //   fetaxios.get(path+WebGLShaderPrecisionFormat.pr)
  //   fetch(API + DEFAULT_QUERY)
  //     .then(response => response.json())
  //     .then(data => this.setState({ hits: data.hits }));
  // }
  render() {
    const {error, isLoading, items } = this.state;
    if (error) {
      return <div>Error: {error} </div> ;
    } else if (isLoading) {
      return <div>Loading...</div>;
    } else {
    return (
      <div>
        <h1 style={{color:'gray'}}>RELATED PRODUCTS</h1>
        <div>List of related ID</div>
        {items.map(item =>(
          <Card id={item}/>
        ))}
      </div>
    )
    }
  }
}
