//Query selektor po imenu taga

let paragraf=document.querySelector('p');
console.log(paragraf);
let div=document.querySelector('div');
console.log(div);


//query selektor po imenu klase

let poklasi=document.querySelector('.test');
console.log(poklasi);

let poid=document.querySelector('#treci_paragraf');
console.log(poid);

poklasi=document.querySelectorAll('.test');
console.log(poklasi);

paragrafklasa=document.querySelectorAll('p.test');
console.log(paragrafklasa);


console.log(typeof paragrafklasa);
console.log(typeof poid);



paragrafklasa.forEach(a=>{

	console.log(a);

});

for(let i=0; i<paragrafklasa.length; i++)
{

	console.log(paragrafklasa[i]);
}



let dodavanje=document.querySelector('#treci_paragraf');
dodavanje+=`je najlepsi`;

console.log(dodavanje);s











