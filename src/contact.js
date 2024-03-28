import React, { Component } from 'react';
import './contact.css'
import { FaUser, FaPhoneAlt} from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaGithubSquare,  FaLinkedin, FaWhatsappSquare } from "react-icons/fa";

export default class Contact extends Component {
    render() {
        return (
            <>
            <div id="contact">
                <main className="heading">
                    <h1 className="outer">CONTACT</h1>
                    <div className="head">
                        <h2 className="inner">CONTACT</h2>
                        <hr className="hr"></hr>
                    </div>
                </main>
                <main className="contact-container">
                    <div class="title">
                        <h1>Let's Discuss Your Project</h1>
                        <p>Always available for freelancing if the right project comes along, Feel free to contact me.</p>
                    </div>
                    <figcaption>
                        <figure>
                            <h1>Contact info</h1>
                            <section>
                                <div>
                                    <h2><IoMdMail /> Email</h2>
                                    <p> kamaliragul1234@gmail.com</p>
                                </div>
                                <div>
                                    <h2><FaPhoneAlt /> Phone</h2>
                                    <p>+91 63745 63049</p>
                                </div>
                                <div>
                                    <h2><FaLocationDot /> Address</h2>
                                    <p>Velachery, Chennai-600 042</p>
                                </div>
                                <aside>
                                    <h4>Visite my social profile and get connected</h4>
                                    <a href="https://github.com/Kamali42" target="_blank"><p><FaGithubSquare className="share" /><span> Github</span></p></a>
                                    <a href="https://www.linkedin.com/in/kamali-p-bb764627a/" target="_blank"><p><FaLinkedin className="share" /><span> Linkedin</span></p></a>
                                    <a href="" target="_blank"><p><FaWhatsappSquare className="share" /><span> Whatsapp</span></p></a>
                                </aside>
                            </section>
                        </figure>
                        <form id="form">
                            <h1>Just say Hello</h1>
                            <section>
                                <div>
                                    <label for="username">USER NAME</label>
                                    <FaUser className="ico" />

                                    <input type="text" name="username" id="username" placeholder="Kamali *" required />
                                    {/* <AiOutlineCheckCircle className="success" />
                                    <AiOutlineExclamationCircle className="failure" />

                                    <div className="error"></div> */}

                                </div>
                                <div>
                                    <label for="email">EMAIL</label>
                                    <IoMdMail className="ico" />

                                    <input type="email" name="email" id="email" placeholder="kamali@gmail.com *" required />

                                    {/* <AiOutlineCheckCircle className="success" />
                                    <AiOutlineExclamationCircle className="failure" />

                                    <div className="error"></div> */}

                                </div>
                            </section>
                            <div>
                                <label for="subject">SUBJECT</label>

                                <input type="text" name="subject" id="subject" placeholder="Subject *" required />

                                {/* <AiOutlineCheckCircle className="success" />
                                <AiOutlineExclamationCircle className="failure" />

                                <div className="error"></div> */}

                            </div>
                            <div>
                                <label for="message">YOUR MESSAGE</label>

                                <textarea name="message" id="message" placeholder="Your message *" rows={4} required />

                                {/* <AiOutlineCheckCircle className="success" />
                                <AiOutlineExclamationCircle className="failure" />

                                <div class="error"></div> */}

                            </div>
                            <button id="btn" type="submit">SEND MESSAGE</button>
                        </form>
                    </figcaption>
                </main>
            </div>
            <footer>
                <p>© 2024. Designed by Kamali. copyright all right reserved.</p>
            </footer>
            </>
        )
    }
}