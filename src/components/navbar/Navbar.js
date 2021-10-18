import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import "./navbar.css"
import cat from "./cat--v3.png"
import { Spin } from 'hamburger-react'
import baki from "./baki.jpg"
import { NavLink } from "react-router-dom";
import {Link, scroller} from 'react-scroll'
import NavbarLists from "./navbar-lists/NavbarLists";


const Navbar = () => {

    return (
        <div className="wrapper col-12 col-md-3 p-0 mt-4 mb-4 sticky-top" id="main-menu">
        <nav className="navbar navbar-expand-md  navbar-light" >


            <div className="p-3">
                <div className="d-flex">
                    <div className="container-fluid" >
                        <img src={baki} alt="photo"/>
                        <a className="navbar-brand" href="#"><h3>My Portfolio</h3></a>
                    </div>
                    <div className="">
                        <button className="navbar-toggler  menu-icon" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                            <Spin color="white" size={26} />
                        </button>
                    </div>
                </div>

                <div>
                    <NavbarLists />
                </div>

            </div>

        </nav>
        </div>



    )
}
export default Navbar

{/*<li><Link to={`contact`} spy={true}> Home </Link> </li>*/}