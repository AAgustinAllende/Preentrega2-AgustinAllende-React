import React, { useContext, useState } from 'react'
import Item from '../Item/Item'
import { getProducts } from '../../mock/data'
import { ColeccionContext } from '../../context/CartContext'

export default function ItemCount({id,stock,initial}) {

    const {carrito,setCarrito}=useContext(ColeccionContext)
    const [cantidad,setCantidad]=useState(initial)

    const sumar = () =>{
        if(cantidad < stock){
            setCantidad(cantidad+1)
        }
    }

    const restar = () =>{
        if (cantidad > 1){
            setCantidad(cantidad - 1)
        }
    }

    const agregarAlCarrito = () => {
        setCarrito(...[carrito,id]);
    }

  return (
    <div>
        <button className='btn btn-light' onClick={restar}> - </button>
        {cantidad}
        <button className='btn btn-light'onClick={sumar}> + </button>
        <button className='btn btn-light' onClick={agregarAlCarrito}>Agregar al carrito</button>
    </div>
  )
}
