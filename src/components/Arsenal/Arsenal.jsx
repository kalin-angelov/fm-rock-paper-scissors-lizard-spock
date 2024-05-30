import { useContext } from "react";

import {Context} from "../../context/Context";
import { useNavigate } from "react-router-dom";

const Arsenal = () => {
  const navigate = useNavigate()
  const { setUserWeapon } = useContext(Context);

  const { 
    setHouseWeapon,
    setResult
  } = useContext(Context);

  const onSelect = (weaponOfChoice) => {
    setUserWeapon(weaponOfChoice);
    setHouseWeapon("");
    setResult("");
    navigate("/arena");
  };

  return (
    <main className="weapons-container">
      <figure className="pentagon">
        <img src="/images/bg-pentagon.svg" alt="pentagon" />
      </figure>
  
      <div 
        onClick={ () => onSelect("scissors") } 
        id="weapon-of-war-scissors" 
        className="weapon-btn"
      >
        <figure id="scissors-container" className="weapon-container">
          <img src="/images/icon-scissors.svg" alt="scissors" />
        </figure>
      </div>

      <div
        onClick={ () => onSelect("spock") } 
        id="weapon-of-war-spock" 
        className="weapon-btn"
      >
        <figure id="spock-container" className="weapon-container">
          <img src="/images/icon-spock.svg" alt="spock" />
        </figure>
      </div>

      <div 
        onClick={ () => onSelect("paper") } 
        id="weapon-of-war-paper" 
        className="weapon-btn"
      >
        <figure id="paper-container" className="weapon-container">
          <img src="/images/icon-paper.svg" alt="paper" />
        </figure>
      </div>

      <div 
        onClick={ () => onSelect("lizard") } 
        id="weapon-of-war-lizard" 
        className="weapon-btn"
      >
        <figure id="lizard-container" className="weapon-container">
          <img src="/images/icon-lizard.svg" alt="lizard" />
        </figure>
      </div>
      
      <div 
        onClick={ () => onSelect("rock") } 
        id="weapon-of-war-rock" 
        className="weapon-btn"
      >
        <figure id="rock-container" className="weapon-container">
          <img src="/images/icon-rock.svg" alt="rock" />
        </figure>
      </div>
    </main>
  );
};

export default Arsenal;