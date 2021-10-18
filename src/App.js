import logo from './logo.svg';
import './App.css';
import Navbar from "./components/navbar/Navbar";
import {Link} from 'react-scroll'
import Home from "./components/pages/home/Home";
import Skills from "./components/pages/skillls/Skills";
import Education from "./components/pages/education/Education";
import Experience from "./components/pages/experience/Experience";
import Projects from "./components/pages/projects/Projects";
import Resume from "./components/pages/resume/Resume";
import Contact from "./components/pages/contact/Contact";
import Main from "./components/main/Main";

function App() {
  return (
    <div className="App">
        <div className="container p-4">
          <div className="row align-items-sm-start">
            {/*TODO: Nav bar */}
              <Navbar />
            {/*TODO: Main content */}
           <Main />

          </div>
          {/*<Home />*/}
          {/*<Skills />*/}
          {/*<Education />*/}
          {/*<Experience />*/}
          {/*<Projects />*/}
          {/*<Resume />*/}
          {/*<Contact />*/}
        </div>

    </div>
  );
}

export default App;
