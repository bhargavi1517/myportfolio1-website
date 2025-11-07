import React from "react";
import './About.css'
import theme_pattern from "../../assets/theme_pattern.svg"
import profile_img from '../../assets/about_profile.jpeg'

const About = () => {
    return (
        <div id='about' className="about">
            <div className="about-title">
            <h1>About me </h1>
            <img src={theme_pattern} alt="" />
            </div>
            <div className="about-section">
                <div className="about-left">
                    <img src={profile_img} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>I’m Bhargavi Jadhav, a passionate AI & Data Science Engineer in the making, driven by curiosity and creativity.</p>
                        <p>I love crafting intelligent digital experiences — blending data, design, and innovation to bring ideas to life. </p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>Programming Langauges: Python, C++ & SQL</p><hr style={{width:"50%"}}/></div>
                        <div className="about-skill"><p>Web & Framework: Django, React.js.</p><hr style={{width:"70%"}}/></div>
                        <div className="about-skill"><p>Data & Analytics Tools: PowerBI, Excel and Tableau.</p><hr style={{width:"60%"}}/></div>
                        <div className="about-skill"><p>Core Competencies: Analytical Thinking, Communication & Presentation, Teamwork, Leadership, Creativity and Innovation.</p><hr style={{width:"50%"}}/></div>
                    </div>
                </div>
            </div>
            <div className="about-achievements">
                <div className="about-achievement">
                    <h1>2+</h1>
                    <p>YEARS OF EXPLORATION & LEARNING</p>
                </div>
                <hr />
                 <div className="about-achievement">
                    <h1>5+</h1>
                    <p>PROJECTS COMPLETED</p>
                </div>
                <hr />
                 <div className="about-achievement">
                    <h1>1+</h1>
                    <p>RESEARCH PAPERS PUBLISHED</p>

                </div>

            </div>

        </div>

    )
}

export default About
