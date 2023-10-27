import React, { useContext } from 'react'
import cart from "./assets/cart.png"
import "./CartWidget.css"
import { ColeccionContext } from '../../context/CartContext'

export default function CartWidget() {
  const {carrito} = useContext(ColeccionContext)
  return (
    <div>
        <a class="nav-link" href='#'><img className='picture' src={cart}></img> <span class="badge badge-light number">{carrito.length}</span></a>
    </div>
  )
}
