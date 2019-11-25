import React from "react";
import { Container, Row, Col } from "react-bootstrap";
export default function Home() {

  return (
    <div>
      <section id="banner">
        {/* <div class="bg-color">
          <header id="header">
            <div class="container">
              <div id="mySidenav" class="sidenav">
                <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
                <a href="/search">Find a brewery!</a>
                <a href="#event">Event</a>
                <a href="#menu-list">Menu</a>
                <a href="#contact">Book a table</a>
              </div>
              <span onclick="openNav()" class="pull-right menu-icon">☰</span>
            </div>
          </header>
          <br/>
          <br/>
          <br/>
          <div class="container">
            <div class="row">
              <div class="inner text-center">
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
              </div>
            </div>
          </div>
        </div> */}
        <img
          src="img/award.png"
          alt="award logo"
          class="img-responsive"
          style={{ height: "300", width: "200" }}
        />
      </section>

      <section id="about" class="section-padding">
        <div class="container">
          <div class="row">
            <div class="col-md-12 text-center marb-35">
              <h1 class="header-h">Delicious Journey</h1>
              <p class="header-p">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy
                <br />
                nibh euismod tincidunt ut laoreet dolore magna aliquam.{" "}
              </p>
            </div>
            <div class="col-md-1"></div>
            <div class="col-md-10">
              <div class="col-md-6 col-sm-6">
                <div class="about-info">
                  <h2 class="heading">vel illum qui dolorem eum</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Libero impedit inventore culpa vero accusamus in nostrum
                    dignissimos modi, molestiae. Autem iusto esse necessitatibus
                    ex corporis earum quaerat voluptates quibusdam dicta!
                  </p>
                  <div class="details-list">
                    <ul>
                      <li>
                        <i class="fa fa-check"></i>Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit
                      </li>
                      <li>
                        <i class="fa fa-check"></i>Quisque finibus eu lorem quis
                        elementum
                      </li>
                      <li>
                        <i class="fa fa-check"></i>Vivamus accumsan porttitor
                        justo sed{" "}
                      </li>
                      <li>
                        <i class="fa fa-check"></i>Curabitur at massa id tortor
                        fermentum luctus
                      </li>
                    </ul>
                  </div>
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
              <div class="col-xs-12 text-center" style={{ padding: "60px" }}>
                <h1 class="header-h">Up Coming events</h1>
                <p class="header-p">Decorations 100% complete here</p>
              </div>
              <div class="col-md-12" style={{ paddingBottom: "60px" }}>
                <div class="item active left">
                  <div class="col-md-6 col-sm-6 left-images">
                    <img src="img/drink.jpg" class="img-responsive" />
                  </div>
                  <div class="col-md-6 col-sm-6 details-text">
                    <div class="content-holder">
                      <h2>Joyful party</h2>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Labore eos suscipit earum voluptas aliquam
                        recusandae, quae iure adipisci, inventore quia, quos
                        delectus quaerat praesentium id expedita nihil illo
                        accusantium, tempora.
                      </p>
                      <address>
                        <strong>Place: </strong>
                        1612 Collins Str, Victoria 8007
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
              <h1 class="header-h">Top Beers of the Month</h1>
              <div class="award">
                <Container>
                  <Row>
                    <Col>
                      {" "}
                      <img
                        src="img/logos.png"
                        alt="award logo"
                        class="img-responsive"
                        style={{ height: "300", width: "200" }}
                      />
                    </Col>
                    <Col>
                      {" "}
                      <img
                        src="img/gran.png"
                        alt="award logo"
                        class="img-responsive"
                        style={{ height: "300", width: "200" }}
                      />
                    </Col>
                    <Col>
                      {" "}
                      <img
                        src="img/sol.png"
                        alt="award logo"
                        class="img-responsive"
                        style={{ height: "300", width: "200" }}
                      />
                    </Col>
                    <Col>
                      {" "}
                      <img
                        src="img/revolve.png"
                        alt="award logo"
                        class="img-responsive"
                        style={{ height: "300", width: "200" }}
                      />
                    </Col>
                    <Col>
                      {" "}
                      <img
                        src="img/deep.png"
                        alt="award logo"
                        class="img-responsive"
                        style={{ height: "300", width: "200" }}
                      />
                    </Col>
                  </Row>
                </Container>
              </div>
              <p class="header-p">
                {" "}
                Check out the top rated beers of the month below!{" "}
              </p>
              <br />
              <br />
              <br />
            </div>

            <div class="col-md-12  text-center" id="menu-flters">
              <ul>
                <li>
                  <a class="filter active" data-filter=".menu-restaurant">
                    Show All
                  </a>
                </li>
                <li>
                  <a class="filter" data-filter=".breakfast">
                    Breakfast
                  </a>
                </li>
                <li>
                  <a class="filter" data-filter=".lunch">
                    Lunch
                  </a>
                </li>
                <li>
                  <a class="filter" data-filter=".dinner">
                    Dinner
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
              <h1 class="header-h">Book Your table</h1>
              <p class="header-p">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy
                <br />
                nibh euismod tincidunt ut laoreet dolore magna aliquam.{" "}
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
