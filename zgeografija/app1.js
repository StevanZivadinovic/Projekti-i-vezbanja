import {Korisnik} from './korisnik.js';
import {Termini} from './termini.js';
/*


if(!localStorage.username){
    linkZaPromenuStranice.style ='href = "https://www.youtube.com/watch?v=rKMlRPa1Oa8"';
}

if(localStorage.username){
    linkZaPromenuStranice.style ='href = https://www.youtube.com/watch?v=rKMlRPa1Oa8';
}
*/
let linkZaPromenuStranice = document.querySelector('#promenaStranice1');
let checkUser = () => {
    if (!localStorage.username) {
        linkZaPromenuStranice.classList.add("onemoguci");
    //lihof.classList.add("disabled");
    
    } 
  
    };
  
let checkUser2 = () =>{
  if (localStorage.username) {
        linkZaPromenuStranice.classList.remove('onemoguci');
    }
    return localStorage.username;
}


    checkUser();
    checkUser2();

   
//validacija 



    let validFunc = (str) => {
        let regExp1 = /[\s]/gi;
        let regExp2 = /[^\w]/gi;
        let regExp3 = /[_]/g;
        let edF = str
          .replace(regExp1, "")
          .toLowerCase()
          .replace(regExp2, "")
          .replace(regExp3, "");
        let final = edF.charAt(0).toUpperCase() + edF.slice(1);
        return final;
      };
      



      
      let unosTermina = document.querySelector('#unosTermina');
      let formTermini = document.querySelector('#formTermini');
      let selectKategorija = document.querySelector('#selectKategorija');
     
      let info = document.querySelector('#info');


      if (formTermini) {
        formTermini.addEventListener("submit", (e) => {
          e.preventDefault();
          let kategorija = selectKategorija.value;
          let trm = new Termini(username(), kategorija);
          let textTerm = unosTermina.value;
          textTerm = validFunc(textTerm);
      
          if (trm.checkAddTerms(textTerm, kategorija)) {
            info.innerHTML = "Pojam vec postoji!";
          } else {
           
      
            setInterval(() => {
              info.innerHTML = "";
            }, 3000);
          }
        });
      }
