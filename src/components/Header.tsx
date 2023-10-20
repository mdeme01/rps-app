import img_logo from '../images/logo.svg';

const Header = ({ score }: { score: number }): JSX.Element => {
  return (
    <header>
      <img src={img_logo} alt="logo" />
      <div className="score">
        <div>Score</div>
        <div>{score}</div>
      </div>
    </header>
  );
};

export default Header;
