let SCORE = 0;

const  handoptions = {
    "rock": "./assets/Rock.png",
    "paper": "./assets/Paper.png", 
    "scissors": "./assets/Scissors.png"
}

const pickUserHand = (hand) =>{
    console.log(hand);
    //hide the current page
    let hands = document.querySelector(".hands");
    hands.style.display = "none";

    //show the rafree page
    let rafre = document.querySelector(".rafre");
    rafre.style.display = "flex";

    //set user pick image
    document.getElementById("userPickImage").src = handoptions[hand];

    pickComputerHand(hand);

    console.log(screen.availWidth);

}

const pickComputerHand = (hand) =>{
    let hands = ["rock", "paper", "scissors"]
    let cpHand = hands[Math.floor(Math.random()*3)];
    console.log("cpHand    "+cpHand);
    //set computer pick image
    document.getElementById("computerPickImage").src = handoptions[cpHand];

    referee(hand, cpHand);
}

const referee = (userHand, cpHand) => {
    if (userHand == "paper" && cpHand == "scissors") {
      setDecision("YOU LOSE!");
    }
    if (userHand == "paper" && cpHand == "rock") {
      setDecision("YOU WIN!");
      setScore(SCORE + 1);
    }
    if (userHand == "paper" && cpHand == "paper") {
      setDecision("It's a tie!");
    }
    if (userHand == "rock" && cpHand == "scissors") {
      setDecision("YOU WIN!");
      setScore(SCORE + 1);
    }
    if (userHand == "rock" && cpHand == "paper") {
      setDecision("YOU LOSE!");
    }
    if (userHand == "rock" && cpHand == "rock") {
      setDecision("It's a tie!");
    }
    if (userHand == "scissors" && cpHand == "scissors") {
      setDecision("It's a tie!");
    }
    if (userHand == "scissors" && cpHand == "rock") {
      setDecision("YOU LOSE!");
    }
    if (userHand == "scissors" && cpHand == "paper") {
      setDecision("YOU WIN!");
      setScore(SCORE + 1);
    }
  };

  const setDecision = (result) => {
      console.log("result      "+result);
      document.querySelector(".result h1").innerText = result;
  };

  const setScore = (Score) => {
      SCORE = Score;
      document.querySelector(".scoreBoard h1").innerText = Score;
  };

  const playAgain = () =>{
      //show the current page
    let hands = document.querySelector(".hands");
    hands.style.display = "flex";

    //hide the rafree page
    let rafre = document.querySelector(".rafre");
    rafre.style.display = "none";
  }