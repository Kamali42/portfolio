import "./home.css";
import my from "./assets/kamalihome.jpg";
// import camera from "./assets/camera.png";
import { FaInstagram, FaGithub, FaLinkedinIn } from "react-icons/fa";
export default function Home() {
    return (
            <div id="home" className="home-container">

                <aside className="con">
                    <span className="small white">HELLO</span>
                    <h1 className="white same">Hay! I'M KAMALI</h1>
                    <h1 className="edit same">I'M A WEB <span className="letter">&nbsp;</span></h1>
                    <p className="white">People tend to think of the web as a way to get information or perhaps as a place to carry out ecommerce. But really, the web is about accessing applications. Think of each website as an application, and every single click, every single interaction with that site, is an opportunity to be on the very latest version of that application.</p>
                    <div className="btns">
                        <button className="home-btn h white">GET IN TOUCH &rarr;</button>
                        <aside> 
                            <a href="https://www.instagram.com/pikachu.2305_pk/" title="Instagram"><button className="i icon"><FaInstagram /></button></a>
                            <a href="https://github.com/Kamali42" title="GitHub"><button className="g icon"><FaGithub /></button></a>
                            <a href="https://www.linkedin.com/in/kamali-p-bb764627a/" title="LinkedIn"><button className="l icon"><FaLinkedinIn /></button></a>
                        </aside>
                    </div>
                </aside>
                <aside className="camera">
                    <img src={my} className="my" alt="My Profile" />
                </aside>
            </div>
    )
}