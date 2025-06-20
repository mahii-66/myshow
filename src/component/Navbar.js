import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css';
// import { FaGooglePlay } from "react-icons/fa";
import { IoMdPlay } from "react-icons/io";

const Navbar=()=> {
  return (
     
    <nav class="navbar navbar-expand-lg bg-white  ">
  <div class="container-fluid  ">
   
    <Link class="navbar-brand" to="#"><h4 style={{fontWeight:'bold'}}><IoMdPlay  style={{color:'black',fontSize:32}}/>MyShowz</h4></Link>
    
    {/* <FaGooglePlay style={{color:'red',}}/> */}
    <button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse " id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
        <li class="nav-item ">
          <Link style={{color:' rgb(206, 22, 53)'}} class="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to='/Movies'>Movies</Link>
        </li> <li class="nav-item">
          <Link class="nav-link" to="/About">About</Link>
        </li> 
        <li class="nav-item">
          <Link class="nav-link" to="/Contact">Contact</Link>
        </li> 
      </ul>

      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

  )
}

export default Navbar





