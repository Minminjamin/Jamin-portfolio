import AboutMe from "./component/About Me/AboutMe";
import Header from "./component/Header/Header";
import Skills from "./component/Skills/Skills";
import Project from "./component/Project/Project";
import { Element } from "react-scroll";

function App() {
  return (
    <div>
        <Header/>
        <Element name ='about'>
          <AboutMe/>
        </Element>

        <Element name ='skills'>
          <Skills/>
        </Element>

        <Element name ='project'>
          <Project/>
        </Element>
    </div>

  );
}

export default App;
