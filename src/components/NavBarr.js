import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

export const Navbarr = () => {
  return (
    <div className="nav-bar">
      <Navbar className="nav-container" collapseOnSelect expand="lg" bg="dark">
        <Navbar.Brand href="/">Covid - 119</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/search">Search</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/updates">Daily Updates</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Precautions</Nav.Link>
            <Nav.Link eventKey={2} href="/about">
              About
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};
