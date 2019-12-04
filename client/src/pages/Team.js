<<<<<<< HEAD
import React from 'react';
import "./../components/Team.css";
import {Jumbotron,Container} from "react-bootstrap"
import { CardDeck, Card} from "react-bootstrap";
export default function Home(){
=======
import React from "react";
import "./../Team.css";
import { Jumbotron, Container } from "react-bootstrap";
import { CardDeck, Card } from "react-bootstrap";
import Figure from "react-bootstrap/Figure";
>>>>>>> 71c8ef2c74e7e5155946e7d3f3dd3772cdb4fc52


<<<<<<< HEAD
<div>
    
    <Jumbotron fluid>
  <Container>
    <h1>Meet Our Team!</h1>
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
=======
export default function Home() {
  return (
    <div>
      <Jumbotron fluid>
        <Container jumbotron-fluid>
          <Figure>
            <Figure.Image
              width={350}
              height={350}
              alt="171x180"
              src="/img/bigbeer.png"
            />
            <Figure.Caption>
              We’re here, We’re beer, Get used to it !
            </Figure.Caption>
          </Figure>
        </Container>
      </Jumbotron>
>>>>>>> 71c8ef2c74e7e5155946e7d3f3dd3772cdb4fc52

      <CardDeck>
        <Card>
          <Card.Img variant="top" src="/img/Sam.jpg" />
          <Card.Body>
            <Card.Title>Samantha Covington</Card.Title>
            Hello! My name is Samantha Covington and I am a Full Stack Web
            Developer. I am proficient in Javascript, HTML, and MySQL. I am
            experienced in CSS, mongoDB, and React as well. Orignally, I am from
            a small town called Combine that is southeast of Dallas, TX . I have
            3 fur babies and 1 actual baby. I have a strong professional work
            ethic and will be dedicated to whatever task comes my way! Please
            contact with me on LinkedIn. I would love to connect with you!
          </Card.Body>
          <Card.Footer></Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="/img/ben.jpg" />
          <Card.Body>
            <Card.Title>Benjamin Lee</Card.Title>
            Hello. my name is Benjamin Lee I'm proficient in HTML, CSS, and
            Javascript with an understanding of node.js, jQuery, express,
            bootstrap, mySQL, mongoDB, and others. Skilled at working in groups,
            and a quick study. I would love to connect with you ! Head over to
            my LinkedIn page to learn more !
          </Card.Body>
          <Card.Footer></Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="/img/bishop.jpg" />
          <Card.Body>
            <Card.Title>Bishop Johnson</Card.Title>
            I'm a front-end designer & digital marketer based in Dallas, Texas.
            I enjoy crafting brand identities, social media accounts, & website
            design. I studied full-stack development at Southern Methodist
            University and have my B.A in Mass Communication from Stephen F.
            Austin State University I hope you find my portfolio interesting!
            Please scroll through my website to see some of my current projects!
          </Card.Body>
          <Card.Footer></Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="/img/Jelisa.JPG" />
          <Card.Body>
            <Card.Title>Jelisa Butler</Card.Title>
            Hi my name is Jelisa Butler, I am a front-end web developer based in
            Dallas, TX. I studied Full-Stack Web Development at Southern
            Methodist University. I am proficient in HTML, CSS and Javascript. I
            have experience in React, MySQL and monogoDB. I am highly organized,
            dedicated, driven professional with several years of experience in
            boosting organizational success by providing proactive support in
            executing and accomplishing a wide variety of duties in specified
            timelines and constraints. I would love to connect with you ! Please
            contact me on LinkedIn.
          </Card.Body>
          <Card.Footer></Card.Footer>
        </Card>
      </CardDeck>
    </div>
  );
}
