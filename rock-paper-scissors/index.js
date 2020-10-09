let game = ()=>{
    let pScore = 0;
    let cScore = 0;

    let startGame = () =>{
        const playBtn = document.querySelector('.intro button');
         const introScreen = document.querySelector('.intro');
         const match = document.querySelector('.match');
         playBtn.addEventListener('click', ()=>{
             introScreen.classList.add('fadeOut');
             match.classList.add('fadeIn');

 
         })
    };

    let startMatch = () =>{
        let options = document.querySelectorAll('.options button');
        let playerHand = document.querySelector('.player-hand');
        let computerHand = document.querySelector('.computer-hand');

        //Computer options
        let computerOptions = ['rock', 'paper', 'scissors'];
        let computerNamber = Math.floor(Math.random() * 3);
        console.log(computerNamber);




    }
    startGame();
    startMatch();
}

game();

