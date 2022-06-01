import React from 'react';
import '../index.css';
//import triangleBg from '../images/bg-triangle.svg';
//import Rules from './Rules';
import Rock from './Rock';
import Paper from './Paper';
import Scissors from './Scissors';
import Header from './Header';
import Footer from './Footer';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            player: '',
            house: '',
            score: 0,
            counterText: '',
            gameStarted: false,
            counterEnded: false,
            rulesDisplayed: false,
            resultDisplayed: false,
            playerDisplayed: false,
            houseDisplayed: false,
            replayDisplayed: false,
        };
    }

    timeout = (ms) => {
        return new Promise((resolve) => setTimeout(resolve, ms));
    };

    startGame = async (e) => {
        const r = Math.floor(Math.random() * 3);
        const player = e.target.getAttribute('type');
        const house = r === 0 ? 'Rock' : r === 1 ? 'Paper' : 'Scissors';

        this.setState((state) => ({
            player: player,
            house: house,
            gameStarted: true,
            counterEnded: false,
        }));

        await this.timeout(1000).then(() => {
            this.setState((state) => ({
                counterText: 'Rock',
            }));
        });

        await this.timeout(1000).then(() => {
            this.setState((state) => ({
                counterText: 'Paper',
            }));
        });

        await this.timeout(1000).then(() => {
            this.setState((state) => ({
                counterText: 'Scissors',
            }));
        });

        await this.timeout(1000).then(() => {
            this.setState((state) => ({
                counterText: '',
                counterEnded: true,
                resultDisplayed: true,
            }));
        });

        await this.timeout(1000).then(() => {
            this.setState((state) => ({
                playerDisplayed: true,
            }));
        });

        await this.timeout(2000).then(() => {
            this.setState((state) => ({
                houseDisplayed: true,
            }));
        });

        await this.timeout(3000).then(() => {
            this.setState((state) => ({
                score: (player === 'Rock' && house === 'Scissors') || (player === 'Paper' && house === 'Rock') || (player === 'Scissors' && house === 'Paper') ? state.score + 1 : state.score,
                replayDisplayed: true,
            }));
        });
    };

    newGame = () => {
        this.setState((state) => ({
            player: '',
            house: '',
            gameStarted: false,
            resultDisplayed: false,
            playerDisplayed: false,
            houseDisplayed: false,
            replayDisplayed: false,
        }));
    };

    rulesClick = () => {
        this.setState((state) => ({
            rulesDisplayed: true,
        }));
        document.querySelector('#root').classList.add('overlay');
    };

    closeClick = () => {
        this.setState((state) => ({
            rulesDisplayed: false,
        }));
        document.querySelector('#root').classList.remove('overlay');
    };

    render() {
        return (
            <React.StrictMode>
                <Header score={this.state.score} />
                <main className="grid place-content-center">
                    <div className={`${this.state.gameStarted ? 'hidden' : 'grid'} choices grid-rows-2 grid-cols-2 gap-3 place-content-center`}>
                        <Rock classList={'row-start-1 row-end-1 col-start-1 col-end-1'} clickable={true} onClick={(e) => this.startGame(e)} />
                        <Paper classList={'row-start-1 row-end-1 col-start-2 col-end-2'} clickable={true} onClick={(e) => this.startGame(e)} />
                        <Scissors classList={'row-start-2 row-end-2 col-span-2'} clickable={true} onClick={(e) => this.startGame(e)} />
                    </div>

                    <div className={`${this.state.counterEnded ? 'hidden' : 'grid'} place-content-center uppercase tracking-widest text-lg`}>
                        {this.state.counterText === 'Rock' ? (
                            <Rock clickable={false} />
                        ) : this.state.counterText === 'Paper' ? (
                            <Paper clickable={false} />
                        ) : this.state.counterText === 'Scissors' ? (
                            <Scissors clickable={false} />
                        ) : (
                            ''
                        )}
                    </div>

                    <div className={`${this.state.resultDisplayed ? 'grid' : 'hidden'} gap-3`}>
                        <div
                            className={`${
                                !this.state.playerDisplayed ? 'row-span-2' : 'self-center'
                            } uppercase tracking-widest text-lg row-start-1 row-end-1 col-start-1 col-end-1 justify-self-center`}
                        >
                            You Picked
                        </div>
                        <div className={`${this.state.playerDisplayed ? 'block' : 'hidden'} animation-fade-in row-start-2 row-end-2 col-start-1 col-end-1 place-self-center`}>
                            {this.state.player === 'Rock' ? (
                                <Rock clickable={false} />
                            ) : this.state.player === 'Paper' ? (
                                <Paper clickable={false} />
                            ) : this.state.player === 'Scissors' ? (
                                <Scissors clickable={false} />
                            ) : null}
                        </div>

                        <div
                            className={`${
                                this.state.replayDisplayed ? 'block' : 'hidden'
                            } animation-fade-in col-start-2 col-end-2 row-start-2 row-end-2 row-span-2 justify-self-center self-center text-center`}
                        >
                            <div className="uppercase text-4xl mb-5">
                                {this.state.player === 'Rock' && this.state.house === 'Paper'
                                    ? 'You Lose'
                                    : this.state.player === 'Paper' && this.state.house === 'Scissors'
                                    ? 'You Lose'
                                    : this.state.player === 'Scissors' && this.state.house === 'Rock'
                                    ? 'You Lose'
                                    : this.state.player === this.state.house
                                    ? 'Draw'
                                    : 'You Win'}
                            </div>

                            <div
                                className="bg-white text-textDark hover:text-red-500 uppercase tracking-widest text-lg rounded-md pt-5 pb-5 pl-12 pr-12 h-10 grid place-content-center cursor-pointer"
                                onClick={() => this.newGame()}
                            >
                                Play again
                            </div>
                        </div>

                        <div
                            className={`${!this.state.houseDisplayed ? 'row-span-2' : 'self-center'} uppercase tracking-widest text-lg row-start-1 row-end-1 col-start-3 col-end-3 justify-self-center`}
                        >
                            The House Picked
                        </div>
                        <div className={`${this.state.houseDisplayed ? 'block' : 'hidden'} animation-fade-in row-start-2 row-end-2 col-start-3 col-end-3 place-self-center`}>
                            {this.state.house === 'Rock' ? (
                                <Rock clickable={false} />
                            ) : this.state.house === 'Paper' ? (
                                <Paper clickable={false} />
                            ) : this.state.house === 'Scissors' ? (
                                <Scissors clickable={false} />
                            ) : null}
                        </div>
                    </div>
                </main>
                <Footer />
            </React.StrictMode>
        );
    }
}

export default App;
