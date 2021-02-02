const ispisUbazu = (ime, grupa, pocetnoSlovo) => {
  console.log(ime, grupa, pocetnoSlovo);

  let provera;
  let kategorija;
  let vrednost;
//  let a =()=>{
//   db.collection("pojmovi")
//           .add({
//             kategorija: grupa,
//             pojam:ime
//           })
//           .then((data) => {
//              console.log("podaci su uneseni");
//           })
//           .catch(err=>{
//             console.log('Postoji takav podatak');
//           })
//  } 


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
          })
          .catch(err=>{
            console.log('Postoji takav podatak');
          })
      }
        
      
    })


  
};

export default { ispisUbazu };
