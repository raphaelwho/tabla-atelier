import React from 'react'

export default function Comparing(props) {
  const {item, cur } = props;
  let Comparing_table = {};
  for (let i=0; i<item.features.length; i++) {
    let key = item.features[i].feature
    let value = item.features[i].value
    Comparing_table[key]=Comparing_table[key] || {'left':undefined,'right':undefined};
    Comparing_table[key]['left']=value

  }
  for (let i=0; i<cur.features.length; i++) {
    let key = cur.features[i].feature
    let value = cur.features[i].value
    Comparing_table[key]=Comparing_table[key] || {'left':undefined,'right':undefined};
    Comparing_table[key]['right']=value
  }


  return (
    <div>
    {Object.keys(Comparing_table).map(key=>{
        return (
          <div>
          <div>{Comparing_table[key]['left']|| 'Null'} ---- {key} ----{Comparing_table[key]['right']||'Null'}</div>
          <br/>
          </div>
        )
    })}
    </div>
    )


}
