import React from 'react';
import {Navbar, Nav, Container} from "react-bootstrap";

export default function componentName() {
  return (
<Navbar bg="dark" variant="dark">
    <Container>

    <Navbar.Brand href="/">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/search">Find a brewery!</Nav.Link>
    </Nav>

    </Container>
  </Navbar>
  );
}
