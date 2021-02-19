import React from 'react'
import '../assets/styles/Projects.css'
import bella from '../assets/static/bella.png'
import ac from '../assets/static/ac.png'
import ub from '../assets/static/ub.png'
import iw from '../assets/static/iwf.png'

const Projects = () => {
    return (
        <section id="projects" className="animado" >
            <div id="projects__container" className="container-fluid shadow bg-body border h-100">
                <div className="row pt-4 border border-bottom-3">
                    <div className="col-12 p-4">
                        <h3 id="section__container--s1" className="font-weight-bold ml-4 float-left mr-2">Mis </h3>
                        <h3 id="section__container--s2" className="font-weight-bold ml-4">Proyectos</h3>
                    </div>
                </div>
                <div className="row py-3 px-5">
                    <div className="col-lg-6 col-sm-12 p-4 d-flex flex-column align-items-center">
                        <div className="container p-0 rounded">
                            <div className="row border">
                                <div className="col-lg-4 col-md-4 col-sm-12 p-0">
                                    <a id="enlace_img" target="_blank" href="https://bellasbeautyacademy.com/"><img id="projects__img" src={bella} className="img-thumbnail rounded w-100 h-100 border" /></a>
                                </div>
                                <div className="col-lg-8 col-md-8 col-sm-12 p-3 d-flex flex-column justify-content-center">
                                    <a id="enlace_title" target="_blank" href="https://bellasbeautyacademy.com/"><h4>Bella's Beauty Academy</h4></a>
                                    <p>
                                        Colabore en este proyecto durante mis prácticas profesionales dentro de OrbitWeb Inc.
                                        Es un sitio web desarrollado en WordPress y con la utilización del tema Divi
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-12 p-4 d-flex flex-column align-items-center">
                        <div className="container p-0 rounded">
                            <div className="row border">
                                <div className="col-lg-4 col-md-4 col-sm-12 p-0">
                                    <a id="enlace_img" target="_blank" href="https://albertocruz.ca/"><img id="projects__img" src={ac} className="img-thumbnail rounded w-100 h-100 border" /></a>
                                </div>
                                <div className="col-lg-8 col-md-8 col-sm-12 py-1 px-3 d-flex flex-column justify-content-center">
                                    <a id="enlace_title" target="_blank" href="https://albertocruz.ca/"><h4>Alberto Cruz</h4></a>
                                    <p>
                                        Colabore en este proyecto durante mis prácticas profesionales dentro de OrbitWeb Inc.
                                        Es un sitio web desarrollado en WordPress y con la utilización del tema Slider Revolution
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-12 p-4 d-flex flex-column align-items-center">
                        <div className="container p-0 rounded">
                            <div className="row border">
                                <div className="col-lg-4 col-md-4 col-sm-12 p-0">
                                    <a id="enlace_img" target="_blank" href="https://login-iwfashion.web.app/home"><img id="projects__img--b" src={iw} className="img-thumbnail rounded w-100 h-100 border" /></a>
                                </div>
                                <div className="col-lg-8 col-md-8 col-sm-12 pt-2 px-3 d-flex flex-column justify-content-center">
                                    <a id="enlace_title" target="_blank" href="https://login-iwfashion.web.app/home"><h4>IW of Fashion</h4></a>
                                    <p>
                                        Colabore en este proyecto en cuarto año de Ingeniería en Ciencias de la Computación para la
                                        materia Desarrollo de Software Multiplataforma, utilizando del lado del frontend 
                                        Angular JS Versión 9 y Bootstrap
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-12 p-4 d-flex flex-column align-items-center">
                        <div className="container p-0 rounded">
                            <div className="row border">
                                <div className="col-lg-4 col-md-4 col-sm-12 p-0 d-flex flex-column justify-content-center">
                                    <a id="enlace_img" target="_blank" href="https://krissiaguidosnails.com/"><img id="projects__img--b" src={ub} className="img-thumbnail rounded w-100 h-100 border" /></a>
                                </div>
                                <div className="col-lg-8 col-md-8 col-sm-12 py-1 px-3 d-flex flex-column justify-content-center">
                                    <a id="enlace_title" target="_blank" href="https://krissiaguidosnails.com/"><h4>Uñas & Belleza</h4></a>
                                    <p>
                                        Colabore en este proyecto durante mis prácticas profesionales dentro de OrbitWeb Inc.
                                        Es un sitio web desarrollado en WordPress y con la utilización del tema Divi
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects