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
let obecanjeOcisticuSobu=new Promise(function(resolve,reject){//ovo je definisanje obecanja,
  //mozee da se zapise i kao arrow funkcija, videti prvi promis kod asinhornih dole

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


/*

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

*/
  //asihorone funkcije

  //ovo je sad jedna klasicna promise callback

  //covek ceka u redu za ulazak u bioskop. kad dodje na red da pokaze kartu on moli na blagajni
  //da ga sacekaju jer ce zena svakog trenutka da mu donese kartu. Oni mu kazu da izadje iz reda
  //pa kad dobije kartu nek stane ponovo u red
  /*
console.log('person1:shows ticket');
console.log(`person2:shows ticket`);

let promiseWifeBringingTicks=new Promise((resolve,reject)=>{//napisana kao arrow
setTimeout(()=>{
  resolve('ticket');

},3000);

});

promiseWifeBringingTicks.then((fromResolve)=>{
  console.log(`person3: shows ${fromResolve}`);
});
console.log('person4:shows ticket');
console.log(`person5:shows ticket`); */
//1,2,4,5 covek pokazu kartu pa tek nakon toga donosi kartu i 3 coovek, odnosno,
//sustina je da 4 i 5 covek ne cekaju na treceg nego pokazu kartu pre njega pa tek onda on









//zena donosi kartu ali je gladna i onda covek ne staje odmah u red nego ide da joj kupi hranu,
//znaci u kodu sad imamo izmenu

/*
console.log('person1:shows ticket');
console.log(`person2:shows ticket`);

let promiseWifeBringingTicks=new Promise((resolve,reject)=>{//napisana kao arrow
setTimeout(()=>{
  resolve('ticket');

},3000);

});

let uzmiKokice=promiseWifeBringingTicks.then((t)=>{
    console.log(`zena: donela sam kartu`)
    console.log(`muz: trebalo bi da udjemo`);
    console.log(`zena: ne, gladna sam`);//sad se ovo pokazuje nakon 3 sekunde
    return new Promise((resolve,reject)=>{ 
    resolve(`${t} kokice`);
    });

});

let uzmiSo = uzmiKokice.then((t)=>{
  console.log(`muz: imam kokice`)
  console.log(`muz: trebalo bi da udjemo`);
  console.log(`zena: ne, zelim soli na kokicama`);//sad se ovo pokazuje nakon 3 sekunde
  return new Promise((resolve,reject)=>{ 
  resolve(`${t} so`);
  });
});
  uzmiSo.then((t)=>{//ako se promis izvrsio onda se izvrsava ovo u then

console.log(t);
  });

console.log('person4:shows ticket');
console.log(`person5:shows ticket`);
*/


//prikaz asinhrone funkcije, osnovni prikaz
/*
console.log('person1:shows ticket');
console.log(`person2:shows ticket`);

const preMovie= async ()=>`premMovie`;
  //bilo kojoj funkciji da dodas async ona postaje asinhorna.
  //asinhrone funkcije uvek vracaju promise
   
  preMovie().then((m)=>console.log(m));//ovde se ispisuje text definisan u preMovie (`premMovie`);
  //i taj tekst se ispisuje nakon svih ovih console.log

console.log('person4:shows ticket');
console.log(`person5:shows ticket`);
*/


//ubacivanje celog zadatka u asinhronu funkciju
/*
console.log('person1:shows ticket');
console.log(`person2:shows ticket`);

const preMovie= async ()=>{

let promiseWifeBringingTicks=new Promise((resolve,reject)=>{//napisana kao arrow
setTimeout(()=>{
  resolve('ticket');

},3000);

});

  let uzmiKokice= new Promise((resolve,reject)=>{ 
  resolve(` kokice`);
  });

  let uzmiSo =new Promise((resolve,reject)=>{ 
  resolve(`so`);
  });
  

 let ticket= await promiseWifeBringingTicks;

 console.log(`zena: donela sam ${ticket}`)
  console.log(`muz: trebalo bi da udjemo`);
  console.log(`zena: ne, gladna sam`);//sad se ovo pokazuje nakon 3 sekunde

      let kokice=await uzmiKokice;

 console.log(`muz: imam ${kokice}`)
 console.log(`muz: trebalo bi da udjemo`);
 console.log(`zena: ne, zelim soli na kokicama`);

      let so=await uzmiSo;

console.log(`muz: imam ${so} na kokicama `);
console.log(`muz: Jos nesto draga`);
console.log(`zena: Ne, hajde da udjemo`);

 
return ticket;
}


preMovie().then((m)=>console.log(`person3: shows ${m}`));//ovde se ispisuje text definisan u preMovie (`premMovie`);
  //i taj tekst se ispisuje nakon svih ovih console.log, ALI NAKON 3 SEKUNDE
  
console.log('person4:shows ticket');
console.log(`person5:shows ticket`);
*/

//Ako hocemo da se sve izvrsi jednovremeno


/*
console.log('person1:shows ticket');
console.log(`person2:shows ticket`);

const preMovie= async ()=>{

let promiseWifeBringingTicks=new Promise((resolve,reject)=>{//napisana kao arrow
setTimeout(()=>{
  resolve('ticket');

},3000);

});

  let uzmiKokice= new Promise((resolve,reject)=>{ 
  resolve(` kokice`);
  });

  let uzmiSlatkis =new Promise((resolve,reject)=>{ 
  resolve(`slatkis`);
  });

  let uzmiKolu =new Promise((resolve,reject)=>{ 
    resolve(`kola`);
    });
  
    let ticket=await promiseWifeBringingTicks;

    let [kokice,slatkis,kola]= await Promise.all([uzmiKokice,uzmiSlatkis,uzmiKolu]);//nije bitan redosled navodjenja
    console.log(`${kokice}, ${slatkis}, ${kola}`);
return ticket;
}


preMovie().then((m)=>console.log(`person3: shows ${m}`));//ovde se ispisuje text definisan u preMovie (`premMovie`);
  //i taj tekst se ispisuje nakon svih ovih console.log, ALI NAKON 3 SEKUNDE
  
console.log('person4:shows ticket');
console.log(`person5:shows ticket`);
*/


//zena se nije vratila sa kartama, muz odustaje od filma
/*
console.log('person1:shows ticket');
console.log(`person2:shows ticket`);

const preMovie= async ()=>{

let promiseWifeBringingTicks=new Promise((resolve,reject)=>{//napisana kao arrow
setTimeout(()=>{
  reject('ticket');//ovde mozes da napises i reject da bi dole uso u catch petlju

},3000);

});

let ticket;
try{
   ticket=await promiseWifeBringingTicks;
}
catch(e){
   ticket=`sad face`;
}
return ticket;

}

preMovie().then((m)=>console.log(`person3: shows ${m}`));//ovde se ispisuje text definisan u preMovie (`premMovie`);
  //i taj tekst se ispisuje nakon svih ovih console.log, ALI NAKON 3 SEKUNDE
  
console.log('person4:shows ticket');
console.log(`person5:shows ticket`);
*/


//testiranje funkcije asinhrone





const testUserForm= async ()=>{

let loadUserForm=new Promise((resolve,reject)=>{//napisana kao arrow
setTimeout(()=>{
  resolve('page loaded');//ovde mozes da napises i reject da bi dole uso u catch petlju

},3000);

});

let enterUserName=new Promise((resolve,reject)=>{//napisana kao arrow
  setTimeout(()=>{
    resolve('user entered');//ovde mozes da napises i reject da bi dole uso u catch petlju
  
  },3000);
  
  });

let verifyUserDetails=()=>{


}

await loadUserForm;
await enterUserName;
let testResults=verifyUserDetails();

return testResults;//zato sto vracam praznu funkciju pise mu u kozoli shows undefinited
//ako stavim neku drugu vratice mi vrednost iz resolve ili rejected

}

testUserForm().then((m)=>console.log(`shows ${m}`));//ovde se ispisuje text definisan u preMovie (`premMovie`);
  //i taj tekst se ispisuje nakon svih ovih console.log, ALI NAKON 3 SEKUNDE

