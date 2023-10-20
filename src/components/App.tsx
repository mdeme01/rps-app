import React, { useEffect, useRef, useState } from 'react';
import Header from './Header';
import Footer from './Footer';

type Choice = 'rock' | 'paper' | 'scissors' | 'lizard' | 'spock';
const choices: Choice[] = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

const App = (): React.ReactNode => {
  const [player, setPlayer] = useState<string | null>(null);
  const [house, setHouse] = useState<string | null>(null);
  const [winner, setWinner] = useState<string | null>(null);
  const [resultText, setResultText] = useState<string | null>(null);
  const [gameStarted, setGameStarted] = useState<boolean>(false);
  const [resultDisplayed, setResultDisplayed] = useState<boolean>(false);
  const [replayDisplayed, setReplayDisplayed] = useState<boolean>(false);
  const scoreRef = useRef<number>(0);

  useEffect(() => {
    if (winner === null) return;
    const finishGame = async () => {
      const house_res = document.querySelector('#house_result');
      const player_res = document.querySelector('#player_result');

      if (!player_res || !house_res) return;

      player_res.classList.remove('winner');
      house_res.classList.remove('winner');
      house_res.querySelector('div')?.classList.add('blank');

      await timeout(1000).then(() => {
        house_res.querySelector('div')?.classList.remove('blank');
      });

      await timeout(1000).then(() => {
        player_res.classList.toggle('winner', winner === 'player');
        house_res.classList.toggle('winner', winner === 'house');
        if (winner === 'player') scoreRef.current++;
        setReplayDisplayed(true);
      });
    };
    finishGame();
  }, [winner]);

  const timeout = (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  const startGame = async (playerChoice: Choice) => {
    setGameStarted(true);
    setResultDisplayed(true);

    const houseChoice = choices[Math.floor(Math.random() * choices.length)];

    setPlayer(playerChoice);
    setHouse(houseChoice);

    calculateResult(playerChoice, houseChoice);
  };

  const calculateResult = (playerChoice: Choice, houseChoice: Choice) => {
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
    setResultDisplayed(false);
    setReplayDisplayed(false);
  };

  return [
    <Header key="header" score={scoreRef.current} />,
    <main key="main" data-displaybg={`${!gameStarted}`}>
      <div className="choices" hidden={gameStarted}>
        {choices.map((choice) => (
          <div key={choice} className={`${choice} gamechoice clickable`} onClick={() => startGame(choice)}></div>
        ))}
      </div>
      <div className="result" hidden={!resultDisplayed}>
        <div className="playerpick">
          <div>You Picked</div>
          <div id="player_result">
            <div className={`${player} gamechoice`}></div>
          </div>
        </div>
        <div className="repeat" hidden={!replayDisplayed}>
          <div>{resultText}</div>
          <div onClick={() => newGame()}>Play again</div>
        </div>
        <div className="housepick">
          <div>The House Picked</div>
          <div id="house_result">
            <div className={`${house} gamechoice`}></div>
          </div>
        </div>
      </div>
    </main>,
    <Footer key="footer" />,
  ];
};

export default App;
