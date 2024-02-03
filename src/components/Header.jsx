import React from "react";
import { NavLink } from "react-router-dom";
import Headimage from "../../public/MAROON.png"
import profile from '../../public/man.svg'
import savat from '../../public/savat.svg'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  return 
  <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
  <Container>
    <Navbar.Brand><NavLink to="/"> <img src={Headimage} alt="" /></NavLink></Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mc-auto">
      <NavLink to="catalog" >Каталог</NavLink>
    <NavLink to="onas">О нас</NavLink>
    <NavLink >Контакты</NavLink>
    <NavLink to="profile"><img src={profile} alt="" /></NavLink>
    <NavLink to="catalog"><img src={savat} alt="" /></NavLink>
       
      </Nav>
      {/* <Nav>
        <Nav.Link href="#deets">More deets</Nav.Link>
        <Nav.Link eventKey={2} href="#memes">
          Dank memes
        </Nav.Link>
      </Nav> */}
    </Navbar.Collapse>
  </Container>
</Navbar>
  
  
  
  
  
  
  
  
  
  // <Header className="Header">
  //   
    // <NavLink to="catalog" >Каталог</NavLink>
    // <NavLink to="onas">О нас</NavLink>
    // <NavLink >Контакты</NavLink>
    // <NavLink to="profile"><img src={} alt="" /></NavLink>
    // <NavLink to="catalog"><img src={} alt="" /></NavLink>
  // </Header>;
};

export default Header;
