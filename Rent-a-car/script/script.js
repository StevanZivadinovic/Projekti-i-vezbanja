//DOM
let addCar = document.querySelector('input#addCar');
let formAddCar = document.querySelector('form.addCar');

let submitAddCar = document.querySelector('#submitAddCar');

//Add car
console.log(addCar, formAddCar)
addCar.addEventListener('click',(e)=>{
    e.preventDefault();
    console.log('hay')
    formAddCar.style.display='flex';
    addCar.style.display='none';
})


//add Car to firebase
submitAddCar.addEventListener('click',(e)=>{
    //DOM - add car for firebase


let brand = document.querySelector('#brand').value;
let model = document.querySelector('#model').value;
let constructionYear = document.querySelector('#constructionYear').value;
let fuelType = document.querySelector('#fuelType').value;
let numberOfSeats = document.querySelector('#numberOfSeats').value;
let pictureLink = document.querySelector('#pictureLink').value;
let pricePerDay = document.querySelector('#pricePerDay').value;
let numberOfFreeCars = document.querySelector('#numberOfFreeCars').value;
let carType = document.querySelector('#carType').value;
    e.preventDefault();
    db.collection('cars').add({
        brand:brand,
        model:model,
        constructionYear:constructionYear,
        fuelType:fuelType,
        numberOfSeats:numberOfSeats,
        pictureLink:pictureLink,
        pricePerDay:pricePerDay,
        numberOfFreeCars:numberOfFreeCars,
        carType:carType
    
    }).then((data)=>{
        console.log('Car is added');
        formAddCar.style.display='none';
        addCar.style.display='flex';
    })

})

//prikaz automobila

let ispis = document.querySelector('.ispis');
let btnShowCar = document.querySelector('#btnShowCar');

btnShowCar.addEventListener('click',(e)=>{
    e.preventDefault()

    db.collection("cars").onSnapshot((snapshot) => {
        snapshot.docChanges().forEach((change) => {
         
          let doc = change.doc.data();
            console.log(doc)
        });
      });
})



