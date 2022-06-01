import React from 'react';
import logo from '../images/logo.svg';
import '../index.css';
/*
function Header() {
    return (
        <header className="mt-5 justify-self-center self-start">
            <h1>Rock-Paper-Scissors</h1>
        </header>
    );
}
*/

function Header(props) {
    return (
        <div className="grid grid-rows-1 grid-cols-2 place-content-center gap-3 rounded-md border-2 border-solid border-white p-5 w-auto self-start justify-self-center mt-10">
            <img className="place-self-center" src={logo} alt="logo" />
            <div className="grid place-content-center place-self-center w-full h-full rounded-md bg-white text-textDark">
                <div className="place-self-center uppercase text-xl tracking-widest">Score</div>
                <div className="place-self-center text-6xl">{props.score}</div>
            </div>
        </div>
    );
}

export default Header;
