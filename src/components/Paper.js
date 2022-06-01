import React from 'react';
import '../index.css';
import paperImg from '../images/icon-paper.svg';

const Paper = ({classList, clickable, onClick}) => {
    return (
        <img //absolute -top-10 -left-10 z-2
            className={`${
                clickable ? 'cursor-pointer hover:animate-pulse' : ''
            } ${classList} gamechoice justify-self-center self-center bg-white border-blue-500 border-solid border-8 rounded-full p-10`}
            src={paperImg}
            alt="paper"
            type="Paper"
            onClick={onClick}
        />
    );
};

export default Paper;
