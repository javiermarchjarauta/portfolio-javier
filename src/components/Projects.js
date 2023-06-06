import { Col, Container, Row, Tab, Nav } from "react-bootstrap"
import projImg1 from "../assets/img/project-img1.png";
import { ProjectCard } from "./ProjectCard";
import colorsharp2 from "../assets/img/color-sharp2.png"

export const Projects = () => {
    const proyectos = [
        {
            title: "Proyecto 1",
            description: "descripcion proyecto 1",
            imgUrl: projImg1
        },
        {
            title: "Proyecto 1",
            description: "descripcion proyecto 1",
            imgUrl: projImg1
        },
        {
            title: "Proyecto 1",
            description: "descripcion proyecto 1",
            imgUrl: projImg1
        },
        {
            title: "Proyecto 1",
            description: "descripcion proyecto 1",
            imgUrl: projImg1
        },
        {
            title: "Proyecto 1",
            description: "descripcion proyecto 1",
            imgUrl: projImg1
        },
    ]


    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <h2>Proyectos</h2>
                        <p>Aqui podeis ver mis maravillosos proyetos realizados</p>
                        <Tab.Container id="projects-tab" defaultActiveKey="first">
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav> 
                  <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <Row>
                      {
                        proyectos.map((project, index) => {
                            return (
                                <ProjectCard
                                key={index}
                                proyect={project}></ProjectCard>
                            )
                        })
                      }                     
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                  <Row>
                    {
                      proyectos.map((project, index) => {
                          return (
                              <p>{project.title}</p>
                          )
                      })
                    }                     
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                <Row>
                  {
                    proyectos.map((project, index) => {
                        return (
                            <p>{project.title}</p>
                        )
                    })
                  }                     
                </Row>
              </Tab.Pane>
                  
                  </Tab.Content>
                  </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorsharp2} alt="foto fondo"></img>
        </section>
    )
}

