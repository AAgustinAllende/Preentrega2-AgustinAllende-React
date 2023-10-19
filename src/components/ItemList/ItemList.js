import React from 'react'
import Item from '../Item/Item'
import "./ItemList.css"

export default function ItemList({products}) {
  return (
    <div className='cardA'>
      {products.map(prod => <Item key={prod.id} {...prod}/>)}
    </div>
  )
}
