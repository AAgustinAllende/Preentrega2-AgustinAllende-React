import React from 'react'
import "./Navbar.css"
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
        <nav class="navbar navbar-expand-lg barra">
          <section className='abc'>  
  <div class="container-fluid barra-order">
    <div className='onePage'>
      <div className='a'>
      <Link class="navbar-brand" to="/"><img className='picture' src='../afa_logo.svg.png'></img></Link>
      </div>
      <div className='b'>
      <form class="flexform" role="search">
        <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Search"></input>
        <button class="btn btn-outline-info" type="submit">Buscar</button>
      </form>
      </div>
    </div>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div className='barra2'>
    <div  id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/seleccion/femenina">Seleccion Femenina</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/seleccion/masculina">Seleccion Masculina</Link>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categorias
          </a>
          <ul class="dropdown-menu">
            <li><Link class="dropdown-item" to="/category/remeras">Camisetas</Link></li>
            <li><Link class="dropdown-item" to="/category/campera">Buzos y camperas</Link></li>
            <li><Link class="dropdown-item" to="/category/pantalon">Pantalones</Link></li>
            <li><Link class="dropdown-item" to="#">Accesorios</Link></li>

          </ul>
        </li>
        <li class="nav-item">
           <CartWidget/> 
        </li>
      </ul>
      
    </div>
    </div>
  </div>
  </section>
</nav>
    </div>
  )
}
