import React from 'react'
import '../assets/styles/Contact.css'

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
                        <div className="col-lg-6 col-sm-12 p-4 border d-flex flex-column align-items-center">
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 p-4 border font-weight-bold">
                            <h5>Ubicación:</h5>
                            <p>San Salvador, El Salvador</p>
                            <h5 className="mt-5">Email:</h5>
                            <p id="email">Profesional:</p>
                            <p>kevincastillo.jh@gmail.com</p>
                            <p id="email">Personal:</p>
                            <p>sypecr@gmail.com</p>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 p-4 border font-weight-bold">
                            <h5>Teléfono:</h5>
                            <p>+503 72079915</p>
                            <h5 className="mt-5">Redes Sociales:</h5>
                            <p>kevincastillo.jh@gmail.com</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact