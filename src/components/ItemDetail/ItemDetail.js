import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

export default function ItemDetail({id,titulo,precio,stock,imagen}) {
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
      <ItemCount initial={1} stock={stock} onAdd={(cantidad) => console.log("Cantidad agregada", cantidad)}/>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}
