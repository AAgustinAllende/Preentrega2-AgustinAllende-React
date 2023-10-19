import React, { useState } from 'react'

export default function ItemCount({stock,initial,onAdd}) {

    const [cantidad,setCantidad]=useState(initial)

    const sumar = () =>{
        if(cantidad < stock){
            setCantidad(cantidad+1)
        }
    }

    const restar = () =>{
        if (cantidad > stock){
            setCantidad(cantidad - 1)
        }
    }

  return (
    <div>
        <button className='btn btn-light' onClick={restar}> - </button>
        {cantidad}
        <button className='btn btn-light'onClick={sumar}> + </button>
        <button className='btn-btn-light' onClick={()=>onAdd(cantidad)} disabled={!stock}>Agregar al carrito</button>
    </div>
  )
}
