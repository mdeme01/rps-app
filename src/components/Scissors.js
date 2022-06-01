import React from 'react';
import '../index.css';
import scissorsImg from '../images/icon-scissors.svg';

const Scissors = ({classList, clickable, onClick}) => {
    return (
        <img //absolute -top-10 -right-10
            className={`${
                clickable ? 'cursor-pointer hover:animate-pulse' : ''
            } ${classList} gamechoice justify-self-center self-center bg-white border-yellow-500 border-solid border-8 rounded-full p-10`}
            src={scissorsImg}
            alt="scissors"
            type="Scissors"
            onClick={onClick}
        />
    );
};

export default Scissors;
