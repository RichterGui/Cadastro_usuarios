import './App.css'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import {BrowserRouter} from 'react-router-dom'

import Routes from './Routes'
import Logo from '../components/templates/Logo'
import Nav from '../components/templates/Nav'
import Footer from '../components/templates/Footer'



function App() {
    return (
      <BrowserRouter>
      <div className="app">
          <Logo />
          <Nav></Nav>
         <Routes />
          <Footer></Footer>
      </div>
      </BrowserRouter>
    );
  }
  
  export default App;
  