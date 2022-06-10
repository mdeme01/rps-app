import React, {useEffect, useState} from 'react';
import rulesImg from '../images/image-rules-bonus.svg';
import closeIcon from '../images/icon-close.svg';
import '../index.css';

function Footer() {
    const [rulesDisplayed, toggleRules] = useState(false);

    useEffect(() => {
        const overlay = document.querySelector('div.overlay');
        rulesDisplayed ? (overlay.style.display = 'block') : (overlay.style.display = 'none');
    });

    return (
        <footer className="grid grid-cols-1 gap-3 place-content-center self-end justify-self-center w-full mb-5 text-center">
            <button
                onClick={() => toggleRules(true)}
                className={`${
                    rulesDisplayed ? 'cursor-not-allowed' : 'cursor-pointer'
                } border-solid border-2 border-white hover:bg-white hover:text-textDark uppercase pt-2 pb-2 pl-10 pr-10 rounded-lg tracking-widest self-center justify-self-center w-auto md:justify-self-end md:mr-5`}
            >
                Rules
            </button>

            <div
                className={`${
                    rulesDisplayed ? 'grid' : 'hidden'
                } bg-white rounded-md p-8 absolute z-30 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 grid-cols-1 w-full h-full md:grid-cols-2 md:w-auto md:h-auto`}
            >
                <div className="text-textDark text-3xl font-bold place-self-center uppercase md:row-start-1 md:row-end-1 md:col-start-1 md:col-end-1 md:justify-self-start">Rules</div>
                <img className="place-self-center col-span-2 pt-10 md:row-start-2 md:row-end-2" src={rulesImg} alt="rules" />
                <img
                    onClick={() => toggleRules(false)}
                    className="place-self-center cursor-pointer md:row-start-1 md:row-end-1 md:col-start-2 md:col-end-2 md:justify-self-end"
                    src={closeIcon}
                    alt="close"
                />
            </div>
        </footer>
    );
}

export default Footer;
