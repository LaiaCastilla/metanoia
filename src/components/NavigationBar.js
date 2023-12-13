import React from "react";
// import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../logo.svg";
import "../styles/stylesComponents/NavigationBar.scss";

function NavigationBar() {
  return (
    <div className="NavigationBar">
      <Navbar expand="lg">
        {/* <Container> */}
        <Navbar.Brand href="#home">
          <img
            src={logo}
            alt="Metanoia logo"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          Metanoia Therapy
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        {/* To center the options in smaller devices */}
        <Navbar.Collapse id="basic-navbar-nav" align="center">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className="active">
              Accueil
            </Nav.Link>
            <Nav.Link href="#about">À propos</Nav.Link>
            <NavDropdown
              title="Soins"
              id="dropdown-menu-align-end"
              className="drop-left"
              align="end"
            >
              <NavDropdown.Item href="#action/3.1">
                Hypnothérapie
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Reiki</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        {/* </Container> */}
      </Navbar>
    </div>
  );
}

export default NavigationBar;
