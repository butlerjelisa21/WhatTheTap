import React from 'react';
import "/Users/benjaminlee/WhatTheTap/client/src/Team.css";
import {Jumbotron,Container} from "react-bootstrap"
import { CardDeck, Card} from "react-bootstrap";
export default function Home(){

    return(

<div>
    
    <Jumbotron fluid>
  <Container>
    <h1>Meet Our Team !</h1>
   </Container>
</Jumbotron>




<CardDeck>
  <Card>
    <Card.Img variant="top" src="/img/Sam.jpg" />
    <Card.Body>
      <Card.Title>Samantha Covington</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <div class="icon-bar">
        <a href="#" class="linkedin"><i class="fa fa-linkedin"></i></a>
          </div>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="/img/ben.jpg"/>
    <Card.Body>
      <Card.Title>Benjamin Lee</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <div class="icon-bar">
        <a href="#" class="linkedin"><i class="fa fa-linkedin"></i></a>
          </div>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="/img/bishop.jpg" />
    <Card.Body>
      <Card.Title>Bishop Johnson</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <div class="icon-bar">
        <a href="#" class="linkedin"><i class="fa fa-linkedin"></i></a>
          </div>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="/img/Jelisa.jpg" />
    <Card.Body>
      <Card.Title>Jelisa Butler</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
        <div class="icon-bar">
        <a href="#" class="linkedin"><i class="fa fa-linkedin"></i></a>
          </div>
    </Card.Footer>
  </Card>
</CardDeck>

</div>

)}

