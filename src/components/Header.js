import React from 'react';
import logo from '../images/logo.svg';
import '../index.css';

function Header(props) {
    return (
        <header className="grid grid-rows-1 grid-cols-3 place-content-center gap-3 rounded-md border-2 border-solid border-white p-4 m-4 mt-10 w-auto self-start justify-self-center">
            <img className="place-self-center" src={logo} alt="logo" />
            <div className="grid place-content-center col-start-3 place-self-center w-full h-full rounded-md bg-white text-textDark">
                <div className="place-self-center uppercase text-xl tracking-widest">
                    Score
                </div>
                <div className="place-self-center text-6xl">{props.score}</div>
            </div>
        </header>
    );
}

export default Header;
