import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
        <nav class="navbar navbar-expand-lg bg-warning" style={{width:'100%',top:'0',position:'fixed',zIndex:'1000', overflow:'hidden'}}>
  <div class="container-fluid">
    <Link class="navbar-brand fw-bold" to={'/'}>BUILDIFY</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
      <li class="nav-item">
          <a class="nav-link me-4 active fw-bold" href='#home'>Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link me-4 active fw-bold" href="#aboutus">About Us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link me-4 active fw-bold" href="#ourmaterials">Our Materials</a>
        </li>
        <li class="nav-item">
          <a class="nav-link me-4 active fw-bold" href='#makeorder'>Orders</a>
        </li>
        <li class="nav-item me-4 ">
          <a class="nav-link active fw-bold"href='#orderdetails' >Order Details</a>
        </li>
        
      </ul>
      
    </div>
  </div>
</nav>

    </>
  )
}

export default Header