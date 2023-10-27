import logo from './logo.svg';
import './App.css';
import Item from './components/Item/Item';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemList from './components/ItemList/ItemList';
import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Navbar from './components/NavBar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import { CartProvider, ColeccionContext } from './context/CartContext';

function App() {

  const [carrito,setCarrito]=useState([])

  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <ColeccionContext.Provider value={{carrito,setCarrito}}>
      <Routes>
      <Route path="/" element={<ItemListContainer/>}/>
      <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
      <Route path='/item/:id' element={<ItemDetailContainer/>}/>
      <Route path='/seleccion/:seleccionId' element={<ItemListContainer/>}/>
      </Routes>
      </ColeccionContext.Provider>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
