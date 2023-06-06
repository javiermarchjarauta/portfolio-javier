import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/code-svgrepo-com.svg";
import { useState, useEffect } from "react";

export const Banner = () => {
  const [loopNum, setLoopnum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["junior"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const tiempo = 1000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(tiempo);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopnum(loopNum + 2);
      setDelta(500);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Javier March</span>
            <h1>
              {"Programador "}
              <span className="wrap">{text}</span>
            </h1>
            <p>aaaaaaaaaaaaaaaaaaaadwadwaddddddddddddddddddddddd</p>
            <button onClick={() => console.log("botonBanner")}>
              Contactame <ArrowRightCircle></ArrowRightCircle>
            </button>
       
          </Col>
        </Row>
      </Container>
    </section>
  );
};
