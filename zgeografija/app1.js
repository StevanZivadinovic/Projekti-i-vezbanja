import {Korisnik} from './korisnik.js';

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

   