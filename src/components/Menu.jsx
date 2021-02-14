import React from 'react'
import '../assets/styles/Menu.css'

const Menu = () => {
  return (
    <nav id="menu" className="navbar navbar-expand-md navbar-dark px-4 mb-5">
      <a href="/" className="navbar-brand w-50 font-weight-bold">Kevin Castillo</a>
      <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav">
          <a href="#" className="nav-item nav-link mx-4">Acerca de mí</a>
          <a href="/Skills" className="nav-item nav-link mx-4">Aptitudes Técnicas</a>
          <a href="#" className="nav-item nav-link mx-4">Proyectos</a>
          <a href="#" className="nav-item nav-link mx-4">Contacto</a>
        </div>
      </div>
    </nav>
  )
}

export default Menu