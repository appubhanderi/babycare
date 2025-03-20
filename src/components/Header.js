import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { FaPhoneAlt } from "react-icons/fa";
import '../styles/Header.css';

export default function Header() {
  const location = useLocation();

  return (
    <Navbar collapseOnSelect expand="lg" className="header-navbar sticky-top">
      <Container>
        <Navbar.Brand>
          <Link to="/" className="navbar-brand">
            <span className="fs-1 baby-text">Baby</span>
            <span className="fs-1 care-text">Care</span>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto">
            <Link
              className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
              to="/"
            >
              Home
            </Link>
            <Link
              className={`nav-link ${location.pathname === '/About' ? 'active' : ''}`}
              to="/About"
            >
              About
            </Link>
            <Link
              className={`nav-link ${location.pathname === '/Services' ? 'active' : ''}`}
              to="/Services"
            >
              Services
            </Link>
            <Link
              className={`nav-link ${location.pathname === '/Programs' ? 'active' : ''}`}
              to="/Programs"
            >
              Programs
            </Link>
            <Link
              className={`nav-link ${location.pathname === '/Events' ? 'active' : ''}`}
              to="/Events"
            >
              Events
            </Link>
            <Link
              className={`nav-link ${location.pathname === '/Contacts' ? 'active' : ''}`}
              to="/Contacts"
            >
              Contacts
            </Link>
          </Nav>
          <Nav>
            <Link
              to="/Contacts"
              className="nav-link phone-number"
            >
              <FaPhoneAlt />+91 9374815450
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
