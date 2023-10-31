import javaLogo from "../assets/img/icons/java-plain.svg"
import swiftLogo from "../assets/img/swiftlogo.png"
import reactLogo from "../assets/img/icons/react-original.svg"
import ionicLogo from "../assets/img/icons/ionic-original.svg"
import csharpLogo from "../assets/img/icons/csharp-plain.svg"
import androidLogo from "../assets/img/androidLogo.png"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


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
                    <div className="skill-bx">
                        <h2>Skills</h2>
                        <p></p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                            <img src={reactLogo} alt="Image" />
                                <h5>React js</h5>
                            </div>
                            
                            <div className="item">
                                <img src={androidLogo} alt="Image" />
                                <h5>Android Studio</h5>
                                <h6>Java</h6>
                            </div>
                            

                            <div className="item">
                            <img src={reactLogo} alt="Image" />
                            <h5>React native</h5>
                        </div>
                            <div className="item">
                            <img src={ionicLogo} alt="Image" />
                            <h5>Ionic</h5>
                        </div>
                           
                            <div className="item">
                            <img src={csharpLogo} alt="Image" />
                            <h5>C#</h5>
                            
                        </div>

                            <div className="item">
                                <img src={swiftLogo} alt="Image" />
                                <h5>Swift</h5>
                                
                            </div>
                            
                            <div className="item">
                            <img src={javaLogo} alt="Image" />
                            <h5>Java</h5>
                        </div>
                        
                            
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    
    </section>
      )
}