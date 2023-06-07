import { Col, Container, Row, Tab, Nav } from "react-bootstrap";
import projImg1 from "../assets/img/React-icon.svg.png";
import { ProjectCard } from "./ProjectCard";
import colorsharp2 from "../assets/img/color-sharp2.png";

export const Projects = () => {
  const proyectos = [
    {
      title: "Proyecto 1",
      description: "descripcion proyecto 1",
      imgUrl: projImg1,
      code: "React"
    },
    {
      title: "Proyecto 2",
      description: "descripcion proyecto 1",
      imgUrl: projImg1,
      code: "React"
    },
    {
      title: "Proyecto 3",
      description: "descripcion proyecto 1",
      imgUrl: projImg1,
      code: "Java"
    },
    {
      title: "Proyecto 4",
      description: "descripcion proyecto 1",
      imgUrl: projImg1,
      code: "Swift"
    },
    {
      title: "Proyecto 5",
      description: "descripcion proyecto 1",
      imgUrl: projImg1,
      code: "Swift"
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2>Proyectos</h2>
            <p>queren gorda</p>
            <Tab.Container id="projects-tab" defaultActiveKey="all">
              <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
             
              <Nav.Item>
              <Nav.Link eventKey="JavaScript">JavaScript</Nav.Link>
            </Nav.Item>
              <Nav.Item>
                  <Nav.Link eventKey="Swift">Swift</Nav.Link>
                </Nav.Item>  
              
                
                <Nav.Item>
                  <Nav.Link eventKey="Java">Java</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="all">Todos</Nav.Link>
                </Nav.Item>
                
              </Nav>
              <Tab.Content>
              <Tab.Pane eventKey="JavaScript">
                  <Row>
                    {proyectos.map((project, index) => {
                      return (
                        <ProjectCard key={index} proyect={project} />
                      );
                    })}
                  </Row>
                </Tab.Pane>
              <Tab.Pane eventKey="Swift">
                  <Row>
                    {proyectos.map((project, index) => {
                      return (
                        <ProjectCard key={index} proyect={project} />
                      );
                    })}
                  </Row>
                </Tab.Pane>
                
                
                <Tab.Pane eventKey="Java">
                  <Row>
                    {proyectos.map((project, index) => {
                      return (
                        <ProjectCard key={index} proyect={project} />
                      );
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="all">
                  <Row>
                    {proyectos.map((project, index) => {
                      return (
                        <ProjectCard key={index} proyect={project} />
                      );
                    })}
                  </Row>
                </Tab.Pane>
                
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorsharp2} alt="foto fondo" />
    </section>
  );
};
