import React from "react";
import {Link} from "react-scroll";


const Contact = () => {

    return (
        <div id="contact" style={{backgroundColor: "hotpink", height: "500px", margin: "auto"}}>
            Contact Me
            <Link to={`home`} spy={true}> Top </Link>
        </div>
    )
}

export default Contact