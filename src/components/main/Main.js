import React from "react";
import Home from "../pages/home/Home";
import Education from "../pages/education/Education";
import Skills from "../pages/skillls/Skills";
import Projects from "../pages/projects/Projects";
import Resume from "../pages/resume/Resume";
import Experience from "../pages/experience/Experience";
import Contact from "../pages/contact/Contact";

const Main = () => {

    return(
        <div className="col-md-8 mt-2" style={{backgroundColor: "yellow"}}>
            <Home />
            <Education />
            <Skills />
            <Experience />
            <Projects />
            <Resume />
            <Contact />
        </div>
    )
}
export default Main