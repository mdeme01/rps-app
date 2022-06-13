import React from 'react';
import '../index.css';

const GameChoice = ({clickable, onClick, type}) => {
    return <div className={`${clickable ? 'clickable' : ''} ${type} gamechoice`} type={type} onClick={onClick}></div>;
};

export default GameChoice;
