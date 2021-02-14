import React from 'react'
import foto from '../assets/static/DSC04868.jpg'
import '../assets/styles/AboutMe.css'

const AboutMe = () => {
    return (
        <>
        <div className="container border border-primary mt-5 h-100">
            <div className="row">
                <div className="col-lg-4 col-sm-12 p-4">
                    <img id="foto" src={foto} className="img-thumbnail rounded-circle mb-3 w-75" />
                    <h4 className="font-weight-bold">Kevin Javier Castillo Hernandez</h4>
                    <h5 className="font-weight-bold">Frontend Web Developer</h5>
                </div>
                <div className="col-lg-8 col-sm-12 p-4">
                    <div className="row h-50">
                        <div className="col-lg-6 col-sm-12">
                        p
                        </div>
                        <div className="col-lg-6 col-sm-12">
p
                        </div>
                    </div>
                    <div className="row h-50">
                        <div className="col-lg-6 col-sm-12">
p
                        </div>
                        <div className="col-lg-6 col-sm-12">
p
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default AboutMe