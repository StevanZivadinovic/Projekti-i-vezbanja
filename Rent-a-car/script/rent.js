let addRentalEvent = document.querySelector("#addRentalEvent");
let addRentalEventForm = document.querySelector(".addRentalEvent");

let formAddCustomer = document.querySelector("form.addCustomer");
let addCustomer = document.querySelector("input#addCustomer");
let formAddCar = document.querySelector("form.addCar");
let addCar = document.querySelector("input#addCar");
addRentalEvent.addEventListener("click", (e) => {
  console.log("haj");
  addRentalEventForm.style.display = "flex";
  addRentalEvent.style.display = "none";
  formAddCustomer.style.display = "none";
  formAddCar.style.display = "none";
  addCustomer.style.display = "inline-block";
  addCar.style.display = "inline-block";
});

let selectCar = document.querySelector("#selectCar");
let selectCustomer = document.querySelector("#selectCustomer");
addRentalEvent.addEventListener("click", (e) => {
  console.log("bla");
  db.collection("cars").onSnapshot((snapshot) => {
    let a;
    snapshot.docChanges().forEach((change) => {
      let doc = change.doc.data();
      console.log(doc.brandModel);

      a += `<option value=${doc.brandModel}> ${doc.brandModel} </option>`;
    });
    selectCar.innerHTML = a;
   
  });

  db.collection("customers").onSnapshot((snapshot) => {
    let a;
    snapshot.docChanges().forEach((change) => {
      let doc = change.doc.data();
      console.log(doc.fullNameConnected);
      a += `<option > ${doc.fullNameConnected} </option>`;
       selectCustomer.innerHTML = a;
    });
  });
});

let startDateAndTime = document.querySelector("#startDateAndTime");
let endDateAndTime = document.querySelector("#endDateAndTime");
// let selectCar = document.querySelector('#selectCar');
// let selectCustomer = document.querySelector('#selectCustomer');

let submitRentalEvent = document.querySelector("#submitRentalEvent");

submitRentalEvent.addEventListener("click", (e) => {
  e.preventDefault();
  if(startDateAndTime.value.length>0 &&endDateAndTime.value.length>0 &&  selectCar.value.length>0 && selectCustomer.value.length  )
  {
    db.collection("events")
    .add({
      startDateAndTime: startDateAndTime.value,
      endDateAndTime: endDateAndTime.value,
      selectCar: selectCar.value,
      selectCustomer: selectCustomer.value,
      dateOfRent: new Date().getTime(),
    })
    .then((docRef) => {
      let eventId = docRef.id; //get id of doc witch is added now

      console.log("Event is added");
      addRentalEventForm.style.display = "none";
      addRentalEvent.style.display = "inline-block";

      db.collection("events").onSnapshot((snapshot) => {
        snapshot.docChanges().forEach((change) => {
          if (change.doc.id === eventId) {
            let start = change.doc.data().startDateAndTime;
            let end = change.doc.data().endDateAndTime;
            let startDate = new Date(start).getTime();
            let endDate = new Date(end).getTime();

            db.collection("cars")
              .where("brandModel", "==", `${change.doc.data().selectCar}`)
              .get()
              .then((data) => {
                let price;
                data.docs.forEach((a) => {
                  console.log(a.data(), a.id);
                  price = a.data().pricePerDay;
                  if(parseInt(a.data().numberOfFreeCars)>0){

                    let numberOfFreeCars = parseInt(a.data().numberOfFreeCars)-1;
                    console.log(numberOfFreeCars)
                    db.collection("cars")
                    .doc(a.id)
                    .update({
                      numberOfFreeCars: numberOfFreeCars,
                    });
                  }

                });
                let priceShow = document.querySelector(".priceShow");
                priceShow.innerHTML = `Your bill is:${price}$ `;
                console.log(price, startDate, endDate);
                let diference = endDate - startDate;
                let daysDiference = diference / (1000 * 3600 * 24);
                console.log(daysDiference);
                if (daysDiference > 3 && daysDiference < 5) {
                  let totalAmount = price * (95 / 100);
                  console.log(totalAmount);
                  priceShow.innerHTML = `Your bill is:${totalAmount.toFixed(
                    2
                  )}$, you get 5% discount`;
                } else if (daysDiference > 5 && daysDiference < 10) {
                  let totalAmount = price * (93 / 100);
                  console.log(totalAmount);
                  priceShow.innerHTML = `Your bill is:${totalAmount.toFixed(
                    2
                  )}$, you get 7% discount`;
                } else if (daysDiference > 10) {
                  let totalAmount = price * (90 / 100);
                  console.log(totalAmount);
                  priceShow.innerHTML = `Your bill is:${totalAmount.toFixed(
                    2
                  )}$, you get 10% discount`;
                }
              });

            let nameCustomer = change.doc.data().selectCustomer;
            let nowday = new Date().getTime();

            eventId = docRef.id; //get id of doc witch is added now
            db.collection("events")
              .where("selectCustomer", "==", nameCustomer)
              .onSnapshot((snapshot) => {
                let countNum = 0;
                snapshot.docChanges().forEach((change) => {
                  // console.log(change.doc.data().dateOfRent)

                  let dif =
                    (nowday - change.doc.data().dateOfRent) /
                    (1000 * 3600 * 24);
                  console.log(dif);
                  if (dif < 60) {
                    countNum += 1;
                  }
                });
                console.log(countNum);
                if (countNum > 3) {
                  console.log("uspehic", change.doc.data().selectCar);

                  db.collection("cars")
                    .where("brandModel", "==", `${change.doc.data().selectCar}`)
                    .get()
                    .then((data) => {
                      let price;
                      data.docs.forEach((a) => {
                        console.log(a.data());
                        price = a.data().pricePerDay;
                        console.log(price);
                      });
                      let priceShow = document.querySelector(".priceShow");
                      priceShow.innerHTML = ``;
                      let totalAmount = price * (85 / 100);
                      priceShow.innerHTML = `Your bill is:${totalAmount}$, you get discount 15%
                ,and you are now VIP customer `;
                    });
                }
              });
          }
        });
      });
    });
  }else{
    alert('Fill all fields')
  }
 
});

let a = new Date();
console.log(a)



let x = document.querySelector(".xxx");
console.log(x)
x.addEventListener('click',e=>{

  addRentalEventForm.classList.add('removingForm');
  setTimeout(()=>{
    addRentalEventForm.style.display = 'none';
    addRentalEvent.style.display = 'inline-block';
  },2000)
  
})
