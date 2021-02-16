import React from 'react';
import './assets/styles/App.css'
import Menu from './components/Menu'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
    return (
        <>
            <Menu />
            <AboutMe />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
        </>
    )
}

export default App