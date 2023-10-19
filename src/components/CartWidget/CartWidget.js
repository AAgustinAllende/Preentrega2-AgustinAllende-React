import React from 'react'
import cart from "./assets/cart.png"
import "./CartWidget.css"

export default function CartWidget() {
  return (
    <div>
        <a class="nav-link" href='#'><img className='picture' src={cart}></img> <span class="badge badge-light number">0</span></a>
    </div>
  )
}
