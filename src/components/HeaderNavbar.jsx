import PropTypes from 'prop-types';
import React from "react";
import { Link, Redirect } from "react-router-dom";
import {Nav, NavDropdown, Navbar} from "react-bootstrap";
import { Dropdown } from 'semantic-ui-react';

function HeaderNavbar() {

  return (
    <Navbar id="navbar-bg" collapseOnSelect expand="lg">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="row container-fluid navbar-center">
          <div className="col" />
          <div className="col">
            <Nav.Link as={Link} to="/home">Startseite</Nav.Link>
          </div>
          <div className="col service-portrait">
            <Nav.Link as={Link} to="/services">Leistungen</Nav.Link>
          </div>
          <Nav.Link as={Link} to="/services" className="col service-landscape">
            <Dropdown as={Link} to="/services" id="dropdown-text" text="Leistungen" simple item>
              <Dropdown.Menu>
                <Dropdown.Item as={Link} to="/services" text="Übersicht" />
                <Dropdown.Item as={Link} to="/leistung1" text="Mutter-Kind-Pass"  />
                <Dropdown.Item as={Link} to="/leistung2" text="Schwangerenvorsorge"  />
                <Dropdown.Item as={Link} to="/leistung3" text="Geburtsvorbereitungskurs"  />
                <Dropdown.Item as={Link} to="/leistung4" text="Wochenbett-Betreuung"  />
              </Dropdown.Menu>
            </Dropdown>
          </Nav.Link>
          <div className="col">
            <Nav.Link as={Link} to="/aboutMe">Über mich</Nav.Link>
          </div>
          <div className="col">
            <Nav.Link as={Link} to="/contact">Kontakt</Nav.Link>
          </div>
          <div className="col" />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default HeaderNavbar;
