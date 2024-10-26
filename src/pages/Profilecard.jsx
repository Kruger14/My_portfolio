import React from 'react';
import Image from '../assets/img.jpg';
import './styles/profilecard.css';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaStackOverflow } from "react-icons/fa6";
import { IoIosDownload } from "react-icons/io";
import { Link } from 'react-router-dom';

const Profilecard = () => {
    return (
        <div className="profile-card">
            <div className="profile-card-header">
                <img className="profile-image" src={Image} alt="Profile Picture" />
            </div>
            <div className="profile-card-body">
                <h2 className="profile-name">Nagaraj Sangam</h2>
                <p className="profile-role">Web And App Developer</p>
                <div className="profile-links">
                    <a href="https://github.com/Kruger14" target='_blank' className="profile-link"><FaGithub color='black' size={25} /> </a>
                    <a href="https://www.linkedin.com/in/nagaraj-sangam-10a631266?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blank' className="profile-link"><FaLinkedin color='black' size={25} /></a>
                    <a href="https://stackoverflow.com/" target='_blank' className="profile-link"><FaStackOverflow color='black' size={25} /></a>
                </div>
            </div>
            <div className="profile-card-info">
                <Link to='/'>
                    <div className="profile-info-item">
                        <span className="profile-info-text">Home</span>
                    </div>
                </Link>
                <Link to='/projects'>
                    <div className="profile-info-item">
                        <span className="profile-info-text">Projects</span>
                    </div>
                </Link>
                <Link to='/skills'>
                    <div className="profile-info-item">
                        <span className="profile-info-text">Skills</span>
                    </div>
                </Link>
                <Link to='/contact'>
                    <div className="profile-info-item">
                        <span className="profile-info-text">Contact</span>
                    </div>
                </Link>
            </div>

            <div className="profile-card-footer">
                <button className="profile-button">
                    <div>
                        <IoIosDownload color='black' size={25} />
                    </div>
                    <a href="src\assets\Nagarajcv.pdf" download="Nagarajcv.pdf">
                        Download CV
                    </a>
                </button>
            </div>
        </div >
    );
};

export default Profilecard;