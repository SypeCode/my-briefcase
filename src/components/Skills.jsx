import React from 'react'
import '../assets/styles/Skills.css'
import aptitudes from '../assets/static/aptitudes.png'
import idiomas from '../assets/static/idiomas.png'
import tecnologias from '../assets/static/tecnologias.png'

const Skills = () => {
    return (
        <section id="skills" class="animado" >
            <div id="skills__container" className="container-fluid shadow bg-body border h-100">
                <div className="row pt-4 border border-bottom-3">
                    <div className="col-12 p-4">
                        <h3 id="section__container--s1" className="font-weight-bold ml-4 float-left mr-2">Habilidades </h3>
                        <h3 id="section__container--s2" className="font-weight-bold ml-4">Técnicas</h3>
                    </div>
                </div>
                <div className="row p-5">
                    <div className="col-lg-8 col-sm-12 p-4 border d-flex flex-column align-items-center">
                        <div class="row">
                            <div class="col-lg-6 col-sm-12">
                                <img id="foto" src={aptitudes} className="img-thumbnail rounded-circle mb-3" />
                            </div>
                            <div class="col-lg-6 col-sm-12">
                                <h4 className="font-weight-bold text-center my-3">Aptitudes</h4>
                                <h6 className="text-dark text-center">Organización</h6>
                                <h6 className="text-dark text-center">Gestión del tiempo</h6>
                                <h6 className="text-dark text-center">Aprendizaje rapido</h6>
                                <h6 className="text-dark text-center">trabajo en equipo</h6>
                                <h6 className="text-dark text-center">Motivación</h6>
                                <h6 className="text-dark text-center">Confiabilidad</h6>
                                <h6 className="text-dark text-center">Profesionalismo</h6>
                                <h6 className="text-dark text-center">Responsabilidad</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-12 p-4 border d-flex flex-column align-items-center">
                        <img id="foto_idioma" src={idiomas} className="img-thumbnail rounded-circle mb-3" />
                        <h4 className="font-weight-bold text-center my-3">Idiomas</h4>
                        <h6 className="text-dark">Español - Nativo</h6>
                        <h6 className="text-dark">Ingles - Básico</h6>
                    </div>
                    <div className="col-12 p-4 border d-flex lign-items-center">
                        <div class="row">
                            <div class="col-lg-4 col-sm-12 d-flex align-items-center justify-content-center">
                                <img id="foto_tecnologias" src={tecnologias} className="img-thumbnail rounded-circle mb-3" />
                            </div>
                            <div class="col-lg-4 col-sm-6">
                                <h4 className="font-weight-bold text-center my-3">Tecnologias</h4>
                                <h6 className="text-dark text-center">HTML5</h6>
                                <h6 className="text-dark text-center">CSS3</h6>
                                <h6 className="text-dark text-center">JavaScript</h6>
                                <h6 className="text-dark text-center">PHP</h6>
                                <h6 className="text-dark text-center">WordPress</h6>
                                <h6 className="text-dark text-center">MySQL</h6>
                            </div>
                            <div class="col-lg-4 col-sm-6">
                                <h4 className="font-weight-bold text-center my-3">frameworks y más</h4>
                                <h6 className="text-dark text-center">Bootstrap</h6>
                                <h6 className="text-dark text-center">React JS</h6>
                                <h6 className="text-dark text-center">Divi</h6>
                                <h6 className="text-dark text-center">Slider Revolution</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills