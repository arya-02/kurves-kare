import React from "react";
import AppBar from "./AppBar";
import Footer from "./Footer";
import "../styles/about.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import About02 from "../assets/aboutuspage/about02.png";
import About03 from "../assets/aboutuspage/about03.png";
import About04 from "../assets/aboutuspage/about04.png";
import { Link } from "react-router-dom";
import { useLayoutEffect } from "react";

const AboutUs = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div>
      <AppBar></AppBar>
      <div className="about-sec-0"></div>
      <div className="container text-center mt-5">
        <h6 className="about-0-head">ABOUT KURVES KARE</h6>
        <br></br>
        <p className="about-0-desc">
          At Kurves Kare, we understand the profound importance of cherishing
          the elderly members of our society who once cared for us. Our mission
          is to provide unwavering support and companionship to senior citizens
          who find themselves alone or separated from their loved ones. We
          firmly believe that the golden years of life should be filled with
          joy, comfort, and a strong sense of belonging.
        </p>
        <br></br>
      </div>
      <Container>
        <Row>
          <Col>
            <div className="container text-center mt-5 mb-5">
              <div className="container">
                <h4 className="about-txt-head">
                  Embracing Our Responsibility:
                </h4>
                <p className="about-txt">
                  Just as they once cared for us, it is now our turn to ensure
                  the well-being and happiness of our seniors. At Kurves Kare,
                  we honor the impact they've had on our lives by offering
                  comprehensive care and personalized attention to meet their
                  unique needs.
                </p>
                <br></br>
                <h4 className="about-txt-head">
                  Holistic Care Beyond Physical Needs:
                </h4>
                <p className="about-txt">
                  Our commitment goes beyond merely addressing physical
                  requirements. We provide a holistic approach to care,
                  encompassing emotional support, mental stimulation, and a
                  nurturing environment. Through engaging activities and
                  meaningful interactions, we strive to create a sense of
                  purpose and fulfillment for our cherished seniors.
                </p>
              </div>
            </div>
          </Col>
          <Col>
            <div className="container text-center mt-5 mb-5">
              <img src={About02} alt="about" className="about-img"></img>
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <div className="container text-center mt-5 mb-5">
              <img src={About03} alt="about" className="about-img"></img>
            </div>
          </Col>
          <Col>
            <div className="container text-center mt-5 mb-5">
              <div className="container">
                <h4 className="about-txt-head">
                  A Lifeline of Emotional Support:
                </h4>
                <p className="about-txt">
                  Loneliness can cast a long shadow over the lives of seniors,
                  and we are dedicated to dispelling it. Our caregivers become
                  trusted companions, offering genuine friendship and heartfelt
                  conversations. We aim to be a consistent source of comfort,
                  laughter, and understanding, fostering emotional well-being.
                </p>
                <br></br>
                <h4 className="about-txt-head">
                  Vibrant Community and Enriching Events:
                </h4>
                <p className="about-txt">
                  Kurves Kare believes that life is meant to be celebrated at
                  every stage. We organize a variety of events and activities
                  that cater to the interests of our seniors, promoting social
                  interaction, and creating lasting memories. From art workshops
                  to music sessions, our calendar is filled with opportunities
                  to connect and engage.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <div className="container text-center mt-5 mb-5">
              <div className="container">
                <h4 className="about-txt-head">
                  Reliable Support in Times of Need:
                </h4>
                <p className="about-txt">
                  Emergencies can arise unexpectedly, and we stand by our
                  commitment to ensure the safety and security of our seniors.
                  Our dedicated team is prepared to offer immediate assistance
                  and prompt care in any situation, providing peace of mind to
                  both seniors and their families.
                </p>
                <br></br>
                <h4 className="about-txt-head">
                  Dignity and Love in Every Home:
                </h4>
                <p className="about-txt">
                  We firmly believe that seniors should be able to spend their
                  final days in the comfort of their own homes, surrounded by
                  love and familiarity. Kurves Kare strives to make this vision
                  a reality, offering compassionate care that enables our
                  seniors to maintain their independence while receiving the
                  support they require.
                </p>
              </div>
            </div>
          </Col>
          <Col>
            <div className="container text-center mt-5 mb-5">
              <img src={About04} alt="about" className="about-img"></img>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="container text-center mt-5 mb-5">
        <h6 className="about-txt">
          At Kurves Kare, our purpose is clear: to create a world where senior
          citizens are cherished, celebrated, and empowered to lead lives filled
          with happiness and meaning. Join us on this journey of compassion and
          care as we work together to honor the incredible individuals who have
          shaped our lives in so many ways.
        </h6>
      </div>
      <div className="container text-center p-4">
        <Link to="/contact-us">
          <button className="home-btn">
            DROP DOWN AN ENQUIRY!<br></br>WHATSAPP US!
          </button>
        </Link>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default AboutUs;
