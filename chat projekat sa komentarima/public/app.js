//Moduli
import {Chatroom} from "./chat.js"
import {ChatUI} from "./ui.js"

//DOM elementi
let chatList = document.querySelector('#ulMessages');

let formMessage = document.querySelector('#formMessage');
let inputMessage = document.querySelector('#inputMessage');

let formUsername = document.querySelector('#formUsername');
let inputUsername = document.querySelector('#inputUsername');

let formColor = document.querySelector('#formColor');
let inputColor = document.querySelector('#inputColor');

let formDate = document.querySelector('#formDate');
let dateStart = document.querySelector('#dateStart');
let dateEnd = document.querySelector('#dateEnd');

let rooms = document.querySelector('nav');
let updatedUsername = document.querySelector('#divUpdatedUsername');

let buttons = document.querySelectorAll('button');

//Provera pozadinske boje u lokalnoj memoriji
let checkColor = () => {
    if(localStorage.colorLS){
        return localStorage.colorLS;
    } else {
        return "#ffffff";
    }
}
//Postavljanje pozadinske boje stranice
document.body.style.backgroundColor = checkColor();



//Provera username u lokalnoj memoriji
//ova funkcija omogucava da prilikom prvog pristupa stranici ne dodje do greske prilikom definisanja
//username-a. Odnosno, funkcija pita da li postoji uopste neka zadata vrednost u localStorage za 
//username. Ako postoji onda da je vrati, odnosno da prikaze kao posiljaoca poruke taj username
//koji je vec postavljen. Ako ne postoji nikakv onda da vrati 'anonymus'. Ovu smo funkciju ubacili
//u instacu chatroom klase Chatroom.
let checkUsername = () => {
    if(localStorage.usernameLS){
        return localStorage.usernameLS;
    } else {
        return "anonymous";
    }
}

//Kreiranje instanci klasa
let chatroom = new Chatroom('js', checkUsername());
let chatui = new ChatUI(chatList);//chatList je ustvari preuzeta ul lista iz html-a

//Provera prilikom učitanja stranice
//Koja soba je bila poslednja posećena, nju učitati 
let checkRoom = () => {
    if(localStorage.roomLS){
        return localStorage.roomLS;
    } else {
        return "general";
    }
}
chatroom.updateRoom(checkRoom());

//Poslednjoj posećenoj sobi dodati klasu koja će da oboji to dugme
buttons.forEach( b => {
    if(b.id == checkRoom()){
        b.classList.add('btn-selected');
    }
});

//Ispisi poruke uvek kad se ucita stranica(refrisira)
chatroom.getChets( data => {
    //console.log(data); //u konzoli
    chatui.templateLI(data);
}); 

//Kada je submit dugme Send pošalji poruku
formMessage.addEventListener('submit' , e => {//kad kliknes na send, posalje se poruka
    
    e.preventDefault();
    let message = inputMessage.value;//tekst poruke smo preuzeli ovde iz inputa za inos poruke
    chatroom.addChat(message)//tekst poruke unosimo u funkciju addChat koja dodaje poruke u bazu
        .then(()=>formMessage.reset())//ovo u then, ovo formMessage.reset() sluzi da ocisti input polje
        //nakon slanja poruke
        
        //ovde je neophodo da postoje than i catch posto je u pitanju await funkcija (vraca
        //se promise pa zato, ispitaj to)
         
        .catch( error => console.log(error));
        
    //Izbrisati sve poruke sa stanice
    chatui.brisanje();


    //Učitati poruke za promenjenu sobu
    chatroom.getChets( data => {
        //console.log(data); //u konzoli
        chatui.templateLI(data);//ispisuje poruke na ekranu, ovaj red iznad ih ispisuje u konzoli
    });

});

//Kada je submit dugme Update izmeni korisničko ime
formUsername.addEventListener('submit' , e => {
    e.preventDefault();
    let newUsername = inputUsername.value;
    chatroom.updateUsername(newUsername);
    formUsername.reset();//ovaj red sluzi za resetovanje forme.Ovo je umesto da napisemo
    //input.username=``. Odnosno ovim reset brisemo vrednosti svih input polja u formi.
    //bez njega bi smo svakom inputu morali da zadajemo za vrednost prazan string da bi ga ocistili
    //ovo nije asinhrona funkcija, ne vraca promis, pa zat oovo reset ne ide u then() nego samo ovako




    //Osvežiti čet prilikom promene korisničkog imena tako što ga izbrišemo i učitamo ponovo
    chatui.clear();
    chatroom.getChets(data => {
        chatui.templateLI(data);
    });

    //Kada je Update ime prikazati poruku u trajanju od 3s, nakon toga je obrisati
    updatedUsername.innerHTML = `Your username was updated to 
    <span id="spanNewUsername">${newUsername}</span>`;
    setTimeout(()=>{
        updatedUsername.innerHTML = ``;
    } , 3000);
});

//Promena soba
rooms.addEventListener('click' , e => {
    if(e.target.tagName == "BUTTON"){
        //Kada je kliknuto na dugme, dodeliti mu klasu da je baš ono selektovano
        
        buttons.forEach( b => {
            //"Očistiti" dugme od btn-selected klase
            if(b.classList.contains('btn-selected')){//prvo sklaanjamo klasu ako je ima pa je dole
                //dodajemo selektovanom dugmetu
                b.classList.remove('btn-selected');
            }            
        });
        let btnId = e.target.getAttribute('id');
        let btn = document.getElementById(btnId);

        btn.classList.add('btn-selected');

        //Izbrisati sve poruke sa stanice
        chatui.brisanje();//ova clear(promenio sam u brisanje) funkcija je definisana u ui.js. Ovo trenutno brise i poruke
        //iz sobe na koju smo kliknuli, ali to resavamo ovim dole delom gde ucitavamo poruke za
        //promenjenu sobu

        //Promeniti sobu
        let newRoom = e.target.getAttribute('id');//ovo su id dugmica soba,
        // ti id-jevi su zadati u html-u.
        chatroom.updateRoom(newRoom);
        localStorage.setItem('roomLS' , newRoom);//key je prva vrednost druga je value 

        //Učitati poruke za promenjenu sobu
        chatroom.getChets( data => {
            //console.log(data); //u konzoli
            chatui.templateLI(data);
        });
    }
});

//Event listener za boju
formColor.addEventListener('submit', e => {
    e.preventDefault();
    let hexColor = inputColor.value;
    localStorage.setItem('colorLS' , hexColor);
    setTimeout(()=>{
        document.body.style.backgroundColor = hexColor;
    } , 500);
});

//Event listener za datum
formDate.addEventListener('submit', e => {
    e.preventDefault();
    chatui.clear();
    chatroom.getChetsByDate((data) => {
        chatui.templateLI(data);
    });

    formDate.reset();
});

chatList.addEventListener('click', e => {
    if(e.target.tagName === "IMG") {
        let liElement = e.target.parentElement;

        if(liElement.classList.contains('not-me')){
            liElement.remove();
        } else if(liElement.classList.contains('me')){
            let liId = liElement.id;
            if(chatroom.deleteChat(liId) == true){
                liElement.remove();
            }            
        }
    }
});