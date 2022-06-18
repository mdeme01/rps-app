import React, {useState} from 'react';
//import '../index.css';
//import '../style/gamechoice.css';
import Header from './Header';
import Footer from './Footer';
import GameChoice from './GameChoice';

function App() {
    const [player, setPlayer] = useState(null);
    const [house, setHouse] = useState(null);
    const [score, setScore] = useState(0);
    const [winner, setWinner] = useState('');
    const [resultText, setResultText] = useState('');
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

        calculateResult(playerChoice, houseChoice);
    };

    const calculateResult = (playerChoice, houseChoice) => {
        if (
            (playerChoice === 'rock' && (houseChoice === 'scissors' || houseChoice === 'lizard')) ||
            (playerChoice === 'paper' && (houseChoice === 'rock' || houseChoice === 'spock')) ||
            (playerChoice === 'scissors' && (houseChoice === 'paper' || houseChoice === 'lizard')) ||
            (playerChoice === 'lizard' && (houseChoice === 'spock' || houseChoice === 'paper')) ||
            (playerChoice === 'spock' && (houseChoice === 'scissors' || houseChoice === 'rock'))
        ) {
            setScore(score + 1);
            setWinner('player');
            setResultText('You win');
        } else if (playerChoice === houseChoice) {
            setScore(score);
            setWinner('');
            setResultText('Draw');
        } else {
            setScore(score);
            setWinner('house');
            setResultText('You lose');
        }
    };

    const newGame = () => {
        setPlayer(null);
        setHouse(null);
        setGameStarted(false);
        setWinner('');
        setResultText('');
        setResultDisplayed(false);
    };

    return [
        <Header key="header" score={score} />,
        <main key="main" displaybg={`${!gameStarted}`}>
            <div className="choices" hidden={gameStarted}>
                <GameChoice clickable={true} onClick={(e) => startGame(e)} type="rock" />
                <GameChoice clickable={true} onClick={(e) => startGame(e)} type="paper" />
                <GameChoice clickable={true} onClick={(e) => startGame(e)} type="scissors" />
                <GameChoice clickable={true} onClick={(e) => startGame(e)} type="lizard" />
                <GameChoice clickable={true} onClick={(e) => startGame(e)} type="spock" />
            </div>

            <div className="result" hidden={!resultDisplayed}>
                <div className="playerpick">
                    <div>You Picked</div>
                    <div className={winner === 'player' ? 'winner' : ''}>
                        <GameChoice clickable={false} type={player} />
                    </div>
                </div>

                <div className="repeat">
                    <div>{resultText}</div>
                    <div onClick={() => newGame()}>Play again</div>
                </div>

                <div className="housepick">
                    <div>The House Picked</div>
                    <div className={winner === 'house' ? 'winner' : ''}>
                        <GameChoice clickable={false} type={house} />
                    </div>
                </div>
            </div>
        </main>,
        <Footer key="footer" />,
    ];
}

export default App;
