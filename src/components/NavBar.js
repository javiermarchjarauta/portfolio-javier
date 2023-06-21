import { Navbar, Container, Nav } from "react-bootstrap";
import { useEffect, useState } from "react";
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/25231.png';
import navIcon3 from '../assets/img/discordlogo.png';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState("home");
    const [scrolled, setScolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScolled(true);
            } else {
                setScolled(false);
            }
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const onUpdateActiveLink = (nombre) => {
        setActiveLink(nombre);
    };

    const downloadFile = () => {
        window.open("https://drive.google.com/file/d/1kFF0oUflBFfW9PGSnldhIVmcKgD6Y_dl/view?usp=drive_link", "_blank");
    };

    return (
        <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="/">
                    <img src={logo} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link
                            href="#home"
                            className={activeLink === "home" ? "active navbar-link" : "navbar-link"}
                            onClick={() => onUpdateActiveLink("home")}
                        >
                            Inicio
                        </Nav.Link>
                        <Nav.Link
                            href="#skills"
                            className={activeLink === "skills" ? "active navbar-link" : "navbar-link"}
                            onClick={() => onUpdateActiveLink("skills")}
                        >
                            Skills
                        </Nav.Link>
                        <Nav.Link
                            href="#project"
                            className={activeLink === "projects" ? "active navbar-link" : "navbar-link"}
                            onClick={() => onUpdateActiveLink("projects")}
                        >
                            Proyectos
                        </Nav.Link>
                        <Nav.Link
                            href="#about"
                            className={activeLink === "about" ? "active navbar-link" : "navbar-link"}
                            onClick={() => onUpdateActiveLink("projects")}
                        >
                            Sobre mi
                        </Nav.Link>
                    </Nav>
                    <Nav className="ms-auto">
                        <Nav.Link
                            href="https://es.linkedin.com/in/javier-march-jarauta-698872195"
                            className={activeLink === "" ? "active navbar-link" : "navbar-link"}
                            
                        >
                            LinkedIn
                        </Nav.Link>
                        <Nav.Link
                            href="https://github.com/javiermarchjarauta"
                            className={activeLink === "skills" ? "active navbar-link" : "navbar-link"}
                            
                        >
                            GitHub
                        </Nav.Link>
                        <Nav.Link
                            href="https://www.infojobs.net/candidate/cv/view/index.xhtml?dgv=6847602357049212651"
                            className={activeLink === "projects" ? "active navbar-link" : "navbar-link"}
                           
                        >
                            Infojobs
                        </Nav.Link>
                        <Nav.Link
                            onClick={downloadFile}
                            className={activeLink === "download" ? "active navbar-link" : "navbar-link"}
                        >
                            CV
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
