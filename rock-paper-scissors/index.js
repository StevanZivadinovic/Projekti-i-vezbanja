let game = () => {
  let pScore = 0;
  let cScore = 0;

  

  let startGame = () => {
    const playBtn = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const match = document.querySelector(".match");
    playBtn.addEventListener("click", () => {
      introScreen.classList.add("fadeOut");
      match.classList.add("fadeIn");
    });
  };
  
  const compareHands = (playerChoise, computerChoise) => {
   
    //update text
    const winner = document.querySelector(".winner");
    //Checking for a tie
    if (playerChoise === computerChoise) {
      winner.textContent = "It is a tie";
      return;
    }
    //check for a rock
    if (playerChoise === "rock") {
      if (computerChoise === "scissors") {
        winner.textContent = "Player Wins";
        pScore++;
        if(pScore===4){
            pScore=0;
            cScore=0;
            winner.textContent='Player is winner'
        }
        updateScore();
        return;

      } else {
        winner.textContent = "Computer Wins";
        cScore++;
        if(cScore ===4){
            pScore=0;
            cScore=0;
            winner.textContent='Computer is winner'

        }
        updateScore();

        return;

      }
      
    }
    //check for paper

    if (playerChoise === "paper") {
      if (computerChoise === "scissors") {
        winner.textContent = "Computer Wins";
        cScore++;
        if(cScore ===4){
            pScore=0;
            cScore=0;
            winner.textContent='Computer is winner'

        }
        updateScore();

        return;

      } else {
        winner.textContent = "Player Wins";
        pScore++;
        if(pScore===4){
            pScore=0;
            cScore=0;
            winner.textContent='Player is winner'

        }
        updateScore();

        return;

      }
    }

    //check for Scissors
    if (playerChoise === "scissors") {
      if (computerChoise === "rock") {
        winner.textContent = "Computer Wins";
        cScore++;
        if(cScore ===4){
            pScore=0;
            cScore=0;
            winner.textContent='Computer is winner'

        }
        updateScore();

        return;

      } else {
        winner.textContent = "Player Wins";
        pScore++;
        if(pScore===4){
            pScore=0;
            cScore=0;
            winner.textContent='Player is winner'

        }
        updateScore();

        return;

      }
    }
  };



  let startMatch = () => {
    let options = document.querySelectorAll(".options button");
    let playerHand = document.querySelector(".player-hand");
    let computerHand = document.querySelector(".computer-hand");
    let hands = document.querySelectorAll('.hands img');
    console.log(hands);
    hands.forEach(hand=>{
        hand.addEventListener('animationend',function(){
            this.style.animation='';
        })
    })
    //Computer options
    let computerOptions = ["rock", "paper", "scissors"];

    options.forEach((option) => {
      option.addEventListener("click", function () {
        console.log(this); //daje ti element na koji si kliknuo (samo iz promenljive options),
        //ali u Listeneru moras da koristis function(), a ne ()=>
        //ovim se this povezuje sa option.
        //u Listerenru nam je dostupna opcija this

        //Computer Choise
        let computerNamber = Math.floor(Math.random() * 3);
        console.log(computerNamber);
        let computerChoise = computerOptions[computerNamber];
        console.log(computerChoise);

        setTimeout(()=>{
            //Here where we call compare hands
        compareHands(this.textContent, computerChoise)
        //Update images

        playerHand.src = `./images/${this.textContent}.png`;
        computerHand.src = `./images/${computerChoise}.png`;
        }, 2000);

        playerHand.style.animation = "shakePlayer 2s ease";
        computerHand.style.animation = "shakeComputer 2s ease";


      });
    });
  };

  let updateScore = () =>{
      const playerScore = document.querySelector('.player-score p');
      const computerScore = document.querySelector('.computer-score p');
      playerScore.textContent = pScore;
      computerScore.textContent = cScore;

  }
  
  startGame();
  startMatch();
};

game();
