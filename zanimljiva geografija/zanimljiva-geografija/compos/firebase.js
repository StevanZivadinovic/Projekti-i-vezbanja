import NizKorisnika from './hallOfFame.js';
const ispisUbazu = (ime, grupa, pocetnoSlovo) => {
  console.log(ime, grupa, pocetnoSlovo);

  let provera;
  let kategorija;
  let vrednost;


  db.collection("pojmovi")
  .where('kategorija','==',`${grupa}`)
  .where('pojam','==',`${ime}`)
  .get()
  .then(data=>{

   
      if(data.size>0 ){
        console.log('neispravno');
        return false;
        
      }
      else{
        db.collection("pojmovi").doc()
          .set({
            kategorija: grupa,
            pojam:ime,
            pocetnoSlovo: pocetnoSlovo,
            korisnik: localStorage.getItem("korisnickoIme"),
            vremeKreiranja: new Date().toDateString() +' , '+ new Date().toLocaleTimeString()
          })
          .then((data) => {
             console.log("podaci su uneseni");
             NizKorisnika.NizKorisnika()
          })
          .catch(err=>{
            console.log('Postoji takav podatak');
          })
      }
        
      
    })


  
};

export default { ispisUbazu };
