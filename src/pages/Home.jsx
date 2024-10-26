import React from 'react';
import Webdev from '../assets/webdev.png';
import './styles/home.css';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <div className="home-container">
                <div className='section-one'>
                    <h2>Hey There, I’m</h2>
                    <h1>Nagaraj Sangam</h1>
                    <p className="role">Web and App Developer</p>
                    <p className="description">
                        An innovative self-taught Web Developer and Mobile App Developer,<br />
                        I'm passionate about crafting dynamic user interfaces and delivering engaging experiences that leave a lasting impression.
                    </p>
                </div>

                <div className='section-two'>
                    <img src={Webdev} alt="" id='image' />
                </div>
            </div>
        </>
    )
}

export default Home;