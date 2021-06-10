import React from 'react'

export default function Comparing(props) {
  let item =props.item;
  return (
    <div>
    {item.features.map(feature=>{
      let value;
      if (feature.value === 'true') {
        value = 'mark'
      } else value = feature.value;
      return (
      <div>
      <div>{value}    |  {feature.feature}</div>
      <br/>
      </div>
    )})}
    </div>
  )
}
