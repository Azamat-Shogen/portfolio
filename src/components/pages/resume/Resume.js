import React from "react";
import {Link} from "react-scroll";


const Skills = () => {

    return (
        <div id="resume" style={{backgroundColor: "tomato", height: "500px", margin: "auto"}}>
            Resume
            <Link to={`home`} spy={true}> Top </Link>
        </div>
    )
}

export default Skills