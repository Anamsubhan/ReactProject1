import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import index from 'assert'

import React from 'react'

export default function NavigationBar() {
    return (
        <>
        
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Link className='navbar-brand' to="/">React-Project</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto fw-bold">
            
            <Link className="nav-link me-5" to="/">Home</Link>
            <Link className="nav-link me-5" to="About">About</Link>
            <Link className="nav-link me-5" to="Products">Products</Link>
            <Link className="nav-link me-5" to="categoriesSection">Categories</Link>
            <Link className="btn btn-dark ms-4" to="Login">Login</Link>
            <Link className="btn btn-dark ms-4" to="SignUp">SignUp</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
             
        </>
    )
}

