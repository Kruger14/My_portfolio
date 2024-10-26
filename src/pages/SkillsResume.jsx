import React from 'react';
import './styles/skillsresume.css';
import Ract from '../assets/react.png';
import Sql from '../assets/sql.png';
import Git from '../assets/git.png';
import Java from '../assets/java.png';
import NodeJS from '../assets/Nodejs.png';
import Javascript from '../assets/js.png';
import Spring from '../assets/spring.png';
import Express from '../assets/express.png';
import Flutter from '../assets/flutter.png';
import Dart from '../assets/dart.png';
import Htmlcss from '../assets/htmlcss.png';
import Chatgpt from '../assets/chatgpt.png';
import { TiPencil } from "react-icons/ti";

const SkillsResume = () => {

    return (
        <>
            <div className='Skills'>
                <div className='left-container'>
                    <h2 id='title'>Skills</h2>
                    <h1>Let’s Explore Popular</h1>
                    <h1>Skills & Experience</h1>
                    <p>Using a combination of cutting-edge technologies and reliable open-source software I build user-focused,<br />
                        performant apps and websites for smartphones, tablets, and desktops.
                    </p>


                    <h2 id='exp-title'>Personal Project based Experience</h2>
                    <div className="container-timeline">
                        <div className="timeline">
                            <TiPencil color='black' size={25} id='round' />
                            <div className="line"></div>
                        </div>
                        <div className="timeline-card">
                            <a>Frontend developer</a><span>2022-2023 (Self-taught)</span>
                            <ul id='list'>
                                <li>Design and development of scalable user interfaces using React, vite, HTML5, CSS3, and JavaScript.</li>
                                <li>Responsive Design Implementation</li>
                            </ul>
                        </div>
                    </div>
                    <div className="container-timeline">
                        <div className="timeline">
                            <TiPencil color='black' size={25} id='round' />
                            <div className="line"></div>
                        </div>
                        <div className="timeline-card">
                            <a>Full stack developer</a><span>2023-2024 (Self-taught)</span>
                            <ul id='list'>
                                <li>Development of responsive and dynamic websites using ReactJS, ExpressJS, MySQL and Node.js.</li>
                                <li>Creation of user-friendly interfaces and integration of RESTful APIs for enhanced functionality.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="container-timeline">
                        <div className="timeline">
                            <TiPencil color='black' size={25} id='round' />
                            <div className="line"></div>
                            <div className='end'></div>
                        </div>
                        <div className="timeline-card">
                            <a>Mobile Application developer</a>
                            <span>2023-2024 (Self-taught)</span>
                            <ul id='list'>
                                <li>Built dynamic, user-friendly apps with seamless performance across iOS and Android platforms</li>
                                <li>Development of cross-platform mobile applications using  Expo and Flutter.</li>
                            </ul>
                        </div>
                    </div>

                </div>


                <div className='right-container'>
                    <div className='card'>
                        <div className='icon'>
                            <img src={Java} alt="java" className='iconpng' />
                        </div>
                        <p>Java</p>
                        <div className='percentage'>
                            <a>75%</a>
                        </div>
                    </div>

                    <div className='card'>
                        <div className='icon'>
                            <img src={Javascript} alt="js" className='iconpng' />
                        </div>
                        <p>JavaScript</p>
                        <div className='percentage'>
                            <a>70%</a>
                        </div>
                    </div>

                    <div className='card'>
                        <div className='icon'>
                            <img src={NodeJS} alt="nodejs" className='iconpng' />
                        </div>
                        <p>Node JS</p>
                        <div className='percentage'>
                            <a>70%</a>
                        </div>
                    </div>

                    <div className='card'>
                        <div className='icon'>
                            <img src={Ract} alt="react" className='iconpng' />
                        </div>
                        <p id='native'>React & React Native</p>
                        <div className='percentage'>
                            <a>75%</a>
                        </div>
                    </div>

                    <div className='card'>
                        <div className='icon'>
                            <img src={Sql} alt="sql" className='iconpng' />
                        </div>
                        <p>Sql</p>
                        <div className='percentage'>
                            <a>55%</a>
                        </div>
                    </div>

                    <div className='card'>
                        <div className='icon'>
                            <img src={Express} alt="express" className='iconpng' />
                        </div>
                        <p>Express</p>
                        <div className='percentage'>
                            <a>75%</a>
                        </div>
                    </div>

                    <div className='card'>
                        <div className='icon'>
                            <img src={Spring} alt="spring" className='iconpng' />
                        </div>
                        <p>Spring-boot</p>
                        <div className='percentage'>
                            <a>70%</a>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='icon'>
                            <img src={Flutter} alt="flutter" className='iconpng' />
                        </div>
                        <p>Flutter</p>
                        <div className='percentage'>
                            <a>55%</a>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='icon'>
                            <img src={Git} alt="git" className='iconpng' />
                        </div>
                        <p>Git</p>
                        <div className='percentage'>
                            <a>50%</a>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='icon'>
                            <img src={Dart} alt="Dart" className='iconpng' />
                        </div>
                        <p>Dart</p>
                        <div className='percentage'>
                            <a>40%</a>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='icon'>
                            <img src={Htmlcss} alt="Htmlcss" className='iconpng' />
                        </div>
                        <p>Html and css</p>
                        <div className='percentage'>
                            <a>80%</a>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='icon'>
                            <img src={Chatgpt} alt="Chatgpt" className='iconpng' />
                        </div>
                        <p>Chatgpt</p>
                        <div className='percentage'>
                            <a>100%</a>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default SkillsResume;