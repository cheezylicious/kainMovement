import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
  .bar {
    position: fixed;
    background-color: white;
    width: 100%;
  }
`;

export const NavigationBar = () => (
  <Styles>
    <Navbar expand="lg" className="bar">
      <Navbar.Brand href="/">
        <img src="../kainMovementLogo.jpg" width="40" height="40" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto" width="50%">
          <Nav.Item>
            <Nav.Link href="/shop">Shop</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/story">Our Story</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/mission">Mission</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/services">Services</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
);
