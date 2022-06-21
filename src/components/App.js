import React, {useEffect, useRef, useState} from 'react';
import Header from './Header';
import Footer from './Footer';
import GameChoice from './GameChoice';

function App() {
    const [player, setPlayer] = useState(null);
    const [house, setHouse] = useState(null);
    const [winner, setWinner] = useState(null);
    const [resultText, setResultText] = useState(null);

    const [gameStarted, setGameStarted] = useState(false);
    const [resultDisplayed, displayResult] = useState(false);
    const [replayDisplayed, displayReplay] = useState(false);

    const scoreRef = useRef(0);

    const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

    useEffect(() => {
        if (winner === null) return;
        async function finishGame() {
            const house_res = document.querySelector('#house_result');
            const player_res = document.querySelector('#player_result');

            player_res.classList.remove('winner');
            house_res.classList.remove('winner');

            house_res.querySelector('div').classList.add('blank');

            await timeout(1000).then(() => {
                house_res.querySelector('div').classList.remove('blank');
            });

            await timeout(1000).then(() => {
                player_res.classList.toggle('winner', winner === 'player');
                house_res.classList.toggle('winner', winner === 'house');

                if (winner === 'player') scoreRef.current++;

                displayReplay(true);
            });
        }
        finishGame();
    }, [winner]);

    const timeout = (ms) => {
        return new Promise((resolve) => setTimeout(resolve, ms));
    };

    const startGame = async (e) => {
        setGameStarted(true);
        displayResult(true);

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
            setWinner('player');
            setResultText('You win');
        } else if (playerChoice === houseChoice) {
            setWinner('');
            setResultText('Draw');
        } else {
            setWinner('house');
            setResultText('You lose');
        }
    };

    const newGame = () => {
        setPlayer(null);
        setHouse(null);
        setWinner(null);
        setResultText(null);
        setGameStarted(false);
        displayResult(false);
        displayReplay(false);
    };

    return [
        <Header key="header" score={scoreRef.current} />,
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
                    <div id="player_result">
                        <GameChoice clickable={false} type={player} />
                    </div>
                </div>

                <div className="repeat" hidden={!replayDisplayed}>
                    <div>{resultText}</div>
                    <div onClick={() => newGame()}>Play again</div>
                </div>

                <div className="housepick">
                    <div>The House Picked</div>
                    <div id="house_result">
                        <GameChoice clickable={false} type={house} />
                    </div>
                </div>
            </div>
        </main>,
        <Footer key="footer" />,
    ];
}

// className={winner === 'player' ? 'winner' : ''}
// className={winner === 'house' ? 'winner' : ''}

export default App;
