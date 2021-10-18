import React from "react";
import {Link} from "react-scroll";


const Education = () => {

    return (
        <div id="education" style={{backgroundColor: "lightyellow", height: "500px", margin: "auto"}}>
            Education
            {/*<Link  to="nav" spy={true} smooth={true}>Top</Link>*/}
            <Link to={`home`} spy={true}> Top </Link>
        </div>
    )
}

export default Education