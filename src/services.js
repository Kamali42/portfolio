import React, { Component } from 'react';
import { CgWebsite, CgCardHearts } from "react-icons/cg";
import { MdDeveloperMode, MdAppSettingsAlt } from "react-icons/md";
import { FaLaptopCode } from "react-icons/fa";
import { RiFileCodeFill } from "react-icons/ri";
import './services.css';

export default class Service extends Component {
    render() {
        return (
            <div id='service'>
                <main className="heading">
                    <h1 className="outer">SERVICES</h1>
                    <div className="head">
                        <h2 className="inner">SERVICES</h2>
                        <hr className="hr"></hr>
                    </div>
                </main>
                <main className='service_box'>
                    <aside>
                        <CgWebsite className='service_icon note' />
                        <h1 className='service_line note'>Web Development</h1>
                        <p className='service_para'>Web Development can range from developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services.</p>
                    </aside>
                    <aside>
                        <MdDeveloperMode className='service_icon note' />
                        <h1 className='service_line note'>Web Design</h1>
                        <p className='service_para'>Web design refers to the design of websites. It usually refers to the user experience aspects of website development rather than software development.</p>
                    </aside>
                    <aside>
                        <RiFileCodeFill className='service_icon note' />
                        <h1 className='service_line note'>Responsive Design</h1>
                        <p className='service_para'>a design approach that addresses the range of device sizes, enabling automatic adaption to the screen,whether the content is viewed on a tablet,phone,television, or watch.</p>
                    </aside>
                    <aside>
                        <MdAppSettingsAlt className='service_icon note' />
                        <h1 className='service_line note'>App Design</h1>
                        <p className='service_para'>In the web application design process, users are the top priority. It focuses on the following, How users interact with the web app. Whether the app meets user needs ...</p>
                    </aside>
                    <aside>
                        <FaLaptopCode className='service_icon note' />
                        <h1 className='service_line note'>Web Application</h1>
                        <p className='service_para'>A web application web app is an application program that is stored on a remote server and delivered over the internet through a browser nterface. Web...</p>
                    </aside>
                    <aside>
                        <CgCardHearts className='service_icon note' />
                        <h1 className='service_line note'>UI/UX</h1>
                        <p className='service_para '>UI design involves the look of a product ---namely,the visual components and interactive elements that contribute to a strong user experience. Meanwhile,UX...</p>
                    </aside>
                </main>
            </div>
        )
    }
}