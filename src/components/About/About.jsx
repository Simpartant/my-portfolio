import React from 'react'
import './About.css'
// import theme_pattern from '../../assets/theme_pattern.png'
import profile_img from '../../assets/profile_img.png'

const About = () => {
    return (
        <div id='about' className='about'>
            <div className="about-title">
                <h1>About me</h1>
                {/* <img src={theme_pattern} alt="" /> */}
            </div>
            <div className="about-selections">
                <div className="about-left">
                    <div className="about-img">

                        <img src={profile_img} alt="" />
                    </div>
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>I am an experienced Frontend Developer with over a decade of professional expertise in the field. Throughout my carreer, I have had the priviege of collaborating with prestigious organizations, contributing to their success and growth.</p>
                        <p>My passion for Front End development is not only reflected in my extensive experinece but also in the enthusiasm and dedication I bring to each project.</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill">
                            <p>HTML & CSS</p><hr style={{ width: '70%' }} />
                        </div>
                        <div className="about-skill">
                            <p>Javascript</p><hr style={{ width: '90%' }} />
                        </div>
                        <div className="about-skill">
                            <p>Typescript</p><hr style={{ width: '60%' }} />
                        </div>
                        <div className="about-skill">
                            <p>Angular</p><hr style={{ width: '55%' }} />
                        </div>
                        <div className="about-skill">
                            <p>React JS</p><hr style={{ width: '50%' }} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-achievements">
                <div className="about-achievement">
                    <h1>4+</h1>
                    <p>YEARS OF EXPERIENCE</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>10+</h1>
                    <p>PROJECTS COMPLETED</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>5+</h1>
                    <p>HAPPY CLIENTS</p>
                </div>
            </div>
        </div>
    )
}

export default About