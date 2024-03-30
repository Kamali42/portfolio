import React, { Component } from 'react';
import './project.css';
import Book from './assets/book.webp';
import Kit from './assets/kit.jpg';
import Pet from './assets/pet store.webp';
import Port from './assets/port.jpg';
import { FaArrowAltCircleRight } from "react-icons/fa";

export default class Project extends Component {
    render() {
        return (
            <div id='project'>
                <main className="heading">
                    <h1 className="outer">PROJECT</h1>
                    <div className="head">
                        <h2 className="inner">PROJECT</h2>
                        <hr className="hr"></hr>
                    </div>
                </main>
                <main className='p_2'>
                    <div className='pro-div'>
                        <div className='pro-img'>
                            <img src={Book} alt='Book Master' className='book' />
                        </div>
                        <div className='pro-cont'>
                            <aside>
                                <h1>Book Master based on E-commerse</h1>
                                <p>Web Design</p>
                            </aside>
                            <a href="https://kamali42.github.io/Book-Master/"><FaArrowAltCircleRight title="Project link" className='pro-arr' /></a>
                        </div>
                    </div>
                    <div className='pro-div'>
                        <div className='pro-img'>
                            <img src={Kit} alt='kitchen things' className='book' />
                        </div>
                        <div className='pro-cont'>
                            <aside>
                                <h1>Nestasia kitchen based on E-commerse</h1>
                                <p>Web Design </p>
                            </aside>
                            <a href=' https://kamali42.github.io/Group-projects/'><FaArrowAltCircleRight title="Project link" className='pro-arr' /></a>
                        </div>
                    </div>
                    <div className='pro-div'>
                        <div className='pro-img'>
                            <img src={Pet} alt='Book Master' className='book' />
                        </div>
                        <div className='pro-cont'>
                            <aside>
                                <h1>Pet Store using Product</h1>
                                <p>Web Design</p>
                            </aside>
                            <a href="#"><FaArrowAltCircleRight title="Project link" className='pro-arr' /></a>
                        </div>
                    </div>
                    <div className='pro-div'>
                        <div className='pro-img'>
                            <img src={Port} alt='Book Master' className='book' />
                        </div>
                        <div className='pro-cont'>
                            <aside>
                                <h1>Portfolio My profile Design</h1>
                                <p>Web Design</p>
                            </aside>
                            <a href="#"><FaArrowAltCircleRight title="Project link" className='pro-arr' /></a>
                        </div>
                    </div>
                </main>
            </div>
        )
    }
}