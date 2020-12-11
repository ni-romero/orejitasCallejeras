/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import About from "./about"
import Header from "./header"
import "./layout.css"
import about from "./about"
import  'bootstrap/dist/css/bootstrap.min.css' ;


const Layout = () => {


  return (
    <>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#">Orejitas Callejeras</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Sobre Nosotros</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Contacto</a>
          <a class="dropdown-item" href="#">Donaciones</a>
         
        </div>
      </li>
    </ul>
  
  </div>
</nav>




    <div className="padre"></div>
    <div className="portada">
    <h1 className="tituloportada mt-5 p-5">Aspiramos a un Refugio y necesitamos hogares de tránsito”
     ayúdennos, <br></br> 
    Orejitascallejeras somos todos</h1>
    </div>
    <About/>

 

 
    </>
  )
}



export default Layout
