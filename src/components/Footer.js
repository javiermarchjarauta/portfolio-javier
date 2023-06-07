import { Container, Row, Col } from "react-bootstrap"
import logo from "../assets/img/logo.svg"
import nav1 from "../assets/img/discordlogo.png"
import nav2 from "../assets/img/25231.png"
import nav3 from "../assets/img/nav-icon1.svg"



export const FooterComp = () => {

    return (
        <footer className="footer">
          <Container>
            <Row className="align-items-center">
              
              <Col size={12} sm={6}>
                <img src={logo} alt="Logo" />
              </Col>
              <Col size={12} sm={6} className="text-center text-sm-end">
                
                <p>Copyright 2023. All Rights Reserved</p>
              </Col>
            </Row>
          </Container>
        </footer>
      )
}