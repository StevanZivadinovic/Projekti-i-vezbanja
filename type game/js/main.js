let neka = (params) => {
  let start = document.querySelector(".startBtn");
  let mainInput = document.querySelector(".main-input");
  let allLines = document.querySelectorAll(".line");
  let allText = [];

  let textLenght = 3;
  let typingWords = words.filter((word) => word.length == textLenght);
  let speed = 1; //brzina kretanja reci u px
  lvl = 6;
  let score = 0;
  let prikaziRezultat = document.querySelector('.prikaziRezultat');



  

      let speedUp = () =>{
         textLenght++;
      let typingWords = words.filter((word) => word.length == textLenght);
      }
  setInterval(speedUp, 20000);
  


  let startGame = () => {
    start.hidden = true;
    mainInput.focus(); //cim udjes u igricu odmah postavi cursor na input polje
/*
    let speedUp = setInterval(() => {
      textLenght++;
      let typingWords = words.filter((word) => word.length == textLenght);
    }, 20000);
    */
   

    let checkInputTyping = () => {
      let inputVal = mainInput.value;
      console.log(inputVal);
      let self = $(this);
      console.log(self);
      console.log(allText);

      if (allText.includes(inputVal)) {
        let spans = document.querySelectorAll("span");
        let index = allText.indexOf(inputVal);
        allText.splice(index,1);
        spans.forEach((a) => {
          console.log(typeof a.firstChild);
          if (a.firstChild.textContent === inputVal) {
            
            a.style.background = "blue";
            a.remove();
            mainInput.value = ""; //prazni input nakon uspesno otkucane reci
            score++;
            prikaziRezultat.innerText=score;
          }
        });
        console.log(typeof spans);

        /*
        //ovo iznad ovako izgleda u jquery
        $('span').filter(function(){
          console.log(typeof($(this).text()))

          return $(this).text() == inputVal;
        }).css(
          'background', 'blue'
        )
        */
      }
    };

    mainInput.addEventListener("keyup", checkInputTyping);
  };

  startGame();

 
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

  let insertSpans = ()=>{

  
    for (let i = 0; i < allLines.length; i++) {
      let rand = Math.floor(Math.random() * 20); //floor zaokruzuje brojeve na najblizi donji
      //math.random()*20 vraca random brojeve izmedju 0 i 19
      if (rand <= lvl) {
        let text = chooseText();
        allText.push(text);
        let span = document.createElement("span");

        span.innerText = text;
        allLines[i].append(span); //selektuje liniju i doda joj rec

      }

    }
  }
  insertSpans();
  let ab = setInterval(insertSpans, 7000)
  
  
  


  //animacija spanova

  let moveAll = setInterval(() => {
    let spans = document.querySelectorAll("span");
    let allSpans = $('span');
    let konvertovano = allSpans.get();//konvertovano iz Jquery u javascript
   // console.log(typeof(spans), typeof(allSpans));
   konvertovano1=$(document.querySelectorAll("span"));
    console.log(konvertovano, allSpans);

    
      allSpans.css({
        left:'+='+speed
      })
      
     /*
     for (var i=0; i<konvertovano.length; i++) {
        konvertovano[i].style.left = "+" + speed + "px";
     }
     speed +=5;
*/
     /*
     konvertovano.forEach((e) => {
      //  console.log(e);
      e.style.left = "+" + speed + "px";
    });
    
    speed += 5;
  */

    //testiranje
    spans.forEach((a, i) => {
      let position = parseInt(a.style.left);
      console.log(position);
      if (position > 825) {
        //trebalo bi da stavim 850 ali se nesto ne uklapa
        clearAllIntervals();
      } else if (position > 700 && position < 710) {
        a.classList.add("danger");
      }
    });
  }, 100);

  

  
  
  let clearAllIntervals = () => {
    clearInterval(moveAll);
    clearInterval(ab);

    
  };
};

console.log(typeof parseInt("5"));
