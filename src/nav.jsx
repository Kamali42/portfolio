import React, { Component } from "react";
import "./nav.css";
import { FaMicrophone } from "react-icons/fa";
import { IoMdMenu, IoMdClose} from "react-icons/io";
export default class Nav extends Component{
    render(){
        setTimeout(()=>{
        var header=document.querySelector(".page");
        var tag=header.getElementsByClassName("link");
        for(var i=0;i<tag.length;i++){
            tag[i].addEventListener("click",function(){
                var current=document.getElementsByClassName("active");
                current[0].className=current[0].className.replace("active","");
                this.className+=" active";
            });}
        },3000);
            return(
            <header id="Nav" className="nav-container">
                <main className="tag">
                    <h1 className="logo">Kamali</h1>
                </main>
                <input type="checkbox" id="menu" />
                <label for="menu"><IoMdMenu id="menuBar" /><IoMdClose id="closeBar" /></label>
                <nav className="page">
                    <a className="link active" href="#home">Home</a>
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