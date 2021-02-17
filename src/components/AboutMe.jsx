import React from 'react'
import foto from '../assets/static/DSC04868.jpg'
import '../assets/styles/AboutMe.css'

const AboutMe = () => {
    return (
        <>
            <section id="about" class="animado" >
                <div id="about__container" className="container-fluid shadow bg-body border h-100">
                    <div className="row pt-4 border border-bottom-3">
                        <div className="col-12 p-4">
                            <h3 id="section__container--s1" className="font-weight-bold ml-4 float-left mr-2">Acerca </h3>
                            <h3 id="section__container--s2" className="font-weight-bold ml-4">de mí</h3>
                        </div>
                    </div>
                    <div className="row p-5">
                        <div className="col-lg-4 col-sm-12 p-4 border d-flex flex-column align-items-center">
                            <img id="foto" src={foto} className="img-thumbnail rounded-circle mb-3 w-50" />
                            <h4 id="about__container--name" className="font-weight-bold text-center">Kevin Javier Castillo Hernández</h4>
                            <h5 id="about__container--title" className="font-weight-bold text-center mt-2">Frontend Web Developer</h5>
                        </div>
                        <div className="col-lg-8 col-sm-12 p-4 border d-flex flex-column align-items-center">
                            <p className="">Soy estudiante en la Universidad Don Bosco
                            de El Salvador, estoy cursando mi quinto año de Ingeniería en Ciencias
                            de la Computación, he obtenido una certificación de Desarrollo FullStack
                            con JavaScript por parte de la Secretaría de Innovación de la Presidencia
                            de la República de El Salvador y Platzi.
                                    </p>
                            <p className="">Durante los últimos 4 meses del año 2020
                            realice mis prácticas profesionales y capacitación como Desarrollador
                                    Web dentro de la empresa <a id="enlace" target="_blank" href="https://orbitweb.ca/">OrbitWeb Inc</a>.
                                    En la que actualmente estoy trabajando, mis funciones dentro de la empresa son el
                                    desarrollo web y apoyo en marketing digital.
                                    </p>
                            <p className="">Mi principal pasión es el desarrollo web,
                            tengo conocimientos en HTML5, CSS3, JavaScript, React JS, PHP, WordPress,
                            MySQL y también diferentes temas y frameworks de estos mismos.
                                    </p>
                            <a href="https://drive.google.com/file/d/1jUUvkKgQ3gZ0OxGUKy26x4mDqA5pgRtE/view?usp=sharing" class="btn px-4 py-1" id="button_a" role="button" target="_blank" data-bs-toggle="button">CV</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutMe