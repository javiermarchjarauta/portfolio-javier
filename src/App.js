
import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { FooterComp } from './components/Footer';
import { Contact } from './components/Contact';
import { useEffect } from 'react';




function App() {

 

  return (
    <div className="App">
     <NavBar></NavBar>
     <Banner></Banner>
    
     <Skills></Skills>
     <Projects></Projects>
     <Contact></Contact>
     <FooterComp></FooterComp>
     
    </div>
  );
}

export default App;
