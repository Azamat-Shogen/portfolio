import React from "react";
import {Link} from "react-scroll";


const Home = () => {

    return (
        <div className=" " id="home" style={{backgroundColor: "green", height: "500px", margin: "auto"}}>
            Home
            <Link to={`home`} spy={true}> Top </Link>
        </div>
    )
}

export default Home