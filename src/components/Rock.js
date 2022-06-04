import React from 'react';
import '../index.css';

const Rock = ({classList, clickable, onClick}) => {
    return (
        <div //absolute bottom-0 left-20 //hover:animate-pulse when clickable?
            className={`${
                clickable ? 'cursor-pointer' : ''
            } ${classList} gamechoice rock justify-self-center self-center bg-white border-red-500 border-solid rounded-full p-16`}
            type="Rock"
            onClick={onClick}
        ></div>
    );
};

export default Rock;
