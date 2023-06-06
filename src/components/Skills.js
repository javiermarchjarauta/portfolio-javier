import javaLogo from "../assets/img/java-logo-1.png"
import swiftLogo from "../assets/img/swiftlogo.png"
import reactLogo from "../assets/img/React-icon.svg.png"
import ionicLogo from "../assets/img/ionicLogo.png"
import reactNative from "../assets/img/react-native-logo.png"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      return (
        <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                            <img src={reactLogo} alt="Image" />
                                <h5>React js</h5>
                            </div>
                            <div className="item">
                                <img src={reactLogo} alt="Image" />
                                <h5>React native</h5>
                            </div>
                            <div className="item">
                                <img src={swiftLogo} alt="Image" />
                                <h5>Swift</h5>
                                <h6>"Nivel básico"</h6>
                            </div>
                            <div className="item">
                            <img src={javaLogo} alt="Image" />
                            <h5>Java</h5>
                        </div>
                        <div className="item">
                            <img src={ionicLogo} alt="Image" />
                            <h5>Ionic</h5>
                        </div>
                            
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
      )
}