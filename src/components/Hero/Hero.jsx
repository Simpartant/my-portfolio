import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

function Hero() {
    return (
        <div id='home' className='hero'>
            <div className="hero-profile-img">
                <img src={profile_img} alt="" />
            </div>
            <h1><span>I'm Son Ta Xuan Hoang,</span> Front End Developer based in Viet Nam.</h1>
            <p>I am a Front End Developer from Ho Chi Minh city, Viet Nam with 4+ years of experience in multiple companies link Bosch Global Software Technologies, Contemi Solution,...</p>
            <div className="hero-action">
                <div className="hero-connect">
                    <AnchorLink className='anchor-link' offset={50} href='#contact'

                    >Connect with me</AnchorLink>
                </div>
                <div className="hero-resume">
                    My Resume
                </div>
            </div>
        </div>
    )
}

export default Hero