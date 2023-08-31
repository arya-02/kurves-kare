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
import Ser05 from "../assets/hca1.png";
import Ser06 from "../assets/service06.png";
import { Link } from "react-router-dom";
import { useLayoutEffect } from "react";

const HomeCare = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div>
      <Appbar />
      <div className="container text-center pt-4 pb-4">
        <h6 className="service-head">Home Care Assitance</h6>
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
                Home care assistance for senior citizens is a vital and
                compassionate service that ensures the well-being and comfort of
                our beloved elders within the familiar surroundings of their
                homes. As individuals age, they may face challenges in
                performing daily activities, managing medical needs, and
                maintaining their independence. Home care assistance addresses
                these needs by providing personalized support, enhancing the
                quality of life for seniors and offering peace of mind to their
                families.
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
                The essence of home care assistance lies in its individualized
                approach. Trained caregivers work closely with seniors and their
                families to design a comprehensive care plan tailored to the
                unique requirements and preferences of each individual. Whether
                it's help with personal hygiene, medication management, meal
                preparation, or light housekeeping, these caregivers offer
                assistance with the utmost respect and dignity, fostering a
                sense of autonomy. The emotional benefits of home care
                assistance cannot be understated. Seniors often form strong
                bonds with their caregivers, leading to meaningful companionship
                that alleviates feelings of loneliness and isolation.
                Additionally, family members can rest assured that their loved
                ones are receiving attentive and compassionate care, even when
                they cannot be physically present.
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
                The essence of home care assistance lies in its individualized
                approach. Trained caregivers work closely with seniors and their
                families to design a comprehensive care plan tailored to the
                unique requirements and preferences of each individual. Whether
                it's help with personal hygiene, medication management, meal
                preparation, or light housekeeping, these caregivers offer
                assistance with the utmost respect and dignity, fostering a
                sense of autonomy. The emotional benefits of home care
                assistance cannot be understated. Seniors often form strong
                bonds with their caregivers, leading to meaningful companionship
                that alleviates feelings of loneliness and isolation.
                Additionally, family members can rest assured that their loved
                ones are receiving attentive and compassionate care, even when
                they cannot be physically present.
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
          In conclusion, home care assistance for senior citizens is a
          cornerstone of compassionate and holistic care. It not only ensures
          that the physical needs of seniors are met but also fosters emotional
          connection and mental stimulation. By enabling seniors to age
          gracefully within the comfort of their own homes, home care assistance
          honors their legacy and enriches their lives with dignity, respect,
          and companionship.
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

export default HomeCare;
