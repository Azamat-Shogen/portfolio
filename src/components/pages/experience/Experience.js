import React from "react";
import {Link} from "react-scroll";


const Experience = () => {

    return (
        <div id="experience" style={{backgroundColor: "gray", height: "500px", margin: "auto"}}>
            Experience
            <Link to={`home`} spy={true}> Top </Link>
        </div>
    )
}

export default Experience