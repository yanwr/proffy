import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

import logo from '../../assets/logo.svg';
import goBackIcon from '../../assets/icons/back.svg';

interface Props {
    title: string;
    description?: string;
};

const NavHeaderComponent: React.FC<Props> = (props) => {
    const { title, description } = props;
    return(
        <header className="header-container">
            <div className="top-bar-container">
                <Link to="/">
                    <img src={goBackIcon} alt="Go back"/>
                </Link>
                <img src={logo} alt="Proffy"/>
            </div>
            <div className="header-content">
                <strong>{title}</strong>
                { description && <p>{description}</p>}
                {props.children}
            </div>
        </header>
    );
};

export default NavHeaderComponent;