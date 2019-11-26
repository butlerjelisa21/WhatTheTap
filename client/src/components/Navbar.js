import React from 'react';
import {Navbar, Nav, Container} from "react-bootstrap";

export default function componentName() {
  return (
<Navbar bg="dark" variant="dark">
    <Container>
    <img
        src="img/mapped.png"
        width="60"
        height="60"
        className="d-inline-block align-top"
        alt="Nav image"
      />
    <Navbar.Brand href="/">Welcome</Navbar.Brand>
    <Nav className="mr-auto">
    
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/search">Find a brewery!</Nav.Link>
      <Nav.Link href="/Team">Meet The Team</Nav.Link>
      <Nav.Link href="/api/userEmail">Login/Sign Up</Nav.Link>


    </Nav>

    </Container>
  </Navbar>
  );
}
