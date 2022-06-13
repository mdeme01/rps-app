import React, {useState} from 'react';
import '../index.css';
import '../style/gamechoice.css';
import Header from './Header';
import Footer from './Footer';
import GameChoice from './GameChoice';

function App() {
    const [player, setPlayer] = useState(null);
    const [house, setHouse] = useState(null);
    const [score, setScore] = useState(0);
    const [gameStarted, setGameStarted] = useState(false);
    const [resultDisplayed, setResultDisplayed] = useState(false);

    const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

    const startGame = (e) => {
        setGameStarted(true);
        setResultDisplayed(true);

        const playerChoice = e.target.getAttribute('type');
        const houseChoice = choices[Math.floor(Math.random() * choices.length)];

        setPlayer(playerChoice);
        setHouse(houseChoice);

        (playerChoice === 'rock' && houseChoice === 'scissors') ||
        (playerChoice === 'paper' && houseChoice === 'rock') ||
        (playerChoice === 'scissors' && houseChoice === 'paper') ||
        (playerChoice === 'lizard' && houseChoice === 'spock') ||
        (playerChoice === 'spock' && houseChoice === 'scissors')
            ? setScore(score + 1)
            : setScore(score);
    };

    const newGame = () => {
        setPlayer(null);
        setHouse(null);
        setGameStarted(false);
        setResultDisplayed(false);
    };

    const matchResult = (player, house) => {
        if (
            (player === 'rock' && house === 'scissors') ||
            (player === 'paper' && house === 'rock') ||
            (player === 'scissors' && house === 'paper') ||
            (player === 'lizard' && house === 'spock') ||
            (player === 'spock' && house === 'scissors')
        ) {
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
            <div className={`${gameStarted ? 'hidden' : 'grid'} choices grid-cols-3 place-content-center`}>
                <GameChoice clickable={true} onClick={(e) => startGame(e)} type="rock" />
                <GameChoice clickable={true} onClick={(e) => startGame(e)} type="paper" />
                <GameChoice clickable={true} onClick={(e) => startGame(e)} type="scissors" />
                <GameChoice clickable={true} onClick={(e) => startGame(e)} type="lizard" />
                <GameChoice clickable={true} onClick={(e) => startGame(e)} type="spock" />
            </div>

            <div className="result" hidden={!resultDisplayed}>
                <div className="playerpick">
                    <div>You Picked</div>
                    <div>
                        <GameChoice clickable={false} type={player} />
                    </div>
                </div>

                <div className="repeat">
                    <div>{matchResult(player, house).toString()}</div>
                    <div onClick={() => newGame()}>Play again</div>
                </div>

                <div className="housepick">
                    <div>The House Picked</div>
                    <div>
                        <GameChoice clickable={false} type={house} />
                    </div>
                </div>
            </div>
        </main>,
        <Footer key="footer" />,
    ];
}

export default App;
