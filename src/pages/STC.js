import React from "react";
import Footer from "./Footer";
import Appbar from "./AppBar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../styles/service.css";
import Ser01 from "../assets/service01.png";
import Ser02 from "../assets/service02.png";
import Ser03 from "../assets/service03.png";
import Ser04 from "../assets/service04.png";
import Ser05 from "../assets/service05.png";
import Ser06 from "../assets/service06.png";
import { Link } from "react-router-dom";
import { useLayoutEffect } from "react";

const STC = () => {
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
                At Kurves Kare, we understand the significance of providing
                dignified and compassionate care during life's final stages. Our
                Specialized Terminal Care services are designed to ensure the
                comfort, dignity, and well-being of our cherished senior
                citizens in India. With a team of experienced and compassionate
                professionals, we offer a range of essential services to enhance
                the quality of life for individuals and their families.
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
                Blood Tests and Monitoring: We provide regular blood tests to
                monitor health parameters, ensuring the best possible care and
                comfort for our patients. Our skilled technicians ensure
                accurate results and timely reporting. Pain Management: Our
                dedicated team is committed to alleviating pain and discomfort,
                utilizing the latest advancements in pain management techniques
                and medications. Injections and Medications: Expert
                administration of injections and medications, tailored to
                provide relief and alleviate symptoms, forms a crucial part of
                our terminal care approach. Wound Dressings and Stitching: Our
                experienced medical professionals offer attentive wound care,
                ensuring proper healing and preventing complications. From
                dressings to sutures, we prioritize your comfort and well-being.
                Rice Tube Insertion and Care: We provide specialized rice tube
                insertion and care services, ensuring proper nutrition and
                hydration for patients who may have difficulty eating orally.
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
                Compassionate Approach: Our team is dedicated to providing
                compassionate and respectful care, ensuring the comfort and
                dignity of our patients. Experienced Professionals: Our medical
                experts are skilled in terminal care, offering expertise and
                support throughout the journey. Comprehensive Services: From
                medical treatments to emotional support, we provide a holistic
                approach to terminal care. Family-Centered Care: We recognize
                the importance of supporting both patients and their families
                during this difficult time. Enhancing Quality of Life: Our focus
                is on enhancing the quality of life, ensuring comfort, relief,
                and peace.
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
      <div className="container text-center mt-4 mb-4">
        <p className="container text-center service-txt">
          At Kurves Kare, we believe that every individual deserves to
          experience their final days with dignity, comfort, and compassion. Our
          Specialized Terminal Care services are a testament to our commitment
          to providing exceptional care to our senior citizens. Contact us today
          to learn more about our services and how we can provide support during
          this important journey.
        </p>
      </div>
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
export default STC;
