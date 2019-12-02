import React from 'react';
import "/Users/Juice/Desktop/Homework/WhatTheTap/client/src/Team.css";
import {Jumbotron,Container} from "react-bootstrap"
import { CardDeck, Card} from "react-bootstrap";

export default function Home(){

    return(

<div>
    
    <Jumbotron fluid >
  <Container jumbotron-fluid >
    <h1>Meet Our Team !</h1>
   </Container>
</Jumbotron>




<CardDeck>
  <Card>
    <Card.Img variant="top" src="/img/Sam.jpg" />
    <Card.Body>
      <Card.Title>Samantha Covington</Card.Title>
     
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
  
    </Card.Body>
    <Card.Footer>
    <div class="icon-bar">
        <a href="#" class="linkedin"><i class="fa fa-linkedin"></i></a>
          </div>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="/img/Jelisa.JPG" />
    <Card.Body>
      <Card.Title>Jelisa Butler</Card.Title>
   
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

