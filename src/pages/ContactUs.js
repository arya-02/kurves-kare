import React from "react";
import Appbar from "./AppBar";
import Footer from "./Footer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../styles/contact.css";
import ContactImg from "../assets/contactimg.png";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import { useLayoutEffect } from "react";

const SERVICE_ID = "service_2hgpqqe";
const TEMPLATE_ID = "template_lwf5vri";
const PUBLIC_KEY = "-ehxj9mrLneDki0AI";

const ContactUs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY).then(
      (result) => {
        console.log(result.text);
        Swal.fire({
          icon: "success",
          title: "Thank You for contacting us!",
        });
      },
      (error) => {
        console.log(error.text);
        Swal.fire({
          icon: "error",
          title: "Ooops, something went wrong",
          text: error.text,
        });
      }
    );
    e.target.reset();
  };

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div>
      <Appbar></Appbar>
      <Container>
        <Row>
          <Col>
            <div className="container text-center mt-5 mb-5">
              <div className="container text-center p-4">
                <a href="https://wa.me/9836460607">
                  <button className="contact-btn-wp">WHATSAPP US!</button>
                </a>
              </div>
              <div className="container text-center mt-5">
                <img
                  src={ContactImg}
                  alt="contact us"
                  className="contact-img"
                ></img>
              </div>
              <div className="container text-center mt-5">
                <p className="contact-txt">+91 9836460607</p>
                <p className="contact-txt">(033) 4605 0006</p>
                <br></br>
                <p className="contact-txt">admin@kurveskare.com</p>
                <br></br>
                <p className="contact-txt">
                  Block - O Plot 4, 1st<br></br> Floor, B. P. Township<br></br>{" "}
                  Patuli, Kolkata - 700 094
                </p>
              </div>
            </div>
          </Col>
          <Col>
            <div className="container text-center mt-5 mb-5">
              <div className="container mt-5 p-4">
                <h4 className="contact-head">Contact Us</h4>
              </div>
              <div className="container mt-5">
                <Form onSubmit={handleSubmit}>
                  <Form.Group
                    className="mb-5"
                    controlId="exampleForm.ControlInput1"
                    style={{ textAlign: "left", fontSize: "20px" }}
                  >
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      style={{ borderRadius: "20px", background: "#D9D9D9" }}
                      type="text"
                      placeholder=""
                      id="name"
                      name="name"
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-5"
                    controlId="exampleForm.ControlInput1"
                    style={{ textAlign: "left", fontSize: "20px" }}
                  >
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                      style={{ borderRadius: "20px", background: "#D9D9D9" }}
                      type="text"
                      placeholder=""
                      id="phn"
                      name="phn"
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-5"
                    controlId="exampleForm.ControlInput1"
                    style={{ textAlign: "left", fontSize: "20px" }}
                  >
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      style={{ borderRadius: "20px", background: "#D9D9D9" }}
                      type="email"
                      placeholder=""
                      id="sender_email"
                      name="sender_email"
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-5"
                    controlId="exampleForm.ControlTextarea1"
                    style={{ textAlign: "left", fontSize: "20px" }}
                  >
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      style={{ borderRadius: "20px", background: "#D9D9D9" }}
                      as="textarea"
                      rows={7}
                      id="message"
                      name="message"
                    />
                  </Form.Group>
                  <Button variant="primary">Submit</Button>
                </Form>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default ContactUs;
