import { useEffect, useState } from 'react';
import img_rules from '../images/image-rules.svg';
import img_close from '../images/icon-close.svg';

const Footer = (): JSX.Element => {
  const [rulesDisplayed, setRulesDisplayed] = useState<boolean>(false);

  useEffect(() => {
    const overlay = document.querySelector('.overlay');
    overlay?.classList.toggle('active', rulesDisplayed);
  });

  return (
    <footer>
      <button onClick={() => setRulesDisplayed(true)} className="rules-button">
        Rules
      </button>
      <div className="rules" hidden={!rulesDisplayed}>
        <div>Rules</div>
        <img src={img_rules} alt="rules" />
        <img onClick={() => setRulesDisplayed(false)} src={img_close} alt="close" />
      </div>
    </footer>
  );
};

export default Footer;
