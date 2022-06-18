import React from 'react';

const GameChoice = ({clickable, onClick, type}) => {
    return <div className={`${clickable ? 'clickable' : ''} ${type} gamechoice`} type={type} onClick={onClick}></div>;
};

export default GameChoice;
