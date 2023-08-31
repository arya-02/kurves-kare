import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../styles/footer.css";
import Logo from "../assets/kurveslogo.png";
import { FiPhoneCall, FiMail } from "react-icons/fi";
import { BiBuildings } from "react-icons/bi";

const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col>
            <div className="container text-center">
              <img
                src={Logo}
                width="300"
                height="250"
                className="d-inline-block align-top"
                alt="Kurves Kare logo"
              />
            </div>
          </Col>
          <Col>
            <div className="container text-center">
              <div className="container text-center pt-5">
                <h3>SERVICES</h3>
                <br></br>
                <h5>HOME CARE</h5>
                <h5>HOME ASSISTANCE</h5>
                <h5>HEALTH CONSULTANCY</h5>
                <h5>SPECIALIZED TERMINAL CARE</h5>
                <h5>24/7 EMERGENCY SUPPORT</h5>
              </div>
            </div>
          </Col>
          <Col>
            <div className="container text-center">
              <div className="container text-center pt-5">
                <h3>CONTACT US</h3>
                <br></br>
                <div>
                  <h6>
                    <FiPhoneCall className="phone-icon"></FiPhoneCall>
                    +91 9836460607 / (033) 4605 0006
                  </h6>
                </div>
                <br></br>
                <div>
                  <h6>
                    <FiMail className="phone-icon"></FiMail>
                    admin@kurveskare.com
                  </h6>
                </div>
                <br></br>
                <div>
                  <h6>
                    <BiBuildings className="phone-icon"></BiBuildings>
                    Block - O Plot 4, 1st Floor, B. P. Township Patuli, Kolkata
                    - 700 094
                  </h6>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="container text-center">
        <hr style={{ border: "1px solid white" }}></hr>
      </div>
      <div className="container text-center">
        <h6>ALL RIGHTS RESERVED- KURVES KARE INDIA PRIVATE LIMITED- 2023</h6>
      </div>
    </div>
  );
};

export default Footer;
