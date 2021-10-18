import React from "react";
import {Link} from "react-scroll";


const Skills = () => {

    return (
        <div id="skills" style={{backgroundColor: "rosybrown", height: "500px", margin: "auto"}}>
            Skills
            <Link to={`home`} spy={true}> Top </Link>
        </div>
    )
}

export default Skills

{/*<Link  to="nav" spy={true} smooth={true}>Top</Link>*/}