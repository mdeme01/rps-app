import React from 'react';
import '../index.css';

const Paper = ({classList, clickable, onClick}) => {
    return (
        <div //absolute -top-10 -left-10 //hover:animate-pulse when clickable?
            className={`${
                clickable ? 'cursor-pointer' : ''
            } ${classList} gamechoice paper justify-self-center self-center bg-white border-blue-500 border-solid rounded-full p-16`}
            type="Paper"
            onClick={onClick}
        ></div>
    );
};

export default Paper;
