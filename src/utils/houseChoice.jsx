export  const houseChoice = (selected, points) => {
    let houseWeapon;
    let result;
    let score;

    const noPoint = points + 0;
    const wonPoint = points + 1;
    const losePoint = (points - 1 < 0) ? 0 : points - 1;

    const lose = "You Lose";
    const won = "You Won";
    const draw = "Draw";
    debugger
    const houseChoice = Math.floor(Math.random() * 5) + 1;
    console.log(houseChoice);
    if (houseChoice === 1) {
        houseWeapon = "paper";
        switch (selected) {
          case "paper":
            result = draw;
            score = noPoint;
            break;
          case "rock":
            result = lose;
            score = losePoint;
            break;
          case "scissors":
            result = won;
            score = wonPoint;
            break;
            case "lizard":
            result = won;
            score = wonPoint;
            break;
            case "spock":
            result = lose;
            score = losePoint;
            break;
        }
    } else if (houseChoice === 2){
        houseWeapon = "scissors";
        switch (selected) {
            case "scissors":
            result = draw;
            score = noPoint;
            break;
            case "paper":
            result = lose;
            score = losePoint;
            break;
            case "rock":
            result = won;
            score = wonPoint;
            break;
            case "lizard":
            result = lose;
            score = losePoint;
            break;
            case "spock":
            result = won;
            score = wonPoint;
            break;
        }
    } else if (houseChoice === 3) {
        houseWeapon = "rock";
        switch (selected) {
            case "rock":
            result = draw;
            score = noPoint;
            break;
            case "scissors":
            result = lose;
            score = losePoint;
            break;
            case "paper":
            result = won;
            score = wonPoint;
            break;
            case "lizard":
            result = lose;
            score = losePoint;
            break;
            case "spock":
            result = won;
            score = wonPoint;
            break;
        }
    } else if (houseChoice === 4) {
        houseWeapon = "lizard";
        switch (selected) {
            case "lizard":
            result = draw;
            score = noPoint;
            break;
            case "scissors":
            result = won;
            score = wonPoint;
            break;
            case "paper":
            result = lose;
            score = losePoint;
            break;
            case "rock":
            result = won;
            score = wonPoint;
            break;
            case "spock":
            result = lose;
            score = losePoint;
            break;
        }
    } else {
        houseWeapon = "spock";
        switch (selected) {
            case "spock":
            result = draw;
            score = noPoint;
            break;
            case "scissors":
            result = lose;
            score = losePoint;
            break;
            case "paper":
            result = won;
            score = wonPoint;
            break;
            case "rock":
            result = lose;
            score = losePoint;
            break;
            case "lizard":
            result = won;
            score = wonPoint;
            break;
        }
    }

    return {
        houseWeapon,
        result,
        score
    };
};