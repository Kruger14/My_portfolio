import React from 'react';
import './styles/projects.css';
import Portfolio from "../assets/portfolio.png";
import Ecom from "../assets/ecom.png";
import Cipher from "../assets/cipher.png";
import Tasker from "../assets/tasks.png";
import { FiArrowRight } from 'react-icons/fi';

const Projects = () => {
    return (
        <>
            <div className='project-container'>
                <h2 className='project-page-title'>Explore My Projects</h2>
                <div className="card-container-new">
                    <div className="mobile-mockup">
                        <img
                            src={Ecom}
                            alt='image'
                            className="mockup-image"
                        />
                    </div>

                    <div className="description">
                        <h1>E-commerce</h1>
                        <p>
                            Manage eCommerce state with Redux for seamless cart, filters. Use JSON to store products, users, and orders for smooth data flow.  </p>
                        <a href='https://github.com/Kruger14/eshop' target='_blank'>
                            <button className="icon-button">
                                <FiArrowRight size={24} />
                            </button>
                        </a>
                    </div>
                </div>

                <div className="card-container-new">
                    <div className="description">
                        <h1>Portfolio</h1>
                        <p>
                            Developed a portfolio website to showcase skills, projects, and achievements.
                            Implemented responsive design for optimal viewing on all devices. Integrated contact features to connect with potential clients or employers.
                        </p>
                        <button className="icon-button">
                            <FiArrowRight size={24} />
                        </button>
                    </div>
                    <div className="mobile-mockup">
                        <img
                            src={Portfolio}
                            alt='image'
                            className="mockup-image"
                        />
                    </div>
                </div>

                <div className="card-container-new">
                    <div className="mobile-mockup">
                        <img
                            src={Cipher}
                            alt='image'
                            className="mockup-image"
                        />
                    </div>
                    <div className="description">
                        <h1>Cipher</h1>
                        <p>
                            Developed a password management application using SQLite for secure storage and retrieval of credentials. The
                            application allows users to add, update, and delete passwords efficiently. Integrated a "Save as TXT" feature, enabling users to
                            export their password data to a text file for backup purposes.
                        </p>
                        <a href='https://github.com/Kruger14/cipher' target='_blank'>
                            <button className="icon-button">
                                <FiArrowRight size={24} />
                            </button>
                        </a>
                    </div>
                </div>

                <div className="card-container-new">
                    <div className="description">
                        <h1>Tasker</h1>
                        <p>
                            Developed a to-do application to help users efficiently manage tasks and stay organized
                        </p>
                        <a href='https://github.com/Kruger14/mytodo_flutterapp' target='_blank'>
                            <button className="icon-button">
                                <FiArrowRight size={24} />
                            </button>
                        </a>
                    </div>
                    <div className="mobile-mockup">
                        <img
                            src={Tasker}
                            alt='image'
                            className="mockup-image"
                        />
                    </div>
                </div>
            </div >
        </>
    )
}

export default Projects