import React from 'react'
import '../assets/styles/Menu.css'

const Menu = () => {
  return (
    <nav id="menu" className="navbar navbar-expand-md navbar-dark px-5 py-0 mb-5">
      <a id="menu__bienvenido" href="/" className="p-3">Mi Portafolio</a>
      <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse justify-content-end py-0" id="navbarCollapse">
        <div className="navbar-nav py-0">
          <a id="menu__item" href="#about" className="p-3">Acerca de mí</a>
          <a id="menu__item" href="#skills" className="p-3">Habilidades Técnicas</a>
          <a id="menu__item" href="#projects" className="p-3">Proyectos</a>
          <a id="menu__item" href="#contact" className="p-3">Contacto</a>
        </div>
      </div>
    </nav>
  )
}

export default Menu