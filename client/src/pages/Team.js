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
      Hello! My name is Samantha Covington and I am a Full Stack Web Developer. I am proficient in Javascript, HTML, and MySQL. I am experienced in CSS, mongoDB, and React as well. Orignally, I am from a small town called Combine that is southeast of Dallas, TX . I have 3 fur babies and 1 actual baby. I have a strong professional work ethic and will be dedicated to whatever task comes my way! Please contact with me on LinkedIn. I would love to connect with you!


    </Card.Body>
    <Card.Footer>
    
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="/img/ben.jpg"/>
    <Card.Body>
      <Card.Title>Benjamin Lee</Card.Title>
      I'm proficient in HTML, CSS, and Javascript with an understanding of node.js, jQuery, express, bootstrap, mySQL, mongoDB, and others. Skilled at working in groups, and a quick study.
    </Card.Body>
    <Card.Footer>
    
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="/img/bishop.jpg" />
    <Card.Body>
      <Card.Title>Bishop Johnson</Card.Title>
  
    </Card.Body>
    <Card.Footer>
   
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="/img/Jelisa.JPG" />
    <Card.Body>
      <Card.Title>Jelisa Butler</Card.Title>
      Highly organized, dedicated, driven professional with several years of experience in boosting organizational success by providing proactive support in executing and accomplishing a wide variety of duties in specified timelines and constraints. Diligent and highly skilled with a broad understanding of effective marketing strategies and best business practices. Strong communication and interpersonal skills with ability to convey messages effectively to all organizational levels.
    </Card.Body>
    <Card.Footer>
     
    </Card.Footer>
  </Card>
</CardDeck>

</div>

)}

