/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import { Button, Card, Container, Row, Col, } from "reactstrap";

// other react elements
import { Link } from "react-router-dom";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";
import profile from "assets/img/theme/profilePic.jpg";

class Profile extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DemoNavbar />
        <main className="profile-page" ref="main">
          <section className="section-profile-cover section-shaped my-0">
            {/* Circles background */}
            <div className="shape shape-style-1 shape-default alpha-4">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>
          <section className="section">
            <Container>
              <Card className="card-profile shadow mt--300">
                <div className="px-4">
                  <Row className="justify-content-center">
                    <Col className="order-lg-2" lg="3">
                      <div className="card-profile-image">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img
                            alt="..."
                            className="rounded-circle"
                            src={profile}
                          />
                        </a>
                      </div>
                    </Col>
                    <Col
                      className="order-lg-3 text-lg-right align-self-lg-center"
                      lg="4"
                    >
                      <div className="card-profile-actions py-4 mt-lg-0">
                        <Link to="https://www.linkedin.com/in/joshuahaddock/">
                          <Button
                            className="mr-4"
                            color="info"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                            size="sm"
                            href="#"
                          >
                            Connect
                          </Button>
                        </Link>
                        <Button
                          className="float-right"
                          color="default"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                          size="sm"
                        >
                          Message
                        </Button>
                      </div>
                    </Col>
                    <Col className="order-lg-1" lg="4">
                      <div className="card-profile-stats d-flex justify-content-center">
                        <div>
                          <span className="heading">Profession</span>
                          <span className="description">Software Developer</span>
                        </div>
                        <div>
                          <span className="heading">Hobby</span>
                          <span className="description">Power Lifter</span>
                        </div>
                        <div>
                          <span className="heading">Downtime</span>
                          <span className="description">Amatuer Gamer</span>
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <div className="text-center mt-5">
                    <h3>
                      Joshua Haddock{" "}
                      <span className="font-weight-light">, 32</span>
                    </h3>
                    <div className="h6 font-weight-300">
                      <i className="ni location_pin mr-2" />
                      Seattle, WA, USA
                    </div>
                    <div className="h6 mt-4">
                      <i className="ni business_briefcase-24 mr-2" />
                      Software Developer - On the market
                    </div>
                    <div>
                      <i className="ni education_hat mr-2" />
                      BA Walla Walla University
                      <br></br>
                      Certificate in Advanced Software Development Code Fellows
                    </div>
                  </div>
                  <div className="mt-5 py-5 border-top text-center">
                    <Row className="justify-content-center">
                      <Col lg="9">
                        <p>
                        After graduating with a BA in English from Walla Walla University, I took up a career in hospitality. In 2020 I switched gears, for obvious reasons, and took a coding class on a whim. I found after just a few classes that I was obsessing over my code, and that every time I was able to write a functional algorithm I would get a little jolt of adrenaline and excitement. JavaScript, HTML, and CSS were a perfect match for me as they allowed me to get immediate visual feedback and flex my creative muscle. Ideally I would work in an environment with similarly minded creative people of multiple disciplines. I find I am most energized when collaborating and learning from the experiences of those around me while also contributing my own unique experience. I bring a strong background in people skills, team management, cost control, conflict resolution, and customer service from my time in hospitality that I’m excited to bring to my work as a developer.
                        </p>
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          Show more
                        </a>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Card>
            </Container>
          </section>
        </main>
        <SimpleFooter />
      </>
    );
  }
}

export default Profile;
