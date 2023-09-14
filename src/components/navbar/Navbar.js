import React from 'react'
import '../navbar/styles.css'
import CardWidget from '../CardWidget/CardWidget'

export default function Navbar() {
  
  return (
    <div>
      <nav class="navbar sticky-top navbar-expand-lg bg-custom">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">BazarTech LOGO</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Inicio</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Notebooks</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Celulares</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Accesorios</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Contacto</a>
              </li>
            </ul>
          </div>
        </div>
        <CardWidget/>
     </nav>
    </div>
  )
}
