import React from 'react'
import '../assets/styles/Contact.css'

const Contact = () => {
    return (
        <section id="contact">
            <div id="contact__container" className="container-fluid shadow bg-body rounded h-100">
                <div className="row p-4">
                    <div className="col-lg-4 col-sm-12 p-4 d-flex flex-column align-items-center">
                        <h4 className="font-weight-bold text-center mb-5">Dirección</h4>
                        <h6 className="text-dark">Español - Nativo</h6>
                        <h6 className="text-dark">Ingles - Básico</h6>
                    </div>
                    <div className="col-lg-4 col-sm-12 p-4 d-flex flex-column align-items-center">
                        <h4 className="font-weight-bold text-center mb-5">Contactos</h4>
                        <h6 className="text-dark">Español - Nativo</h6>
                        <h6 className="text-dark">Ingles - Básico</h6>
                    </div>
                    <div className="col-lg-4 col-sm-12 p-4 d-flex flex-column align-items-center">
                        <h4 className="font-weight-bold text-center mb-5">Redes Sociales</h4>
                        <h6 className="text-dark">HTML5 - Intermedio</h6>
                        <h6 className="text-dark">CSS3 - Intermedio</h6>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact