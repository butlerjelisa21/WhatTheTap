import React from 'react';
import {Jumbotron, Button} from "react-bootstrap";
export default function componentName() {
  return (
<Jumbotron>
  <h1>404!!</h1>
  <p>
    This page was not found!
  </p>
  <p>
    <Button type="link" href="/" variant="primary">Go Home</Button>
  </p>
</Jumbotron>
  );
}
