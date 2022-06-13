import React from 'react';
import '../index.css';

const GameChoice = ({classList, clickable, onClick, type}) => {
    return <div className={`${clickable ? 'clickable' : ''} ${classList} ${type} gamechoice`} type={type} onClick={onClick}></div>;
};

export default GameChoice;
