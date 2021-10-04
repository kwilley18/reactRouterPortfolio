import React , { useEffect, useState }from "react";
import { Link, useLocation } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './images/logo2.png'; 
import { FiMenu, FiX } from 'react-icons/fi';
//import { bar}from '../App'


function Header(){
  const location = useLocation(); 
 // const bar = bar(); 
  const [open, setOpen] = useState(false);


  return(
    
    <nav class="navbar navbar-expand-lg navbar-expand-md">
      <div class="container-fluid">
   
  
      <div  onClick={() => setOpen(!open)} className="nav-icon" id="navbarNav" > {open ? <FiX /> : <FiMenu />}</div>

      
        <ul class="navbar-nav" className={open ? 'nav-links active': 'nav-links'}>
        <a class="navbar-brand" href="/">  <img src={logo} width="30" height="24" class="d-inline-block align-text-top responsive"/></a>

          <li class="nav-item">

            <Link to="/" className={location.pathname ==="/" ? "nav-link active" : "nav-link"}  onClick={() => setOpen(false)}> Home</Link>
          </li>      
      
          <li class="nav-item">
            <Link to="/projectgallery" className={location.pathname ==="/projectgallery" ? "nav-link" : "nav-link"} onClick={() => setOpen(false)}> Project Gallery </Link>
          </li>          
          <li class="nav-item">
            <Link to="/contact" className={location.pathname ==="/contact" ? "nav-link" : "nav-link"} onClick={() => setOpen(false)}> Contact </Link>
          </li>
        </ul>
      </div>
      
    </nav>
  // <nav className="navbar navbar-expand-lg navbar-dark " style="background-color: black;">
      //
      //class="collapse navbar-collapse navbar-expand-lg"<div className="collapse navbar-collapse navbar-expand-lg">
       /* <ul className="nav">
              <li className="nav-item">
                  <Link to="/" className={location.pathname ==="/" ? "nav-link active" : "nav-link"}> Home</Link>
              </li>
              <li className="nav-item">
                  <Link to="/Contact" className={location.pathname ==="/" ? "nav-link" : "nav-link"}> Contact </Link>
              </li>
          </ul>*/ 
     //</div>
//</nav>
/*<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
<span class="navbar-toggler-icon"></span>
</button>/*
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Disabled</a>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>*/ 

 
  ); 


}



export default Header; 