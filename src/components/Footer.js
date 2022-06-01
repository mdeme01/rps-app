import React from 'react';
import rulesImg from '../images/image-rules.svg';
import closeIcon from '../images/icon-close.svg';
import '../index.css';
/*
function Footer() {
    return (
        <footer className="mb-5 justify-self-center self-end text-center">
            Challenge by{' '}
            <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">
                Frontend Mentor
            </a>
            . Coded by{' '}
            <a href="https://www.frontendmentor.io/profile/Subject6735" target="_blank" rel="noreferrer">
                Deme Maráki
            </a>
            .
        </footer>
    );
}
*/

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rulesDisplayed: false,
        };
    }

    rulesClick = () => {
        this.setState((state) => ({
            rulesDisplayed: true,
        }));
    };

    closeClick = () => {
        this.setState((state) => ({
            rulesDisplayed: false,
        }));
    };

    render() {
        return (
            <footer className="grid grid-rows-2 grid-cols-1 gap-3 place-content-center self-end justify-self-center w-auto mb-10 text-center">
                <button
                    onClick={() => this.rulesClick()}
                    className={`${
                        this.state.rulesDisplayed ? 'cursor-not-allowed' : 'cursor-pointer'
                    } border-solid border-2 border-white hover:bg-white hover:text-textDark uppercase pt-2 pb-2 pl-10 pr-10 rounded-lg tracking-widest justify-self-center self-center w-1/2`} // absolute bottom-5 right-5
                    disabled={this.state.rulesDisplayed}
                >
                    Rules
                </button>

                <div
                    className={`${
                        this.state.rulesDisplayed ? 'grid' : 'hidden'
                    } bg-white rounded-md p-8 grid-cols-1 z-3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full md:grid-cols-2 md:w-auto md:h-auto`}
                >
                    <div className="text-textDark font-bold place-self-center text-3xl uppercase md:row-start-1 md:row-end-1 md:col-start-1 md:col-end-1 md:justify-self-start">
                        Rules
                    </div>
                    <img className="place-self-center col-span-2 pt-10 md:row-start-2 md:row-end-2" src={rulesImg} alt="rules" />
                    <img
                        onClick={() => this.closeClick()}
                        className="place-self-center cursor-pointer md:row-start-1 md:row-end-1 md:col-start-2 md:col-end-2 md:justify-self-end"
                        src={closeIcon}
                        alt="close"
                    />
                </div>
                <div>
                    Challenge by{' '}
                    <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">
                        Frontend Mentor
                    </a>
                    . Coded by{' '}
                    <a href="https://www.frontendmentor.io/profile/Subject6735" target="_blank" rel="noreferrer">
                        Deme Maráki
                    </a>
                    .
                </div>
            </footer>
        );
    }
}

export default Footer;
