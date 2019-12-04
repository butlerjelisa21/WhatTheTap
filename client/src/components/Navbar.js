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
    <Nav className="d-flex w-100" style={{justifyContent: "space-between"}}>
      <div style={{display: "flex"}}>
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/search">Find a brewery!</Nav.Link>
      <Nav.Link href="/Team">Meet The Team</Nav.Link>
      <Nav.Link href="/login">Login/Sign Up</Nav.Link>
      </div>
      
      <img src="img/apple.png" alt="wtp logo" class="img-responsive" style={{ height: "40px", width: "150px", justifyContent: "right",

 }} />



    </Nav>

    </Container>
  </Navbar>
  );
}
