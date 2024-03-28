import React, { Component } from "react";
import "./nav.css";
import { FaMicrophone } from "react-icons/fa";
import { IoMdMenu, IoMdClose} from "react-icons/io";
export default class Nav extends Component{
    render(){
        return(
            <header id="Nav" className="nav-container">
                <main className="tag">
                    <h1 className="logo">Kamali</h1>
                </main>
                <input type="checkbox" id="menu" />
                <label for="menu"><IoMdMenu id="menuBar" /><IoMdClose id="closeBar" /></label>
                <nav className="page">
                    <a className="link" href="#home">Home</a>
                    <a className="link" href="#about">About</a>
                    <a className="link" href="#skills">Skills</a>
                    <a className="link" href="#project">Project</a>
                    <a className="link" href="#contact">Contact</a>
                    <a href="#contact"><button  className="but">Let's Talk <FaMicrophone/></button></a>
                </nav>
            </header>
        )
    }
}