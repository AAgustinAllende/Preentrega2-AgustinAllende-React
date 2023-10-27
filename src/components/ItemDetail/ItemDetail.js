import React, { useContext, useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

export default function ItemDetail({id,titulo,precio,stock,imagen}) {

  const [cantidadAgregada,setCantidadAgregada] = useState(0)


  const handleOnAdd = (cantidad) =>{
    setCantidadAgregada(cantidad)
  }
  return (
    <div>
        <div className="card mb-3">
  <div className="row g-0">
    <div className="col-md-4">
      <img src={imagen} className="img-fluid rounded-start" alt="..."></img>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{titulo}</h5>
        <p className="card-text">{precio}</p>
        <p className="card-text"><small className="text-body-secondary">Cantidad disponible: {stock} </small></p>
      {
  cantidadAgregada > 0 ? (
    <Link to="/cart" className='btn btn-light'>Confirmar compra</Link>
  ):(
    <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/>
  )
 }
            </div>
    </div>
  </div>
</div>
 
    </div>
  )
}
