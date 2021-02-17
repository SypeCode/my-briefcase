import React from 'react'
import '../assets/styles/Projects.css'
import bella from '../assets/static/bella.png'
import ac from '../assets/static/ac.png'
import ub from '../assets/static/ub.png'
import iw from '../assets/static/iwf.png'

const Projects = () => {
    return (
        <section id="projects" class="animado" >
            <div id="projects__container" className="container-fluid shadow bg-body border h-100">
                <div className="row pt-4 border border-bottom-3">
                    <div className="col-12 p-4">
                        <h3 id="section__container--s1" className="font-weight-bold ml-4 float-left mr-2">Mis </h3>
                        <h3 id="section__container--s2" className="font-weight-bold ml-4">Proyectos</h3>
                    </div>
                </div>
                <div className="row p-5">
                    <div className="col-lg-6 col-sm-12 p-4 d-flex flex-column align-items-center">
                        <div class="container p-0 rounded">
                            <div class="row border">
                                <div class="col-lg-4 col-md-4 col-sm-12 p-0">
                                    <a id="enlace_img" target="_blank" href="https://bellasbeautyacademy.com/"><img id="projects__img" src={bella} className="img-thumbnail rounded w-100 h-100 border" /></a>
                                </div>
                                <div class="col-lg-8 col-md-8 col-sm-12 p-3 d-flex flex-column justify-content-center">
                                <a id="enlace_title" target="_blank" href="https://bellasbeautyacademy.com/"><h4>Bella's Beauty Academy</h4></a>
                                    <p>
                                        Colabore en este proyecto durante mis practicas profesionales dentro de OrbitWeb Inc. 
                                        Es un sitio web desarrollado en WordPress y con la utilizacion del tema Divi
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-12 p-4 d-flex flex-column align-items-center">
                        <div class="container p-0 rounded">
                            <div class="row border">
                                <div class="col-lg-4 col-md-4 col-sm-12 p-0">
                                <a id="enlace_img" target="_blank" href="https://albertocruz.ca/"><img id="projects__img" src={ac} className="img-thumbnail rounded w-100 h-100 border" /></a>
                                </div>
                                <div class="col-lg-8 col-md-8 col-sm-12 py-1 px-3 d-flex flex-column justify-content-center">
                                <a id="enlace_title" target="_blank" href="https://albertocruz.ca/"><h4>Alberto Cruz</h4></a>
                                    <p>
                                        Colabore en este proyecto durante mis practicas profesionales dentro de OrbitWeb Inc. 
                                        Es un sitio web desarrollado en WordPress y con la utilizacion del tema Slider Revolution
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-12 p-4 d-flex flex-column align-items-center">
                        <div class="container p-0 rounded">
                            <div class="row border">
                                <div class="col-lg-4 col-md-4 col-sm-12 p-0">
                                <a id="enlace_img" target="_blank" href="https://login-iwfashion.web.app/home"><img id="projects__img--b" src={iw} className="img-thumbnail rounded w-100 h-100 border" /></a>
                                </div>
                                <div class="col-lg-8 col-md-8 col-sm-12 py-1 px-3 d-flex flex-column justify-content-center">
                                <a id="enlace_title" target="_blank" href="https://login-iwfashion.web.app/home"><h4>IW of Fashion</h4></a>
                                    <p>
                                        Colabore en este proyecto cuarto año de Ingenieria en Ciencias de la Computacion para la materia 
                                        Desarrollo de Software Multiplataforma, utilizando Angular JS Version 9 y Bootstrap del lado del frontend
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-12 p-4 d-flex flex-column align-items-center">
                        <div class="container p-0 rounded">
                            <div class="row border">
                                <div class="col-lg-4 col-md-4 col-sm-12 p-0 d-flex flex-column justify-content-center">
                                <a id="enlace_img" target="_blank" href="https://krissiaguidosnails.com/"><img id="projects__img--b" src={ub} className="img-thumbnail rounded w-100 h-100 border" /></a>
                                </div>
                                <div class="col-lg-8 col-md-8 col-sm-12 py-1 px-3 d-flex flex-column justify-content-center">
                                <a id="enlace_title" target="_blank" href="https://krissiaguidosnails.com/"><h4>Uñas & Belleza</h4></a>
                                    <p>
                                    Colabore en este proyecto durante mis practicas profesionales dentro de OrbitWeb Inc. 
                                        Es un sitio web desarrollado en WordPress y con la utilizacion del tema Divi
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