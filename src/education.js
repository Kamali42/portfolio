import React, { Component } from 'react';
import './education.css';
import { FaGraduationCap } from "react-icons/fa6";

export default class Edu extends Component {
    render() {
        return (
            <div id='edu'>
                <main className="heading">
                    <h1 className="outer">EDUCATION</h1>
                    <div className="head">
                        <h2 className="inner">EDUCATION</h2>
                        <hr className="hr"></hr>
                    </div>
                </main>
                <main className='e-div'>
                    <figcaption>
                        <div className='education'>
                            <div className='e-icon'>
                                <FaGraduationCap className='edu-icon' />
                            </div>
                            <div>
                                <div className='e-cont'>
                                    <div className='circle point'></div>
                                    <h2 className='title'>SSLC</h2>
                                    <p>2017 - 2018</p>
                                    <h3>Angavai Sangavai Govt Hr Sec School,Thirukovilur</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ligula nulla, tincidunt id faucibus sed, suscipit feugiat turpis.</p>
                                </div>
                            </div>
                        </div>
                        <div className='education'>
                            <div>
                                <div className='e-cont'>
                                    <div className='circle point'></div>
                                    <h2 className='title'>HSC</h2>
                                    <p>2019 - 2020</p>
                                    <h3>Angavai Sangavai Govt Hr Sec School,Thirukovilur</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ligula nulla, tincidunt id faucibus sed, suscipit feugiat turpis.</p>
                                </div>
                            </div>
                        </div>
                    </figcaption>
                    <figcaption>
                        <div className='education'>
                            <div>
                                <div className='e-cont'>
                                    <div className='circle point'></div>
                                    <h2 className='title'>Bachelor of Computer Application</h2>
                                    <p>2020 - 2023</p>
                                    <h3>Valliammai Womens College of arts and science </h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ligula nulla, tincidunt id faucibus sed, suscipit feugiat turpis.</p>
                                </div>
                            </div>
                        </div>
                        <div className='education'>
                            <div>
                                <div className='e-cont'>
                                    <div className='circle point'></div>
                                    <h2 className='title'>Front-end Development</h2>
                                    <p>2023-2024</p>
                                    <h3>Login360 Technology</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ligula nulla, tincidunt id faucibus sed, suscipit feugiat turpis.</p>
                                </div>
                            </div>
                        </div>

                    </figcaption>
                </main>
            </div>
        )
    }
}