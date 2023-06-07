import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import contactImg from "../assets/img/coding-html-svgrepo-com.svg";

export const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: ""
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Enviar");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    });
  };

  const handleSubmit = () => {};

  return (
    <section className="contact" id="about">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img src={contactImg} alt="image" />
          </Col>
          <Col md={6}>
            <h2>Sobre mi</h2>
           
            <p>
              Durante mi formación como programador, he adquirido habilidades
              para desarrollar aplicaciones web y aplicaciones interactivas y eficientes.
              Estoy emocionado por contribuir a proyectos desafiantes
              y aprender de profesionales experimentados en un entorno colaborativo.
            </p>
            <p>
              Soy una person orientada a resultados y soy capaz de trabajar de forma independiente y en
              equipo, y me adapto rápidamente a nuevos entornos y tecnologías.
              
            </p>
            <p>
              Estoy interesado en unirme a un equipo dinámico y motivado donde
              pueda aplicar mi conocimiento y seguir desarrollándome como
              profesional. Si crees que puedo ser una buena incorporación a tu
              empresa, ¡me encantaría saber de ti!
            </p>
            </Col>
        </Row>
      </Container>
    </section>
  );
};
