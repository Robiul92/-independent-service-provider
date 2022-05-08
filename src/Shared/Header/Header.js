import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../Images/logo-homefoodi.png'

const Header = () => {
    return (
        <>
  <Navbar collapseOnSelect expand="lg" bg="light" variant="light" sticky="top">
  <Container>
  <Navbar.Brand as={Link} to="/">
    <img height={30} src={logo} alt="" />
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="justify-content-end flex-grow-1">
    
      <Nav.Link href="home#services">Services</Nav.Link>
      <Nav.Link  href="home#safety">Safety Standards</Nav.Link>
      <Nav.Link as={Link} to="blog">Blog</Nav.Link>
      
    </Nav>
    <Nav className='me-auto'>
      <Nav.Link as={Link} to="about">About</Nav.Link>
      <Nav.Link as={Link} to="login">
        Login
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
  
  </>
    );
};

export default Header;