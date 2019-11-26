import React from "react";
import { Container, Row, Col } from "react-bootstrap";
export default function Home() {

  return (
    <div>
      <section id="banner">
        <div class="icon-bar">
          <a href="#" class="facebook"><i class="fa fa-facebook"></i></a>
          <a href="#" class="twitter"><i class="fa fa-twitter"></i></a>
          <a href="#" class="google"><i class="fa fa-google"></i></a>
          <a href="#" class="linkedin"><i class="fa fa-linkedin"></i></a>
          <a href="#" class="youtube"><i class="fa fa-youtube"></i></a>
        </div>
      
        
        <img
          src="img/award.png"
          alt="award logo"
          class="img-responsive"
          style={{ height: "150px", width: "250px" }}
        />
        <img
          src="img/bestapp.png"
          alt="best app"
          class="img-responsive"
          style={{ height: "160px", width: "250px" }}
        />
      </section>
      
      <section id="event">
        <div class="bg-color" class="section-padding">
          <div class="container">
            <div class="row">
              <div class="col-xs-12 text-center" style={{ padding: "20" }}>
                <h1 class="header-h"></h1>
              </div>
              <div class="col-md-12" style={{ paddingBottom: "20" }}>

               
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="about" class="section-padding">
        <div class="container">
          <div class="row">
            
            <div class="col-md-1"></div>
            <div class="col-md-10">
              <div class="col-md-6 col-sm-6">
              <div class="content-holder">

                      <h2>About our App</h2>
                      <p>
                        Three Dog Pint is an app dedicated to making the beer experience...easier. Our concept is simple yet effective. Search by your location to pull in local bars and breweries in your area! We also have our breweries of the month listed on our page to help point you in the right direction. Tried a beer on our list that you liked? Great, our app has a function to leave a review for the world to see. Now get out there and go drink some beers champ.
                      </p>
                      <address>
                        <strong>Next Brewery Meet and Greet: </strong>
                        1612 Collins Str, Dallas 75214
                        <br />
                        <strong>Time: </strong>
                        07:30pm
                      </address>
                      <a
                        class="btn btn-imfo btn-read-more"
                        href="events-details.html"
                      >
                        Read more
                      </a>
                    </div>
              </div>
              <div class="col-md-6 col-sm-6">
                <img src="img/pour.jpg" alt="" class="img-responsive" />
              </div>
            </div>
            <div class="col-md-1"></div>
          </div>
        </div>
      </section>

      <section id="event">
        <div class="bg-color" class="section-padding">
          <div class="container">
            <div class="row">
              <div class="col-xs-12 text-center" style={{ padding: "20" }}>
                <h1 class="header-h"></h1>
              </div>
              <div class="col-md-12" style={{ paddingBottom: "20" }}>

                <div class="item active left">

                  <div class="col-md-6 col-sm-6 details-text">
                    <div class="content-holder" id="secondapp">
                      <h2>About our App</h2>
                      <p>
                        Three Dog Pint is an app dedicated to making the beer experience...easier. Our concept is simple yet effective. Search by your location to pull in local bars and breweries in your area! We also have our breweries of the month listed on our page to help point you in the right direction. Tried a beer on our list that you liked? Great, our app has a function to leave a review for the world to see. Now get out there and go drink some beers champ.
                      </p>
                      <address>
                        <strong>Next Brewery Meet and Greet: </strong>
                        1612 Collins Str, Dallas 75214
                        <br />
                        <strong>Time: </strong>
                        07:30pm
                      </address>
                      <a
                        class="btn btn-imfo btn-read-more"
                        href="events-details.html"
                      >
                        Read more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="menu-list" class="section-padding">
        <div class="container">
          <div class="row">
            <div class="col-md-12 text-center marb-35">
              <h1 class="header-h">Top Brewery's of the Month</h1>
              <div class="award">
                <Container>
                  <Row>
                    <Col>
                      {" "}
                      <img
                        src="img/logos.png"
                        alt="award logo"
                        class="img-responsive"
                        style={{ height: "100px", width: "200" }}
                      />
                    </Col>
                    <Col>
                      {" "}
                      <img
                        src="img/gran.png"
                        alt="award logo"
                        class="img-responsive"
                        style={{ height: "100px", width: "100px" }}
                      />
                    </Col>
                    <Col>
                      {" "}
                      <img
                        src="img/sol.png"
                        alt="award logo"
                        class="img-responsive"
                        style={{ height: "100px", width: "100px" }}
                      />
                    </Col>
                    <Col>
                      {" "}
                      <img
                        src="img/revolve.png"
                        alt="award logo"
                        class="img-responsive"
                        style={{ height: "100px", width: "100px" }}
                      />
                    </Col>
                    <Col>
                      {" "}
                      <img
                        src="img/deep.png"
                        alt="deep ellum"
                        class="img-responsive"
                        style={{ height: "100px", width: "100px" }}
                      />
                    </Col>
                    <Col>
                      {" "}
                      <img
                        src="img/trim.png"
                        alt="trim tab brewery"
                        class="img-responsive"
                        style={{ height: "100px", width: "100px" }}
                      />
                    </Col>
                    <Col>
                      {" "}
                      <img
                        src="img/nac.png"
                        alt="trim tab brewery"
                        class="img-responsive"
                        style={{ height: "100px", width: "100px" }}
                      />
                    </Col>
                  </Row>
                </Container>
              </div>
              <br />
            </div>
            <div class="col-md-12  text-center" id="menu-flters">
              <ul>
                <li>
                  <a class="filter active" data-filter=".menu-restaurant">
                    <strong><i>Beer</i></strong>
                  </a>
                </li>
              </ul>
            </div>

            <div id="menu-wrapper">
              <div class="breakfast menu-restaurant">
                <span class="clearfix">
                  <a
                    class="menu-title"
                    href="#"
                    data-meal-img="assets/img/restaurant/rib.jpg"
                  >
                    Beer List
                  </a>
                  <span
                    style={{ left: "166px", right: "44px" }}
                    class="menu-line"
                  ></span>
                  <span class="menu-price">$20.99</span>
                </span>
                <span class="menu-subtitle">
                  Neque porro quisquam est qui dolorem
                </span>
              </div>

              <div class="breakfast menu-restaurant">
                <span class="clearfix">
                  <a
                    class="menu-title"
                    href="#"
                    data-meal-img="assets/img/restaurant/rib.jpg"
                  >
                    Food Item Name
                  </a>
                  <span
                    style={{ left: "166px", right: "44px" }}
                    class="menu-line"
                  ></span>
                  <span class="menu-price">$20.99</span>
                </span>
                <span class="menu-subtitle">
                  Neque porro quisquam est qui dolorem
                </span>
              </div>

              <div class="breakfast menu-restaurant">
                <span class="clearfix">
                  <a
                    class="menu-title"
                    href="#"
                    data-meal-img="assets/img/restaurant/rib.jpg"
                  >
                    Food Item Name
                  </a>
                  <span
                    style={{ left: "166px", right: "44px" }}
                    class="menu-line"
                  ></span>
                  <span class="menu-price">$20.99</span>
                </span>
                <span class="menu-subtitle">
                  Neque porro quisquam est qui dolorem
                </span>
              </div>

              <div class="breakfast menu-restaurant">
                <span class="clearfix">
                  <a
                    class="menu-title"
                    href="#"
                    data-meal-img="assets/img/restaurant/rib.jpg"
                  >
                    Food Item Name
                  </a>
                  <span
                    style={{ left: "166px", right: "44px" }}
                    class="menu-line"
                  ></span>
                  <span class="menu-price">$20.99</span>
                </span>
                <span class="menu-subtitle">
                  Neque porro quisquam est qui dolorem
                </span>
              </div>

              <div class="lunch menu-restaurant">
                <span class="clearfix">
                  <a
                    class="menu-title"
                    href="#"
                    data-meal-img="assets/img/restaurant/rib.jpg"
                  >
                    Food Item Name
                  </a>
                  <span
                    style={{ left: "166px", right: "44px" }}
                    class="menu-line"
                  ></span>
                  <span class="menu-price">$20.99</span>
                </span>
                <span class="menu-subtitle">
                  Neque porro quisquam est qui dolorem
                </span>
              </div>

              <div class="lunch menu-restaurant">
                <span class="clearfix">
                  <a
                    class="menu-title"
                    href="#"
                    data-meal-img="assets/img/restaurant/rib.jpg"
                  >
                    Food Item Name
                  </a>
                  <span
                    style={{ left: "166px", right: "44px" }}
                    class="menu-line"
                  ></span>
                  <span class="menu-price">$20.99</span>
                </span>
                <span class="menu-subtitle">
                  Neque porro quisquam est qui dolorem
                </span>
              </div>

              <div class="lunch menu-restaurant">
                <span class="clearfix">
                  <a
                    class="menu-title"
                    href="#"
                    data-meal-img="assets/img/restaurant/rib.jpg"
                  >
                    Food Item Name
                  </a>
                  <span
                    style={{ left: "166px", right: "44px" }}
                    class="menu-line"
                  ></span>
                  <span class="menu-price">$20.99</span>
                </span>
                <span class="menu-subtitle">
                  Neque porro quisquam est qui dolorem
                </span>
              </div>

              <div class="lunch menu-restaurant">
                <span class="clearfix">
                  <a
                    class="menu-title"
                    href="#"
                    data-meal-img="assets/img/restaurant/rib.jpg"
                  >
                    Food Item Name
                  </a>
                  <span
                    style={{ left: "166px", right: "44px" }}
                    class="menu-line"
                  ></span>
                  <span class="menu-price">$20.99</span>
                </span>
                <span class="menu-subtitle">
                  Neque porro quisquam est qui dolorem
                </span>
              </div>

              <div class="lunch menu-restaurant">
                <span class="clearfix">
                  <a
                    class="menu-title"
                    href="#"
                    data-meal-img="assets/img/restaurant/rib.jpg"
                  >
                    Food Item Name
                  </a>
                  <span
                    style={{ left: "166px", right: "44px" }}
                    class="menu-line"
                  ></span>
                  <span class="menu-price">$20.99</span>
                </span>
                <span class="menu-subtitle">
                  Neque porro quisquam est qui dolorem
                </span>
              </div>

              <div class="dinner menu-restaurant">
                <span class="clearfix">
                  <a
                    class="menu-title"
                    href="#"
                    data-meal-img="assets/img/restaurant/rib.jpg"
                  >
                    Food Item Name
                  </a>
                  <span
                    style={{ left: "166px", right: "44px" }}
                    class="menu-line"
                  ></span>
                  <span class="menu-price">$20.99</span>
                </span>
                <span class="menu-subtitle">
                  Neque porro quisquam est qui dolorem
                </span>
              </div>

              <div class="dinner menu-restaurant">
                <span class="clearfix">
                  <a
                    class="menu-title"
                    href="#"
                    data-meal-img="assets/img/restaurant/rib.jpg"
                  >
                    Food Item Name
                  </a>
                  <span
                    style={{ left: "166px", right: "44px" }}
                    class="menu-line"
                  ></span>
                  <span class="menu-price">$20.99</span>
                </span>
                <span class="menu-subtitle">
                  Neque porro quisquam est qui dolorem
                </span>
              </div>

              <div class="dinner menu-restaurant">
                <span class="clearfix">
                  <a
                    class="menu-title"
                    href="#"
                    data-meal-img="assets/img/restaurant/rib.jpg"
                  >
                    Food Item Name
                  </a>
                  <span
                    style={{ left: "166px", right: "44px" }}
                    class="menu-line"
                  ></span>
                  <span class="menu-price">$20.99</span>
                </span>
                <span class="menu-subtitle">
                  Neque porro quisquam est qui dolorem
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" class="section-padding">
        <div class="container">
          <div class="row">
            <div class="col-md-12 text-center">
              <h1 class="header-h">Leave a Beer Review</h1>
              <p class="header-p">
                Hey beer warrior...leave a review of some beers you have tried and get 20% off your next brewery visit!
              
                <br />
                Fill out the form below.{" "}
              </p>
            </div>
          </div>
          <div class="row msg-row">
            <div class="col-md-4 col-sm-4 mr-15">
              <div class="media-2">
                <div class="media-left">
                  <div class="contact-phone bg-1 text-center">
                    <span class="phone-in-talk fa fa-phone"></span>
                  </div>
                </div>
                <div class="media-body">
                  <h4 class="dark-blue regular">Phone Numbers</h4>
                  <p class="light-blue regular alt-p">
                    +440 875369208 -{" "}
                    <span class="contacts-sp">Phone Booking</span>
                  </p>
                </div>
              </div>
              <div class="media-2">
                <div class="media-left">
                  <div class="contact-email bg-14 text-center">
                    <span class="hour-icon fa fa-clock-o"></span>
                  </div>
                </div>
                <div class="media-body">
                  <h4 class="dark-blue regular">Opening Hours</h4>
                  <p class="light-blue regular alt-p">
                    {" "}
                    Monday to Friday 09.00 - 24:00
                  </p>
                  <p class="light-blue regular alt-p">
                    Friday and Sunday 08:00 - 03.00
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-8 col-sm-8">
              <form action="" method="post" role="form" class="contactForm">
                <div id="sendmessage">
                  Your booking request has been sent. Thank you!
                </div>
                <div id="errormessage"></div>
                <div class="col-md-6 col-sm-6 contact-form pad-form">
                  <div class="form-group label-floating is-empty">
                    <input
                      type="text"
                      name="name"
                      class="form-control"
                      id="name"
                      placeholder="Your Name"
                      data-rule="minlen:4"
                      data-msg="Please enter at least 4 chars"
                    />
                    <div class="validation"></div>
                  </div>
                </div>
                <div class="col-md-6 col-sm-6 contact-form">
                  <div class="form-group">
                    <input
                      type="date"
                      class="form-control label-floating is-empty"
                      name="date"
                      id="date"
                      placeholder="Date"
                      data-rule="required"
                      data-msg="This field is required"
                    />
                    <div class="validation"></div>
                  </div>
                </div>
                <div class="col-md-6 col-sm-6 contact-form pad-form">
                  <div class="form-group">
                    <input
                      type="email"
                      class="form-control label-floating is-empty"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                      data-rule="email"
                      data-msg="Please enter a valid email"
                    />
                    <div class="validation"></div>
                  </div>
                </div>
                <div class="col-md-6 col-sm-6 contact-form">
                  <div class="form-group">
                    <input
                      type="time"
                      class="form-control label-floating is-empty"
                      name="time"
                      id="time"
                      placeholder="Time"
                      data-rule="required"
                      data-msg="This field is required"
                    />
                    <div class="validation"></div>
                  </div>
                </div>
                <div class="col-md-6 col-sm-6 contact-form">
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control label-floating is-empty"
                      name="phone"
                      id="phone"
                      placeholder="Phone"
                      data-rule="required"
                      data-msg="This field is required"
                    />
                    <div class="validation"></div>
                  </div>
                </div>
                <div class="col-md-6 col-sm-6 contact-form">
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control label-floating is-empty"
                      name="people"
                      id="people"
                      placeholder="People"
                      data-rule="required"
                      data-msg="This field is required"
                    />
                    <div class="validation"></div>
                  </div>
                </div>
                <div class="col-md-12 contact-form">
                  <div class="form-group label-floating is-empty">
                    <textarea
                      class="form-control"
                      name="message"
                      rows="5"
                      rows="3"
                      data-rule="required"
                      data-msg="Please write something for us"
                      placeholder="Message"
                    ></textarea>
                    <div class="validation"></div>
                  </div>
                </div>
                <div class="col-md-12 btnpad">
                  <div class="contacts-btn-pad">
                    <button class="contacts-btn">Liked a Beer?...Leave a Review</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer class="footer text-center">
        <div class="footer-top">
          <div class="row">
            <div class="col-md-offset-3 col-md-6 text-center">
              <div class="widget">
                <h4 class="widget-title">Three Dog Pint</h4>
                <address>
                  SMU Coding Bootcamp

                  <br />
                  Dallas, TX
                </address>
                
                <div class="social-list">

                  <a href="#">
                    <i class="fa fa-twitter" aria-hidden="true"></i>
                  </a>
                  <a href="#">
                    <i class="fa fa-facebook" aria-hidden="true"></i>
                  </a>
                </div>
                <p class="copyright clear-float">
                  © Project 3. All Rights Reserved
                  <div class="credits">
                    Designed by{""}
                    <a href="https://bootstrapmade.com/">Team 3</a>
                  </div>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
