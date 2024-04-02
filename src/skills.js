import React, { Component } from 'react';
import './skill.css';

export default function Skill() {
        return (
            <div id='skills'>
                <main className="heading">
                    <h1 className="outer">MY SKILL</h1>
                    <div className="head">
                        <h2 className="inner">MY SKILL</h2>
                        <hr className="hr"></hr>
                    </div>
                </main>
                <main className='skills'>
                    <article className='skill-cont'>
                        <h1 className='fig-h1 sk'>All the skills that I have in that field of work are mentioned.</h1>
                        <p className='cont'>A web designer's job is to build the visual appeal for a website. Meanwhile, a web developer writes code and builds the back-end functionality. It's important to understand the difference between these two roles so you can find the right person for your projects.</p>
                    </article>
                    <article className='profile-skills'>
                        <div class="wrapper">
                            <div class="skill">
                                <p>HTML5</p>
                                <div class="skill-bar skill1 wow slideInLeft animated">
                                    <span class="skill-count1">100%</span>
                                </div>
                            </div>
                            <div class="skill">
                                <p>CSS3</p>
                                <div class="skill-bar skill2 wow slideInLeft animated">
                                    <span class="skill-count2">100%</span>
                                </div>
                            </div>
                            <div class="skill">
                                <p>BOOTSTRAP</p>
                                <div class="skill-bar skill3 wow slideInLeft animated">
                                    <span class="skill-count3">100%</span>
                                </div>
                            </div>
                            <div class="skill">
                                <p>JAVASCRIPT</p>
                                <div class="skill-bar skill4 wow slideInLeft animated">
                                    <span class="skill-count4">90%</span>
                                </div>
                            </div>
                            <div class="skill">
                                <p>REACT JS</p>
                                <div class="skill-bar skill5 wow slideInLeft animated">
                                    <span class="skill-count5">90%</span>
                                </div>
                            </div>
                            <div class="skill">
                                <p>GITHUB</p>
                                <div class="skill-bar skill6 wow slideInLeft animated">
                                    <span class="skill-count6">90%</span>
                                </div>
                            </div>
                        </div>
                    </article>
                </main>
            </div>
        )
    }