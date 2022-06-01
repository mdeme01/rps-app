import React from 'react';
import '../index.css';
import rockImg from '../images/icon-rock.svg';

const Rock = ({classList, clickable, onClick}) => {
    return (
        <img //absolute bottom-0 left-20
            className={`${
                clickable ? 'cursor-pointer hover:animate-pulse' : ''
            } ${classList} gamechoice justify-self-center self-center bg-white border-red-500 border-solid border-8 rounded-full p-10`}
            src={rockImg}
            alt="rock"
            type="Rock"
            onClick={onClick}
        />
    );
};

export default Rock;
