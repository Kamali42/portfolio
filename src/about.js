import React, { Component } from "react";
import Profile from './assets/kamali about.jpg';
import './about.css';
import cv from './assets/Kamali frontend resume.pdf';
import { FaCloudDownloadAlt } from "react-icons/fa";
export default class About extends Component {
    render() {
        return (
            <div id="about">
                <main className="heading">
                    <h1 className="outer">ABOUT ME</h1>
                    <div className="head">
                        <h2 className="inner">ABOUT ME</h2>
                        <hr className="hr"></hr>
                    </div>
                </main>
                <main className="About-content">
                    <figure className="about-img">
                        <img src={Profile} className="about-pic" alt="Profile" />
                    </figure>
                    <figure>
                        <h1 className="fig-h1">Hi There! I'm Kamali</h1>
                        <h1 className="fig2-h1">Front-end Developer</h1>
                        <p>I am a Web Developer with a strong focus on digital branding. web development seeks to attract, inspire, create desires and otivate people to respond to messages, with a view to making a favorable impact.</p>
                        <table>
                            <tr>
                                <td>Birthday</td>
                                <td>:</td>
                                <td>May 23, 2003</td>
                            </tr>
                            <tr>
                                <td>Phone</td>
                                <td>:</td>
                                <td>+91 63745 63049</td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td>:</td>
                                <td className="email"><span>kamaliragul1234</span><span>@gmail.com</span></td>
                            </tr>
                            <tr>
                                <td>Language</td>
                                <td>:</td>
                                <td>Tamil, English</td>
                            </tr>
                            <tr>
                                <td>Freelance</td>
                                <td>:</td>
                                <td>Available</td>
                            </tr>
                        </table>
                        <a href={cv} download className="but cv" title="Download My CV">Download CV <FaCloudDownloadAlt /></a>
                    </figure>
                </main>
            </div>
        )
    }
}