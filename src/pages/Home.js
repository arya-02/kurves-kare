import React from "react";
import Appbar from "./AppBar";
import "../styles/home.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import HomeSlab2 from "../assets/homepage/HomeSlab2.png";
import HomeSlab3 from "../assets/homepage/HomeSlab3.png";
import HomeSlab4 from "../assets/homepage/HomeSlab4.png";
import HomeAbt1 from "../assets/homepage/homeabt1.png";
import HomeAbt2 from "../assets/homepage/homeabt2.png";
import HomeAbt3 from "../assets/homepage/homeabt3.png";
import HomeAbt4 from "../assets/homepage/homeabt4.png";
import HomeAbt5 from "../assets/homepage/homeabt5.png";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import { useLayoutEffect } from "react";

const Home = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div>
      <Appbar></Appbar>
      <div className="hero-section">
        <div className="container">
          <h4>KURVES KARE: CARE FOR THOSE WHO ONCE CARED FOR US</h4>
        </div>
      </div>
      <div className="hero-section-2"></div>
      <div className="container my-5 text-center">
        <p className="home-about-head">
          Enriching Lives of those who once took care of us
        </p>
      </div>
      <div className="conatiner my-5 text-center p-4">
        <p className="home-about-desc">
          At Kurves Kare, we understand the profound importance of cherishing
          the elderly members of our society who once cared for us. Our mission
          is to provide unwavering support and companionship to senior citizens
          who find themselves alone or separated from their loved ones. We
          firmly believe that the golden years of life should be filled with
          joy, comfort, and a strong sense of belonging.<br></br>
          <br></br> We firmly believe that seniors should be able to spend their
          final days in the comfort of their own homes, surrounded by love and
          familiarity. Kurves Kare strives to make this vision a reality,
          offering compassionate care that enables our seniors to maintain their
          independence while receiving the support they require.<br></br>
          <br></br> At Kurves Kare, our purpose is clear: to create a world
          where senior citizens are cherished, celebrated, and empowered to lead
          lives filled with happiness and meaning. Join us on this journey of
          compassion and care as we work together to honor the incredible
          individuals who have shaped our lives in so many ways.
        </p>
      </div>
      <Container>
        <Row>
          <Col>
            <div className="conatainer text-center py-4">
              <img src={HomeSlab2} alt="aim" width="300" height="300"></img>
            </div>
          </Col>
          <Col>
            <div className="conatainer text-center py-4">
              <img src={HomeSlab3} alt="aim" width="300" height="300"></img>
            </div>
          </Col>
          <Col>
            <div className="conatainer text-center py-4">
              <img src={HomeSlab4} alt="aim" width="300" height="300"></img>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="hero-section-3"></div>
      <div className="container text-center p-4 mt-4">
        <h4 className="hero-3-head">
          TRUSTED BY OUR CLIENTS FOR OVER 14 YEARS
        </h4>
        <br></br>
        <p className="hero-3-desc">
          CHECK OUT WHAT THEY HAVE GOT TO SAY ABOUT US!
        </p>
      </div>
      <Container>
        <Row>
          <Col>
            <div className="conatainer text-center py-4">
              <img src={HomeAbt1} alt="aim" width="350" height="450"></img>
            </div>
          </Col>
          <Col>
            <div className="conatainer text-center py-4">
              <img src={HomeAbt1} alt="aim" width="350" height="450"></img>
            </div>
          </Col>
          <Col>
            <div className="conatainer text-center py-4">
              <img src={HomeAbt2} alt="aim" width="350" height="450"></img>
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <div className="conatainer text-center py-4">
              <img src={HomeAbt3} alt="aim" width="350" height="450"></img>
            </div>
          </Col>
          <Col>
            <div className="conatainer text-center py-4">
              <img src={HomeAbt4} alt="aim" width="350" height="450"></img>
            </div>
          </Col>
          <Col>
            <div className="conatainer text-center py-4">
              <img src={HomeAbt5} alt="aim" width="350" height="450"></img>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="container text-center p-4">
        <Link to="/contact-us">
          <button className="home-btn">
            DROP DOWN AN ENQUIRY!<br></br>WHATSAPP US!
          </button>
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
