import React, {useState} from 'react';
import '../index.css';
//import triangleBg from '../images/bg-triangle.svg';
//import Rules from './Rules';
import Header from './Header';
import Footer from './Footer';
import GameChoice from './GameChoice';

function App() {
    const [player, setPlayer] = useState(null);
    const [house, setHouse] = useState(null);
    const [score, setScore] = useState(0);
    const [gameStarted, setGameStarted] = useState(false);

    const [playerDisplayed, setPlayerDisplayed] = useState(false);
    const [houseDisplayed, setHouseDisplayed] = useState(false);
    const [replayDisplayed, setReplayDisplayed] = useState(false);
    const [resultDisplayed, setResultDisplayed] = useState(false);

    /*const timeout = (ms) => {
        return new Promise((resolve) => setTimeout(resolve, ms));
    };*/

    const startGame = async (e) => {
        setGameStarted(true);
        setPlayerDisplayed(true);
        setHouseDisplayed(true);
        setReplayDisplayed(true);
        setResultDisplayed(true);

        const r = Math.floor(Math.random() * 3);
        const playerChoice = e.target.getAttribute('type');
        const houseChoice = r === 0 ? 'rock' : r === 1 ? 'paper' : 'scissors';

        setPlayer(playerChoice);
        setHouse(houseChoice);

        (playerChoice === 'rock' && houseChoice === 'scissors') ||
        (playerChoice === 'paper' && houseChoice === 'rock') ||
        (playerChoice === 'scissors' && houseChoice === 'paper')
            ? setScore(score + 1)
            : setScore(score);
    };

    const newGame = () => {
        setPlayer(null);
        setHouse(null);
        setGameStarted(false);
        setPlayerDisplayed(false);
        setHouseDisplayed(false);
        setReplayDisplayed(false);
        setResultDisplayed(false);
    };

    const matchResult = (player, house) => {
        if ((player === 'rock' && house === 'scissors') || (player === 'paper' && house === 'rock') || (player === 'scissors' && house === 'paper')) {
            return 'You win';
        } else if (player === house) {
            return 'Draw';
        } else {
            return 'You lose';
        }
    };

    return [
        <Header key="header" score={score} />,
        <main key="main" className="grid place-content-center">
            <div className={`${gameStarted ? 'hidden' : 'grid'} choices grid-rows-2 grid-cols-2 gap-12 place-content-center`}>
                <GameChoice classList={'row-start-1 row-end-1 col-start-1 col-end-1'} clickable={true} onClick={(e) => startGame(e)} type="rock" />
                <GameChoice classList={'row-start-1 row-end-1 col-start-2 col-end-2'} clickable={true} onClick={(e) => startGame(e)} type="paper" />
                <GameChoice classList={'row-start-2 row-end-2 col-span-2'} clickable={true} onClick={(e) => startGame(e)} type="scissors" />
            </div>

            <div className={`${resultDisplayed ? 'grid' : 'hidden'} grid-cols-2 gap-5 md:grid-cols-3`}>
                <div
                    className={`${
                        !playerDisplayed ? 'row-span-2' : 'self-center'
                    } uppercase tracking-widest text-lg row-start-1 row-end-1 col-start-1 col-end-1 justify-self-center`}
                >
                    You Picked
                </div>
                <div className={`${playerDisplayed ? 'block' : 'hidden'} row-start-2 row-end-2 col-start-1 col-end-1 place-self-center`}>
                    <GameChoice clickable={false} type={player} />
                </div>

                <div
                    className={`${
                        replayDisplayed ? 'block' : 'hidden'
                    } col-start-2 col-end-2 row-start-2 row-end-2 row-span-2 col-span-2 justify-self-center self-center text-center`}
                >
                    <div className="uppercase text-4xl mb-5">{matchResult(player, house).toString()}</div>

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
                <div className={`${houseDisplayed ? 'block' : 'hidden'} row-start-2 row-end-2 col-start-3 col-end-3 place-self-center`}>
                    <GameChoice clickable={false} type={house} />
                </div>
            </div>
        </main>,
        <Footer key="footer" />,
    ];
}

export default App;
