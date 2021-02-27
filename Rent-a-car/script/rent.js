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
  let a;
  snapshot.docChanges().forEach((change) => {
    let doc = change.doc.data();
    console.log(doc.brandModel)
    
    a+=`<option value=${doc.brandModel}> ${doc.brandModel} </option>`
    
    
  })
  selectCar.innerHTML=a
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
  .then((docRef)=>{
   let eventId = docRef.id;//get id of doc witch is added now
     
    console.log("Event is added");
    addRentalEventForm.style.display = 'none';
    addRentalEvent.style.display = 'inline-block'

    db.collection('events').onSnapshot((snapshot) => {
      snapshot.docChanges().forEach((change) => {

        if(change.doc.id === eventId){
          console.log(change.doc.data().selectCar);

          db.collection('cars').where('brandModel', '==' ,`${change.doc.data().selectCar}`)
          .get()
          .then(data=>{
            let price;
            data.docs.forEach(a=>{
              console.log(a.data())
              price = a.data().pricePerDay;
            })
            let priceShow = document.querySelector('.priceShow');
            priceShow.innerHTML = price;
            console.log(price)
          })

        }
      })
    })
  })
})







 