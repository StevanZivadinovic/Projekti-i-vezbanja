let addRentalEvent = document.querySelector('#addRentalEvent');
let addRentalEventForm = document.querySelector('.addRentalEvent');

let formAddCustomer = document.querySelector("form.addCustomer");
let addCustomer = document.querySelector("input#addCustomer");
let formAddCar = document.querySelector("form.addCar");
let addCar = document.querySelector("input#addCar");
addRentalEvent.addEventListener('click',e=>{
    console.log('haj')
    addRentalEventForm.style.display = 'flex';
    addRentalEvent.style.display = 'none';
    formAddCustomer.style.display='none';
    formAddCar.style.display = 'none';
    addCustomer.style.display = 'inline-block';
    addCar.style.display = 'inline-block';
    



})

let selectCar = document.querySelector('#selectCar');
let selectCustomer = document.querySelector('#selectCustomer');
addRentalEvent.addEventListener('click',e=>{
console.log('bla')
db.collection("cars").onSnapshot((snapshot) => {
  snapshot.docChanges().forEach((change) => {
    let doc = change.doc.data();
    console.log(doc.brandModel)
    selectCar.innerHTML+=`<option value=${doc.brandModel}> ${doc.brandModel} </option>`

  })

  // addRentalEventForm.addEventListener('onchange',e=>{
  //   console.log('haj')
  //   let selectCarValue = selectCar.value;
  //   console.log(selectCarValue)
  // })
   
  
    // snapshot.docChanges().forEach((change) => {
    //   let doc = change.doc.data();
    //   console.log('uspeh',doc);
     
    // });
})
  



db.collection("customers").onSnapshot((snapshot) => {
  snapshot.docChanges().forEach((change) => {
    let doc = change.doc.data();
    console.log(doc.fullNameConnected)
    selectCustomer.innerHTML+=`<option > ${doc.fullNameConnected} </option>`

  });
});

})

let startDateAndTime = document.querySelector('#startDateAndTime');
let endDateAndTime = document.querySelector('#endDateAndTime');
// let selectCar = document.querySelector('#selectCar');
// let selectCustomer = document.querySelector('#selectCustomer');

let submitRentalEvent = document.querySelector('#submitRentalEvent');
submitRentalEvent.addEventListener('click',e=>{
  e.preventDefault();
  db.collection('events').add({
    startDateAndTime:startDateAndTime.value,
    endDateAndTime:endDateAndTime.value,
    selectCar:selectCar.value,
    selectCustomer:selectCustomer.value
  })
  .then((data)=>{
    console.log('haj')
    console.log(data)
  })
})






 