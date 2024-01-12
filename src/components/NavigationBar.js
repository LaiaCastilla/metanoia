import React from "react";
// import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
// import logo from "../logo.svg";
import metanoialogo from "../metanoia.svg";
import "../styles/stylesComponents/NavigationBar.scss";

function NavigationBar(props) {
  function toHome(event) {
    event.preventDefault();
    props.setPage("home");
  }

  function toAbout(event) {
    event.preventDefault();
    props.setPage("about");
  }

  function toHypno(event) {
    event.preventDefault();
    props.setPage("hypno");
  }

  function toReiki(event) {
    event.preventDefault();
    props.setPage("reiki");
  }

  return (
    <div className="NavigationBar">
      <Navbar expand="lg">
        {/* <Container> */}
        <Navbar.Brand href="#home" onClick={toHome}>
          <img
            src={metanoialogo}
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
            <Nav.Link
              href="#home"
              onClick={toHome}
              className={props.page === "home" ? "active" : null}
            >
              Accueil
            </Nav.Link>
            <Nav.Link
              href="#about"
              onClick={toAbout}
              className={props.page === "about" ? "active" : null}
            >
              À propos
            </Nav.Link>
            <NavDropdown
              title="Soins"
              id="dropdown-menu-align-end"
              className="drop-left"
              align="end"
            >
              <NavDropdown.Item
                href="#action/3.1"
                onClick={toHypno}
                className={props.page === "hypno" ? "active" : null}
              >
                Hypnothérapie
              </NavDropdown.Item>
              <NavDropdown.Item
                href="#action/3.2"
                onClick={toReiki}
                className={props.page === "reiki" ? "active" : null}
              >
                Reiki
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        {/* </Container> */}
      </Navbar>
    </div>
  );
}

export default NavigationBar;
