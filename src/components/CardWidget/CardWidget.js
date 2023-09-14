import React, {useState} from 'react'
import '../CardWidget/styles.css'

export default function CardWidget() {
  
  const [cantidadItems, setCantidadItems] = useState(0); 

  return (
    <div className="carrito-container">
      <p>🛒</p>
      {cantidadItems >= 0 && <span className="notification">{cantidadItems}</span>}
    </div>
  )
}
