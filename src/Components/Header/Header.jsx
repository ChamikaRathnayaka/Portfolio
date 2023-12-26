import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./header.css";

export default function header() {
  return (
    <div >
      <Navbar expand="lg" className="navbar white-text">
        <Container>
          <Navbar.Brand className="white-text">
            PORTFOLIO
          </Navbar.Brand>
          
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto justify-content-center">
              <Nav.Link href="#home" className="white-text">
                Home
              </Nav.Link>
            </Nav>
            <Nav className="ms-auto">
              <button className="glow-on-hover" type="button">
                Git hub Profile
              </button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
