import React from "react";
import Footer from "./Footer";
import Appbar from "./AppBar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../styles/service.css";
import Ser01 from "../assets/ph01.png";
import Ser02 from "../assets/service02.png";
import Ser03 from "../assets/service03.png";
import Ser04 from "../assets/service04.png";
import Ser05 from "../assets/heal1.png";
import Ser06 from "../assets/heal2.png";
import { Link } from "react-router-dom";
import { useLayoutEffect } from "react";

const Health = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div>
      <Appbar />
      <div className="container text-center pt-4 pb-4">
        <h6 className="service-head">Specialized Terminal Care</h6>
      </div>
      <Container>
        <Row>
          <Col>
            <div className="conatainer text-center py-4">
              <img
                src={Ser01}
                alt="service"
                width="450"
                height="300"
                className="ser-img-1"
              ></img>
            </div>
          </Col>
          <Col>
            <div className="container  py-4">
              <p className="text-center service-txt">
                At Kurves Kare, we understand the unique and evolving healthcare
                needs of our esteemed senior citizens. With years of experience
                and a deep commitment to enhancing the quality of life for our
                elderly population, we proudly present our comprehensive Health
                Consultancy Services. Our dedicated team of in-house doctors,
                specializing in a range of disciplines including Neurology and
                Cardiology, is here to provide tailored care and support that
                prioritizes the well-being and vitality of our senior citizens.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <div className="conatainer text-center py-4">
              <img src={Ser02} alt="ser" width="300" height="200"></img>
            </div>
          </Col>
          <Col>
            <div className="conatainer text-center py-4">
              <img src={Ser03} alt="ser" width="300" height="200"></img>
            </div>
          </Col>
          <Col>
            <div className="conatainer text-center py-4">
              <img src={Ser04} alt="ser" width="300" height="200"></img>
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <div className="conatainer text-center py-4 mt-4 mb-4">
              <img
                src={Ser05}
                alt="service"
                width="500"
                height="350"
                className="ser-img-1"
              ></img>
            </div>
          </Col>
          <Col>
            <div className="container py-4 mt-4 mb-4">
              <p className="text-center service-txt">
                Thorough Assessments: Comprehensive health evaluations to
                identify individual needs and concerns. Tailored Treatment:
                Personalized care plans designed to address specific health
                requirements. Regular Monitoring: Ongoing health check-ups and
                continuous monitoring for proactive care. Multidisciplinary
                Collaboration: Access to a network of specialists for a
                well-rounded approach to health. Emotional Support: Providing
                not only medical assistance but also emotional support for
                overall well-being.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <div className="conatainer py-4 mt-4 mb-4">
              <p className="text-center service-txt">
                Expert Team: Our in-house doctors bring years of experience and
                expertise to cater to senior healthcare needs. Holistic Care: We
                focus on physical, emotional, and mental well-being for a
                fulfilling life. Personalized Approach: Every senior is unique,
                and our care plans are tailored to individual requirements.
                Compassionate Environment: We create a supportive and
                compassionate atmosphere that respects the dignity of every
                individual. Community-Centric: We are committed to building a
                strong and healthy senior community in India.
              </p>
            </div>
          </Col>
          <Col>
            <div className="container text-center py-4 mt-4 mb-4">
              <img
                src={Ser06}
                alt="service"
                width="500"
                height="350"
                className="ser-img-1"
              ></img>
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

export default Health;
