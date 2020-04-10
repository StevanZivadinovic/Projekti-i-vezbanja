
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