let neka = (params) => {
  let start = document.querySelector(".startBtn");
  let mainInout = document.querySelector(".main-input");
  let allLines = document.querySelectorAll(".line");

  let startGame = () => {
    start.hidden = true;
  };
  startGame();

  let speed = 5; //brzina kretanja reci u px
  let textLenght = 3;

  let typingWords = words.filter((word) => word.length == textLenght);
  //console.log(typingWords);
  lvl = 6;

  //insert spans

  let chooseText = () => {
    let rand = Math.floor(Math.random() * typingWords.length); //kad ti ovo ne bude jasno otkomentarisi consol.log-ove
    //   console.log(rand);

    //  console.log(typingWords.length);

    let savedText = typingWords[rand];
    typingWords.splice(rand, 1); //izbacujemo rec koju smo otkucali iz niza, da se vise ne ponavlja, ovde je rand broj, koji oznacava poziciju reci
    //koju treba izbaciti, a 1 oznacava koliko reci hocemo da izbacimo, ja mislim
    //   console.log(typingWords.length);
    return savedText;
  };
  chooseText();

  let insertSpans = () => {
    for (let i = 0; i < allLines.length; i++) {
      let rand = Math.floor(Math.random() * 20); //floor zaokruzuje brojeve na najblizi donji
      //math.random()*20 vraca random brojeve izmedju 0 i 19
      if (rand <= lvl) {
        let text = chooseText();
        let span = document.createElement("span");

        span.innerText = text;
        allLines[i].append(span); //selektuje liniju i doda joj rec
      }
    }
  };
  insertSpans();

  //animacija spanova

  let moveAll = setInterval(()=>{
      let spans = document.querySelectorAll('span');
      

      spans.forEach((e)=>{
      //  console.log(e);
          e.style.left= '+' + speed +'px';
      })
          
          speed+=20;

          //testiranje
          spans.forEach((a,i)=>{
            let position = parseInt(a.style.left)
            console.log(position);
            if(position > 825 ){//trebalo bi da stavim 850 ali se nesto ne uklapa
                clearAllIntervals();
            }
            else if(position >700 && position <710){
              a.classList.add('danger');
            }
          });
  },100)
      
  let clearAllIntervals = () =>{
      clearInterval(moveAll);
  }


};

console.log(typeof parseInt("5"));
