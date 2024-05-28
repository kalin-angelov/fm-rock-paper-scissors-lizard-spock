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
    <div className="weapons-container">
      <figure className="pentagon">
        <img src="/images/bg-pentagon.svg" alt="pentagon" />
      </figure>
  
      <button 
        onClick={ () => onSelect("scissors") } 
        id="weapon-of-war-scissors" 
        className="weapon-btn"
      >
        <figure id="scissors-container" className="weapon-container">
          <img src="/images/icon-scissors.svg" alt="scissors" />
        </figure>
      </button>

      <button
        onClick={ () => onSelect("spock") } 
        id="weapon-of-war-spock" 
        className="weapon-btn"
      >
        <figure id="spock-container" className="weapon-container">
          <img src="/images/icon-spock.svg" alt="spock" />
        </figure>
      </button>

      <button 
        onClick={ () => onSelect("paper") } 
        id="weapon-of-war-paper" 
        className="weapon-btn"
      >
        <figure id="paper-container" className="weapon-container">
          <img src="/images/icon-paper.svg" alt="paper" />
        </figure>
      </button>

      <button 
        onClick={ () => onSelect("lizard") } 
        id="weapon-of-war-lizard" 
        className="weapon-btn"
      >
        <figure id="lizard-container" className="weapon-container">
          <img src="/images/icon-lizard.svg" alt="lizard" />
        </figure>
      </button>
      
      <button 
        onClick={ () => onSelect("rock") } 
        id="weapon-of-war-rock" 
        className="weapon-btn"
      >
        <figure id="rock-container" className="weapon-container">
          <img src="/images/icon-rock.svg" alt="rock" />
        </figure>
      </button>
    </div>
  );
};

export default Arsenal;