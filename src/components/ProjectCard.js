import { Col } from "react-bootstrap";

export const ProjectCard = ({proyect}) => {
    return (
        <Col size={12} sm={6} md={4}>
          <div className="proj-imgbx">
            <img src={proyect.imgUrl} />
            <div className="proj-txtx">
              <h4>{proyect.title}</h4>
              <span>{proyect.description}</span>
            </div>
          </div>
        </Col>
      )
}