import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Logo from "../assets/kurveslogo.png";
import { NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/nav.css";

const Appbar = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      data-bs-theme="dark"
      className="nav-bar"
    >
      <Container>
        <Navbar.Brand href="/">
          <img
            src={Logo}
            width="80"
            height="50"
            className="d-inline-block align-top"
            alt="Kurves Kare logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className="nav-links">
              <Link style={{ textDecoration: "none" }} to="/">
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link style={{ textDecoration: "none" }} to="/about-us">
                About Us
              </Link>
            </Nav.Link>
            <NavDropdown title="Services" id="basic-nav-dropdown">
              <NavDropdown.Item>
                <Link
                  style={{ textDecoration: "none" }}
                  to="/services/home-care"
                >
                  Home Care Assistance
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link
                  style={{ textDecoration: "none" }}
                  to="/services/special-treatment"
                >
                  Specialized Terminal Care
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link style={{ textDecoration: "none" }} to="/services/health">
                  Health Consultancy
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link
                  style={{ textDecoration: "none" }}
                  to="/services/pharmacy"
                >
                  Our Own Pharmacy
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link>
              <Link style={{ textDecoration: "none" }} to="/contact-us">
                Contact Us
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Appbar;
