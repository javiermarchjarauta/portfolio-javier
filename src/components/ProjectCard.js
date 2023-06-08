import { Col } from "react-bootstrap";

export const ProjectCard = ({ proyect }) => {
  const handleImageClick = () => {
    window.location.href = proyect.url;
  };

  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx" onClick={handleImageClick}>
        <img src={proyect.imgUrl} alt="Project" />
        
        <div className="proj-txtx">
          <h4>{proyect.title}</h4>
          <span>{proyect.description}</span>
        </div>
      </div>
    </Col>
  );
};
