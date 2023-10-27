import React, { useContext } from 'react'
import "./Item.css"
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'


export default function Item({ id, stock, imagen, precio, titulo }) {

  

  return (
    <div>
      <div className="cardB">
        <div className='compra'>
  <img src={imagen} className="card-img-top" alt="..."></img><a href='' className='favLink'>🤍</a>
  </div>
  <div className="card-body">
    <p><img className='envioFree' src='../envio.png'></img>Envio gratis</p>
    
    <p>Compra protegida</p>
    <h5 className="card-title">{titulo}</h5>
    <p className="card-text">{precio}</p>
    
    <Link to={`/item/${id}`} className="btn btn-primary btn-detail">Ver detalles</Link>
  </div>
</div>
    </div>
  )
}
