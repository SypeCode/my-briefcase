import React from 'react'
import '../assets/styles/Contact.css'
import ubicacion from '../assets/static/ubicacion.png'
import gmail from '../assets/static/gmail.png'
import wp from '../assets/static/whatsapp.png'
import github from '../assets/static/github.png'
import linkedin from '../assets/static/linkedin.png'

const Contact = () => {
    return (
        <>
            <section id="contact" className="animado" >
                <div id="contact__container" className="container-fluid shadow bg-body border h-100">
                    <div className="row pt-4 border border-bottom-3">
                        <div className="col-12 p-4">
                            <h3 id="section__container--s1" className="font-weight-bold ml-4 float-left mr-2">Contacto </h3>
                        </div>
                    </div>
                    <div className="row p-5">
                        <div className="col-lg-4 col-sm-6 p-4 border">
                            <h5 className="mb-3">Ubicación:</h5>
                            <img src={ubicacion} id="icon" className="img-fluid float-left mr-2" /><p>San Salvador, El Salvador</p>
                            <h5 className="mb-3 mt-5">Teléfono:</h5>
                            <img src={wp} id="icon" className="img-fluid float-left mr-2" /><p>+503 72079915</p>
                            {/* <h5>Envíame un correo</h5>
                            <form className="form mt-4">
                                <div className="input-group mb-3 w-100">
                                    <span className="input-group-text">Nombre</span>
                                    <input type="text" className="form-control" id="name" placeholder="Nombre" />
                                </div>
                                <div className="input-group mb-3 w-100">
                                    <span className="input-group-text">Email</span>
                                    <input type="email" className="form-control" id="email" placeholder="Email" />
                                </div>
                                <div className="input-group mb-3 w-100">
                                    <span className="input-group-text">Asunto</span>
                                    <input type="text" className="form-control" id="asunto" placeholder="Asunto" />
                                </div>
                                <div className="input-group mb-3 w-100">
                                    <span className="input-group-text">Asunto</span>
                                    <textarea className="form-control"></textarea>
                                </div>
                                <div className="input-group">
                                    <input type="submit" className="form-control" id="submit" value="Enviar" />
                                </div>
                            </form> */}
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 p-4 border font-weight-bold">
                            <h5 className="mb-3">Email:</h5>
                            <p id="contact__email">Profesional:</p>
                            <img src={gmail} id="icon" className="img-fluid float-left mr-2" /><p>kevincastillo.jh@gmail.com</p>
                            <p id="contact__email">Personal:</p>
                            <img src={gmail} id="icon" className="img-fluid float-left mr-2" /><p>sypecr@gmail.com</p>
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12 p-4 border font-weight-bold">
                            <h5 className="mb-3">Redes Sociales:</h5>
                            <a id="enlace_title" target="_blank" href="https://github.com/kevCastillo19"><img src={github} id="icon__rs" className="img-fluid float-left mr-2" /></a>
                            <a id="enlace_title" target="_blank" href="https://www.linkedin.com/in/kevcastillo/"><img src={linkedin} id="icon__rs" className="img-fluid float-left mr-2" /></a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact