//preuzimanje podataka

let getApi = async (city) => {
    let apiKey = "aa0ee3ca-b144-45f7-850c-2600ffb5dec4";
    
    let url = `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest`;
    qString = "?CMC_PRO_API_KEY=" + apiKey + "&start=1&limit=5000&convert=USD";
    let data = await fetch(url+qString);
    let data1 = await data.json();
    return data1;
};

getApi().then(data=>{
    let niz=[]
    niz=data.data.sort((a,b) => b.quote.USD.price-a.quote.USD.price).slice(0,50)
    // console.log(niz)
    localStorage.setItem('topFifty', JSON.stringify(niz))
    
    document.querySelector('.keepLoader').style.display='none'
})
let topFifty=JSON.parse(localStorage.getItem('topFifty'))

// console.log(topFifty);



//ispis tabele
let enable = ()=>{

    document.querySelectorAll('.dugmici').forEach(a=>{
    //    console.log(a.previousElementSibling.value.length) 
        if(a.previousElementSibling.value.length>0){
    
            a.disabled=false
        }
        else{
            a.disabled=true
        }
    
      
    })
}

let table = document.querySelector('.tableTopFifty');
// let inputValue = document.querySelector('.amount').value;
topFifty.forEach(element => {
    // console.log(element)
    table.innerHTML+=`<tr>
    <td>${element.name}</td>
    <td>${element.symbol}</td>
    <td>${element.quote.USD.price.toFixed(2)}</td>
    <td class='${element.quote.USD.percent_change_24h.toFixed(2)>0 ? 'positive': 'negative'}' >${element.quote.USD.percent_change_24h.toFixed(2)}%</td>
    <td><form class='inputField'><input onkeyup='enable()'  class='amount' type='text'><button class='dugmici' disabled='true'>Submit</button></form></td>
    <td></td>
    </tr>`
});
document.querySelectorAll('.inputField').forEach(a=>{
    

    a.addEventListener('submit',e=>{
        e.preventDefault()
  console.log(a.firstChild.value, parseInt(a.parentElement.previousElementSibling.previousElementSibling.innerText))
        let vrednost = parseInt(a.firstChild.value)*parseInt(a.parentElement.previousElementSibling.previousElementSibling.innerText)
        a.parentElement.nextElementSibling.innerText=`$${vrednost}`
        console.log('haj', vrednost)
    })
})


Array.from(table.children).forEach((a,i)=>{

    if(i%2===0){
        a.classList='paran'
    }else{
        a.classList='neparan'
    }
    console.log(a)
    
})




