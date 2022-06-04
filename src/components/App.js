import React, {useState} from 'react';
import '../index.css';
//import triangleBg from '../images/bg-triangle.svg';
//import Rules from './Rules';
import Rock from './Rock';
import Paper from './Paper';
import Scissors from './Scissors';
import Header from './Header';
import Footer from './Footer';

function App() {
    const [player, setPlayer] = useState(null);
    const [house, setHouse] = useState(null);
    const [score, setScore] = useState(0);
    const [gameStarted, setGameStarted] = useState(false);
    const [counterEnded, setCounterEnded] = useState(false);
    const [counterText, setCounterText] = useState(null);
    const [playerDisplayed, setPlayerDisplayed] = useState(false);
    const [houseDisplayed, setHouseDisplayed] = useState(false);
    const [replayDisplayed, setReplayDisplayed] = useState(false);
    const [resultDisplayed, setResultDisplayed] = useState(false);

    /*const timeout = (ms) => {
        return new Promise((resolve) => setTimeout(resolve, ms));
    };*/

    const startGame = async (e) => {
        setGameStarted(true);
        setCounterEnded(true);
        setCounterText(null);
        setPlayerDisplayed(true);
        setHouseDisplayed(true);
        setReplayDisplayed(true);
        setResultDisplayed(true);

        const r = Math.floor(Math.random() * 3);
        const playerChoice = e.target.getAttribute('type');
        const houseChoice = r === 0 ? 'Rock' : r === 1 ? 'Paper' : 'Scissors';

        setPlayer(playerChoice);
        setHouse(houseChoice);

        (playerChoice === 'Rock' && houseChoice === 'Scissors') ||
        (playerChoice === 'Paper' && houseChoice === 'Rock') ||
        (playerChoice === 'Scissors' && houseChoice === 'Paper')
            ? setScore(score + 1)
            : setScore(score);
    };

    const newGame = () => {
        setPlayer(null);
        setHouse(null);
        setGameStarted(false);
        setCounterEnded(false);
        setCounterText(null);
        setPlayerDisplayed(false);
        setHouseDisplayed(false);
        setReplayDisplayed(false);
        setResultDisplayed(false);
    };

    return [
        <Header key="header" score={score} />,
        <main key="main" className="grid place-content-center">
            <div
                className={`${
                    gameStarted ? 'hidden' : 'grid'
                } choices grid-rows-2 grid-cols-2 gap-3 place-content-center`}
            >
                <Rock
                    classList={'row-start-1 row-end-1 col-start-1 col-end-1'}
                    clickable={true}
                    onClick={(e) => startGame(e)}
                />
                <Paper
                    classList={'row-start-1 row-end-1 col-start-2 col-end-2'}
                    clickable={true}
                    onClick={(e) => startGame(e)}
                />
                <Scissors
                    classList={'row-start-2 row-end-2 col-span-2'}
                    clickable={true}
                    onClick={(e) => startGame(e)}
                />
            </div>

            <div
                className={`${
                    counterEnded ? 'hidden' : 'grid'
                } place-content-center uppercase tracking-widest text-lg`}
            >
                {counterText === 'Rock' ? (
                    <Rock clickable={false} />
                ) : counterText === 'Paper' ? (
                    <Paper clickable={false} />
                ) : counterText === 'Scissors' ? (
                    <Scissors clickable={false} />
                ) : (
                    ''
                )}
            </div>

            <div className={`${resultDisplayed ? 'grid' : 'hidden'} gap-3`}>
                <div
                    className={`${
                        !playerDisplayed ? 'row-span-2' : 'self-center'
                    } uppercase tracking-widest text-lg row-start-1 row-end-1 col-start-1 col-end-1 justify-self-center`}
                >
                    You Picked
                </div>
                <div
                    className={`${
                        playerDisplayed ? 'block' : 'hidden'
                    } animation-fade-in row-start-2 row-end-2 col-start-1 col-end-1 place-self-center`}
                >
                    {player === 'Rock' ? (
                        <Rock clickable={false} />
                    ) : player === 'Paper' ? (
                        <Paper clickable={false} />
                    ) : player === 'Scissors' ? (
                        <Scissors clickable={false} />
                    ) : null}
                </div>

                <div
                    className={`${
                        replayDisplayed ? 'block' : 'hidden'
                    } animation-fade-in col-start-2 col-end-2 row-start-2 row-end-2 row-span-2 justify-self-center self-center text-center`}
                >
                    <div className="uppercase text-4xl mb-5">
                        {player === 'Rock' && house === 'Paper'
                            ? 'You Lose'
                            : player === 'Paper' && house === 'Scissors'
                            ? 'You Lose'
                            : player === 'Scissors' && house === 'Rock'
                            ? 'You Lose'
                            : player === house
                            ? 'Draw'
                            : 'You Win'}
                    </div>

                    <div
                        className="bg-white text-textDark hover:text-red-500 uppercase tracking-widest text-lg rounded-md pt-5 pb-5 pl-12 pr-12 h-10 grid place-content-center cursor-pointer"
                        onClick={() => newGame()}
                    >
                        Play again
                    </div>
                </div>

                <div
                    className={`${
                        !houseDisplayed ? 'row-span-2' : 'self-center'
                    } uppercase tracking-widest text-lg row-start-1 row-end-1 col-start-3 col-end-3 justify-self-center`}
                >
                    The House Picked
                </div>
                <div
                    className={`${
                        houseDisplayed ? 'block' : 'hidden'
                    } animation-fade-in row-start-2 row-end-2 col-start-3 col-end-3 place-self-center`}
                >
                    {house === 'Rock' ? (
                        <Rock clickable={false} />
                    ) : house === 'Paper' ? (
                        <Paper clickable={false} />
                    ) : house === 'Scissors' ? (
                        <Scissors clickable={false} />
                    ) : null}
                </div>
            </div>
        </main>,
        <Footer key="footer" />,
    ];
}

export default App;
