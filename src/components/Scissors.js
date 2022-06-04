import React from 'react';
import '../index.css';

const Scissors = ({classList, clickable, onClick}) => {
    return (
        <div //absolute -top-10 -right-10 //hover:animate-pulse when clickable?
            className={`${
                clickable ? 'cursor-pointer' : ''
            } ${classList} gamechoice scissors justify-self-center self-center bg-white border-yellow-500 border-solid rounded-full p-16`}
            type="Scissors"
            onClick={onClick}
        ></div>
    );
};

export default Scissors;
