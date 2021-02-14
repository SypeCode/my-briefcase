import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'
import AboutMe from '../components/AboutMe'
import Skills from '../components/Skills'

const App = () => (
    <BrowserRouter>
        <Route exact path="/" component={AboutMe} />
        <Route exact path="/Skills" component={Skills} />
    </BrowserRouter>
)

export default App