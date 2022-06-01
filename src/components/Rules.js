import React, {useState} from 'react';
import '../index.css';
import img_rules from '../images/image-rules.svg';
import icon_close from '../images/icon-close.svg';

export default function Rules() {
    const [rulesVisible, toggleRules] = useState(false);

    const rulesClick = () => {
        toggleRules(!rulesVisible);
        document.querySelector('#root').classList.add('overlay');
    };

    const closeClick = () => {
        toggleRules(!rulesVisible);
        document.querySelector('#root').classList.remove('overlay');
    };

    return (
        <React.StrictMode>
            <button
                onClick={rulesClick}
                className="border-solid border-2 border-white hover:bg-white hover:text-textDark uppercase pt-2 pb-2 pl-10 pr-10 rounded-lg tracking-widest" // absolute bottom-5 right-5
                style={{cursor: rulesVisible ? 'not-allowed' : 'pointer'}}
                disabled={rulesVisible}
            >
                Rules
            </button>

            <div className="bg-white rounded-md p-8 z-3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" style={{display: rulesVisible ? 'grid' : 'none'}}>
                <div className="text-textDark font-bold justify-self-start self-center text-3xl uppercase row-start-1 row-end-1">Rules</div>
                <img onClick={closeClick} className="justify-self-end self-center cursor-pointer row-start-1 row-end-1" src={icon_close} alt="close" />
                <img className="justify-self-center self-center col-span-2 pt-10" src={img_rules} alt="rules" />
            </div>
        </React.StrictMode>
    );
}
