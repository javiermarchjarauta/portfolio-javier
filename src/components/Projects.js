import { Col, Container, Row, Tab, Nav } from "react-bootstrap";
import projImg1 from "../assets/img/React-icon.svg.png";
import { ProjectCard } from "./ProjectCard";
import colorsharp2 from "../assets/img/color-sharp2.webp";
import piedrapapel from "../assets/img/piedrapapeltijera.png"

export const Projects = () => {
  const proyectos = [
    {
      title: "Piedra Papel Tijera",
      description: "React JavaScript",
      imgUrl: piedrapapel,
      code: "React",
      url: "https://rockpaperscissors-javier.vercel.app/"
    },
    
  ];

  const filterProjects = (code) => {
    if (code === "all") {
      return proyectos;
    } else {
      return proyectos.filter((project) => project.code === code);
    }
  };

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2>Proyectos</h2>
            <p>// Si tienes alguna duda, no dudes en preguntar</p>
            <Tab.Container id="projects-tab" defaultActiveKey="all">
              <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                <Nav.Item>
                  <Nav.Link eventKey="React">React</Nav.Link>
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
                <Tab.Pane eventKey="React">
                  <Row>
                    {filterProjects("React").map((project, index) => {
                      return <ProjectCard key={index} proyect={project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="Swift">
                  <Row>
                    {filterProjects("Swift").map((project, index) => {
                      return <ProjectCard key={index} proyect={project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="Java">
                  <Row>
                    {filterProjects("Java").map((project, index) => {
                      return <ProjectCard key={index} proyect={project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="all">
                  <Row>
                    {filterProjects("all").map((project, index) => {
                      return <ProjectCard key={index} proyect={project} />;
                    })}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      
    </section>
  );
};
