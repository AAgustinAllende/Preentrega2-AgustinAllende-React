import React, { useEffect, useState } from 'react'
import { getID } from '../../mock/data'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

export default function ItemDetailContainer() {

    const [product,setProduct]=useState(null)
    const productId = useParams().id

    useEffect(() => {
        getID(productId)
        .then(response => {
            setProduct(response)
        })
        .catch(error => {
            console.error(error)
        })
    },[productId])
  return (
    <div> 
        <ItemDetail {...product}/>
    </div>
  )
}
