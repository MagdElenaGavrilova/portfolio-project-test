import React from 'react';
import logo from "../TTlogo.png"
// REACT FONTAWESOME IMPORTS 

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {
    return (
    
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
<div className="container d-flex flex-row-reverse">

  <a className="navbar-brand" href="#"><img className="logo" src={logo} alt="logo"/> <span-logo><span>T</span>wins TRVL</span-logo></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <FontAwesomeIcon icon={ faBars} style={{color: "white"}}/>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home | </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">About Us |</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#"> Gallery |</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#"> Projects |</a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="#"> Contact </a>
        </li>
      
    </ul>
</div>
 
  </div>
</nav>
       
    )
}
