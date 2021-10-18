import React from "react";
import { FaHome, FaSchool, FaProjectDiagram, FaPhoneAlt, FaLaptopCode, FaListUl} from 'react-icons/fa';
import './navbar-lists.css'
import {Link} from "react-scroll";


// <Link to={`home`} spy={true}> Top </Link>

const NavbarLists = () => {

    return (
        <div className="collapse navbar-collapse" id="collapsibleNavbar">

            <ul className="nav flex-column text-left mt-2">
                <li className="nav-item">
                    <Link to={`home`} spy={true} className="nav-link active" href="#"> <FaHome />  <span className="ml-3">Home</span></Link>
                </li>
                <li className="nav-item">
                    <Link to={`education`} spy={true} className="nav-link active" href="#"> <FaSchool />  <span className="ml-3">Education</span></Link>
                </li>

                <li className="nav-item">
                    <Link to={`skills`} className="nav-link active" href="#"> <FaLaptopCode />  <span className="ml-3">Skills</span></Link>
                </li>

                <li className="nav-item">
                    <Link to={`experience`} spy={true} className="nav-link active" href="#"> <FaLaptopCode /> <span className="ml-3">Experience</span></Link>
                </li>

                <li className="nav-item">
                    <Link to={`projects`} className="nav-link active" href="#"> <FaProjectDiagram />  <span className="ml-3">Projects</span></Link>
                </li>
                <li className="nav-item">
                    <Link to={`resume`} className="nav-link active" href="#"> <FaListUl />  <span className="ml-3">Resume</span></Link>
                </li>
                <li className="nav-item">
                    <Link to={`contact`} className="nav-link" href="#"><FaPhoneAlt /> <span className="ml-3">Contact</span></Link>
                </li>
            </ul>
        </div>
    )
}

export default NavbarLists