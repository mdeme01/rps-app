import React, {useEffect, useState} from 'react';
import img_rules from '../images/image-rules-bonus.svg';
import img_close from '../images/icon-close.svg';

function Footer() {
    const [rulesDisplayed, toggleRules] = useState(false);

    useEffect(() => {
        const overlay = document.querySelector('.overlay');
        overlay.classList.toggle('active', rulesDisplayed);
    });

    return (
        <footer>
            <button onClick={() => toggleRules(true)} className="rules-button">
                Rules
            </button>
            <div className="rules" hidden={!rulesDisplayed}>
                <div>Rules</div>
                <img src={img_rules} alt="rules" />
                <img onClick={() => toggleRules(false)} src={img_close} alt="close" />
            </div>
        </footer>
    );
}

export default Footer;
