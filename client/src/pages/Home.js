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
              <div class="col-md-12">
                <div class="content-holder">
                <img src="img/served.jpg" alt="wtp logo" class="img-responsive" style={{ height: "275px", width: "350px" }}
/>
                  <h2>What The Tap</h2>
                  <div id="wtt">
                  <p>
                    What The Tap is an app dedicated to making the beer experience...easier. Our concept is simple yet effective. Search by your location to pull in local bars and breweries in your area! We also have our breweries of the month listed on our page to help point you in the right direction. Tried a beer on our list that you liked? Great, our app has a function to leave a review for the world to see. Now get out there and go drink some beers champ.
                      </p>
                  </div>
                </div>
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

                  <div class="col-md-12">
                    <div class="content-holder" id="secondapp">
                      <h2>Connect With Us On Instagram <a href="#" class="instagram"><i class="fa fa-instagram"></i></a></h2>
                      <img
          src="img/screen.jpg"
          alt="insta"
          class="img-responsive"
          style={{ height: "400px", width: "650px" }}
        />
                      <p>
                        What The Tap is all about community! Follow us and our featured breweries to get connected with other beer lovers.
                      </p>

                      <img
          src="img/follow.png"
          alt="follow"
          class="img-responsive"
          style={{ height: "50px", width: "200px" }}
        />
                      <address>
                        <strong>Next Brewery Meet and Greet: </strong>
                        1612 Collins Str, Dallas 75214
                        <br />
                        <strong>Time: </strong>
                        07:30pm
                      </address>
                      <a
                        class="btn btn-imfo btn-read-more"
                        href="https://www.meetup.com/topics/craft-beer/"
                      >
                        Find Local Meetup
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
              <h1 class="header-h"></h1>
              <ul>
                <li>
                  <img
                        src="img/top.png"
                        alt="trim tab brewery"
                        class="img-responsive"
                        style={{ height: "200px", width: "770px" }}
                      />
                </li>
              </ul>
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
                    Big Beach Brewing – Alabama
                  </a>
                  <span
                    style={{ left: "166px", right: "44px" }}
                    class="menu-line"
                  ></span>
                </span>
                <span class="menu-subtitle">
                  At Big Beach Brewing Company, this 10-barrel brew house located in the heart of Gulf Shores is where you’ll see craft beer lovers soaking up the Southern sun. A great place for both important and unimportant conversations – AKA the best kind                </span>
              </div>

              <div class="breakfast menu-restaurant">
                <span class="clearfix">
                  <a
                    class="menu-title"
                    href="#"
                    data-meal-img="assets/img/restaurant/rib.jpg"
                  >
                    HooDoo Brewing Company –  Alaska
                  </a>
                  <span
                    style={{ left: "166px", right: "44px" }}
                    class="menu-line"
                  ></span>
                </span>
                <span class="menu-subtitle">
                  This neighbourhood microbrewery and taproom offers European-style craft beers and tours. Owner Bobby toured breweries in England, Belgium, Czech Republic and Germany for a closer look at how the world’s best breweries make their delicious beverages, so he’s defo up to scratch.                </span>
              </div>

              <div class="breakfast menu-restaurant">
                <span class="clearfix">
                  <a
                    class="menu-title"
                    href="#"
                    data-meal-img="assets/img/restaurant/rib.jpg"
                  >
                    Arizona Wilderness Gilbert Brewpub . – Arizona
                  </a>
                  <span
                    style={{ left: "166px", right: "44px" }}
                    class="menu-line"
                  ></span>
                </span>
                <span class="menu-subtitle">
                  The thirst-quenching passion behind every sip in Gilbert’s first brewery takes its inspiration from the diverse state of Arizona. Quality and artfully-created craft beer, plus seriously tasty burgers, makes this craft brewery a must visit.
                </span>
              </div>

              <div class="breakfast menu-restaurant">
                <span class="clearfix">
                  <a
                    class="menu-title"
                    href="#"
                    data-meal-img="assets/img/restaurant/rib.jpg"
                  >
                    Fossil Cove Brewing Co. – Arkansas
                  </a>
                  <span
                    style={{ left: "166px", right: "44px" }}
                    class="menu-line"
                  ></span>
                </span>
                <span class="menu-subtitle">
                  With a focus on American and Belgian-style ales, this funky brewery in the Ozark Mountains has a welcoming tasting room and nice patio area for warm weather. Find their creations at establishments across Northwest Arkansas or visit us at the Fayetteville Tasting Room.                </span>
              </div>

              {/* <div class="lunch menu-restaurant">
                <span class="clearfix">
                  <a
                    class="menu-title"
                    href="#"
                    data-meal-img="assets/img/restaurant/rib.jpg"
                  >
                    Hangar 24 Redlands – Main Brewery and Taproom – California
                  </a>
                  <span
                    style={{ left: "166px", right: "44px" }}
                    class="menu-line"
                  ></span>
                </span>
                <span class="menu-subtitle">
                  Hangar 24 Craft Brewery makes handcrafted beers inspired by the love of flying, with all refreshing beverages brewed with local ingredients. Its incredible signature brew is Orange Wheat, which is made with Californian-grown oranges.
                </span>
              </div>

              <div class="lunch menu-restaurant">
                <span class="clearfix">
                  <a
                    class="menu-title"
                    href="#"
                    data-meal-img="assets/img/restaurant/rib.jpg"
                  >
                    Fossil Cove Brewing Co. – Arkansas
                  </a>
                  <span
                    style={{ left: "166px", right: "44px" }}
                    class="menu-line"
                  ></span>
                </span>
                <span class="menu-subtitle">
                  With a focus on American and Belgian-style ales, this funky brewery in the Ozark Mountains has a welcoming tasting room and nice patio area for warm weather. Find their creations at establishments across Northwest Arkansas or visit us at the Fayetteville Tasting Room.                </span>
              </div>

              <div class="lunch menu-restaurant">
                <span class="clearfix">
                  <a
                    class="menu-title"
                    href="#"
                    data-meal-img="assets/img/restaurant/rib.jpg"
                  >
                    Red Leg Brewing Company – Colorado
                  </a>
                  <span
                    style={{ left: "166px", right: "44px" }}
                    class="menu-line"
                  ></span>
                </span>
                <span class="menu-subtitle">
                  Red Leg provides the highest quality craft beer to honour the men and women who currently and formerly served in The United States Military. The craft beers that leave their facility continue the service by providing those who serve with a craft beer they can be proud of. Now that’s something we’ll raise a glass to.
                </span>
              </div>

              <div class="lunch menu-restaurant">
                <span class="clearfix">
                  <a
                    class="menu-title"
                    href="#"
                    data-meal-img="assets/img/restaurant/rib.jpg"
                  >
                    Hog River Brewing Co – Connecticut
                  </a>
                  <span
                    style={{ left: "166px", right: "44px" }}
                    class="menu-line"
                  ></span>
                </span>
                <span class="menu-subtitle">
                  This beloved craft brewery & taproom in the heart of the Parkville neighborhood in Hartford, CT is a real gem. While their passion is classic German-style beers (they have a great award-winning Kölsch) they also brew some creative styles such as the popular New England IPA.                </span>
              </div>

              <div class="lunch menu-restaurant">
                <span class="clearfix">
                  <a
                    class="menu-title"
                    href="#"
                    data-meal-img="assets/img/restaurant/rib.jpg"
                  >
                    Dogfish Head Craft Brewery – Delaware
                  </a>
                  <span
                    style={{ left: "166px", right: "44px" }}
                    class="menu-line"
                  ></span>
                </span>
                <span class="menu-subtitle">
                  Since opening its original brewpub in Rehoboth in 1995, Dogfish has become a fantastic brewing mini-empire, with a distillery, brewery and seafood restaurant all part of the family. Try their famous 90 Minute IPA and move onto the rest of their hopped IPAs (of which there are the 60 Minute, 75 Minute, 90 Minute, and 120 Minute).
                </span>
              </div> */}

              <div class="dinner menu-restaurant">
                <span class="clearfix">
                  <a
                    class="menu-title"
                    href="#"
                    data-meal-img="assets/img/restaurant/rib.jpg"
                  >
                    Due South Brewing Co – Florida
                  </a>
                  <span
                    style={{ left: "166px", right: "44px" }}
                    class="menu-line"
                  ></span>
                </span>
                <span class="menu-subtitle">
                  Due South Brewing Company has been producing ales and lagers in Boynton Beach since 2012. With a 15 barrel brewhouse, they craft quality beer for the state of Florida: supplying retail partners from Key West to the Treasure Coast. Not only that, they also serve droolworthy food.
                </span>
              </div>

              <div class="dinner menu-restaurant">
                <span class="clearfix">
                  <a
                    class="menu-title"
                    href="#"
                    data-meal-img="assets/img/restaurant/rib.jpg"
                  >
                    Red Hare Brewing Company – Georgia
                  </a>
                  <span
                    style={{ left: "166px", right: "44px" }}
                    class="menu-line"
                  ></span>
                </span>
                <span class="menu-subtitle">
                  They started selling craft beer throughout the state of Georgia and in 2012 became the first craft brewery in Georgia to can their beer. Red Hare offers six year round beers (SPF 50/50, Tangerine SPF 50/50, Soft J IPA, Gangway IPA, Long Day Lager, and Classic Pilsner), in addition to seasonal and craft soda brands. Something for everyone                </span>
              </div>

              <div class="dinner menu-restaurant">
                <span class="clearfix">
                  <a
                    class="menu-title"
                    href="#"
                    data-meal-img="assets/img/restaurant/rib.jpg"
                  >
                    West Sixth –  Kentucky
                  </a>
                  <span
                    style={{ left: "166px", right: "44px" }}
                    class="menu-line"
                  ></span>
                </span>
                <span class="menu-subtitle">
                  West Sixth Brewing founders have take over Lexington’s historic Rainbow Bread factory and are now creating craft beers. The taproom features several rotating fresh brews and the beer garden makes for a great place to chat and try out a pint or flight. They now can 14 beers throughout the year, with countless bottles being released.                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" class="section-padding">
        <div class="container">
          <div class="row">
            <div class="col-md-12 text-center">
            <img src="img/review.png" alt="wtp logo" class="img-responsive" style={{ height: "125px", width: "500px" }} />

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
              
              <img
          src="img/stars.png"
          alt="best app"
          class="img-responsive"
          style={{ height: "165px", width: "165px" }}
        />
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
                      name="breweryName"
                      class="form-control"
                      id=""
                      placeholder="Brewery Name"
                      data-rule="minlen:4"
                      data-msg="Please enter at least 4 chars"
                    />
                    <div class="validation"></div>
                  </div>
                </div>
                <div class="col-md-6 col-sm-6 contact-form">
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control label-floating is-empty"
                      name="beerName"
                      id=""
                      placeholder="Beer Name"
                      data-rule="required"
                      data-msg="This field is required"
                    />
                    <div class="validation"></div>
                  </div>
                </div>
                <div class="col-md-6 col-sm-6 contact-form pad-form">
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control label-floating is-empty"
                      name="beerStyle"
                      id=""
                      placeholder="Beer Style"
                      data-rule="required"
                      data-msg="Please enter a valid beer style"
                    />
                    <div class="validation"></div>
                  </div>
                </div>
                {/* <div class="col-md-6 col-sm-6 contact-form">
                  <div class="form-group">
                    <input
                      type="time"
                      class="form-control label-floating is-empty"
                      name="time"
                      id=""
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
                </div> */}
                <div class="col-md-12 contact-form">
                  <div class="form-group label-floating is-empty">
                    <textarea
                      class="form-control"
                      name="review"
                      rows="5"
                      rows="3"
                      data-rule="required"
                      data-msg="Please leave us your beer review!"
                      placeholder="Please leave us your beer review!"
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
            <div class="col-md-12">
              <div class="widget">
                <h4 class="widget-title">What The Tap</h4>
                <address>
                  SMU Coding Bootcamp

                  <br />
                  Dallas, TX
                </address>
                <img src="img/phone.png" alt="wtp logo" class="img-responsive" style={{ height: "275px", width: "450px" }} />

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
        <img src="img/apple.png" alt="wtp logo" class="img-responsive" style={{ height: "75px", width: "250px" }} />

      </footer>
    </div>
  );
}
