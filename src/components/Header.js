import React from 'react';
import img_logo from '../images/logo.svg';

function Header(props) {
    return (
        <header>
            <img src={img_logo} alt="logo" />
            <div className="score">
                <div>Score</div>
                <div>{props.score}</div>
            </div>
        </header>
    );
}

export default Header;
