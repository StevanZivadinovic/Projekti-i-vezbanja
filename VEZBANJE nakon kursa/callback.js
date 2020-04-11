/*
//PRVI PRIMER

function functionOne(x){//ovo mu izgleda dodje callback funkcija 
    //koja se poziva unutar obicne funkije

    alert(x);
};

functionOne(2); 
 
 
function functionTwo(var1,callback){
    
    callback(var1);
}

functionTwo(2,functionOne);






//DRUGI PRIMER  (ovo su sinhrone callback funkcije)

//ova prva funkcija je callback funkcija
function greeting(name) {
    alert('Hello ' + name);
  }
  


//ovo je druga funkcija unutar koje pozivamo callback funkciju. Da bi neka funkcija bila callback ona:
//1) mora da bude postavljena kao promenljiva neke funkcije
//2) mora da bude pozvana unutar te neke druge funkcije
  function processUserInput(callback) {
    let name = prompt('Please enter your name.');
    callback(name);
  }


  
  processUserInput(greeting);





  //treci primer

  let pokreni=(callback)=>{

    if(callback){

      callback();
    }


  };


  function ispis(){
    console.log(`cao ja sam callback funkcija`);
  }

  pokreni(ispis);
  */



/*
  let add=(var1,var2)=>{
    return var1+var2;
  }

  let multiple=(var1,var2)=>{
    return var1*var2;
  }


  let calc=(a,b,callback)=>{
     return callback(a,b);//ovde ttreba return 

  };

  console.log(calc(1,5,add));

  







  add=(var1,var2)=>{
  return var1+var2;
}

add(1,4);


let  me=add;
 me(4,5);
console.log(me(4,5));

let jou =add;
console.log(`Ovo je vrednost jou funkcije: ${jou(1,3)}`);


function addFive(x,addReference){//umesto addReference dodajemo callback funkciju, to je ovde add
  //funkcija

 return  addReference(5,x);

}
console.log(addFive(7,add));//ovde mozes da stavis i me ili jou umesto add  
*/

//callback funkcije se mogu podeliti na dve vrste:
//1) na one koje pretvaraju jednu vrednost u drugu
//2) na one koje uticu na vremenski prikaz stvari da tako kazem(mislim ovo sam video na klipu)



//Ovo su promisi
/*
let obecanjeOcisticuSobu=new Promise(function(resolve,reject){//ovo je definisanje obecanja

    //cleaning the room
    let isClean=true;//ovo odredjuje da li je ociscena ili ne(tj pokazuje cinjenicno stanje)
  //ako promenis u false pisace u konzoli da soba nije ociscena



    if(isClean){//ako je soba cista onda je reseno
      resolve('ociscena');
    }
    else{//ako nije onda je neuspelo(odbijeno)
      reject(`nije ociscena`);
    }


});

//ovo ispod u then se izvrsava samo ako je soba cista odnosno ako je resolve()
//ovo iz catch se izvrsava ako nije ispunjen promise; 
//To je poziv funkcije obecanjeOcisticuSobu

obecanjeOcisticuSobu.then(function(fromResolve){//ovo fromResolve je u stvari ono sto je upisano 
  //u resolve gore u if-u, a to je 'ociscena'. fromResolve nije neka ugradjena funkcija mogo si bilo
  //kako da je nazoves. To je promenljiva koja oznacava bilo kakav sadrzaj koji se nadje u resolve
  //callback funkciji. Gore u function su definisane dve callback funkcije resolve i reject.

  console.log('soba je '+ fromResolve);

}).catch(function(formReject){

  console.log('soba ' + formReject); 
});
*/

//ugnjezdeni promisi




let cleanRoom = function() {//pojedinacni promis
  return new Promise(function(resolve, reject) {
    resolve('Cleaned The Room');
  });
};

let removeGarbage = function(message) {
  return new Promise(function(resolve, reject) {
    resolve(message + ' remove Garbage');
  });
};

let winIcecream = function(message) {
  return new Promise(function(resolve, reject) {
    resolve( message + ' won Icecream');
  });
};




cleanRoom().then(function(result){
	return removeGarbage(result);//ugnjezden promis 
}).then(function(result){
	return winIcecream(result);//drugi ugnjezden promis
}).then(function(result){
	console.log('finished ' + result);
})


//umesto zadnjeg bloka mozes da napises izjedna ovako
Promise.all([cleanRoom(),removeGarbage(),winIcecream()]).then(function(){
console.log(`svi promisi su izvrseni`);

});

//alo hoces da se samo neki od promisa obave koristis rec 'race', ne znam kad se tacno ovo koristi

Promise.race([cleanRoom(),removeGarbage(),winIcecream()]).then(function(){
  console.log(`jedan od promisa je izvrsen`);
  
  });


  //asihorone funkcije






  