import React, { useState, useEffect } from 'react';
import { loadTotalConnections } from '../../services/ConnectionService';
import { Link } from 'react-router-dom';
import './styles.css';

import logo from '../../assets/logo.svg';
import landingLogo from '../../assets/landing.svg'
import studyIcon from '../../assets/icons/study.svg';
import giveClassesIcon from '../../assets/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/icons/purple-heart.svg';

export default function LandingPage() {

    const [totalConnection, setTotalConneciton] = useState<number | any>(0);

    useEffect(() => {
        loadTotalConnections()
            .then(data => setTotalConneciton(data))
            .catch(ex => setTotalConneciton(null));
    }, []);

    return (
        <div id="landing-container">
            <div id="landing-content" className="container">
                <div className="logo-container">
                    <img src={logo} alt="Proffy" />
                    <h2>Your online study platform</h2>
                </div>
                <img 
                    className="image-landing"
                    src={landingLogo} 
                    alt="Proffy's platform" 
                />
                <div className="btns-container">
                    <Link to="/teacher/list" className="study-btn">
                        <img src={studyIcon} alt="Study" />
                        To Study
                    </Link>
                    <Link to="/teacher/form" className="give-classes-btn">
                        <img src={giveClassesIcon} alt="Study" />
                        Give Classes
                    </Link>
                </div>
                <span className="total-connections-container">
                    Total of {totalConnection != null || undefined ? totalConnection : "..."} connections <img src={purpleHeartIcon} alt="Purple Heart"/>
                </span>
            </div>
        </div>
    );
};