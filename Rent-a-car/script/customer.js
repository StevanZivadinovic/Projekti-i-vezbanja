//DOM
let addCustomer = document.querySelector("input#addCustomer");
let formAddCustomer = document.querySelector("form.addCustomer");
let formAddCar = document.querySelector("form.addCar");
let addCar = document.querySelector("input#addCar");

let submitAddCustomer = document.querySelector("#submitAddCustomer");
let ispisForme  = document.querySelector('.ispisForme');

//Add customer

addCustomer.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("hay");
 
  formAddCustomer.style.display = "flex";
  addCustomer.style.display = "none";
  formAddCar.style.display='none'
  addCar.style.display='inline-block'
});

//add Customer to firebase
submitAddCustomer.addEventListener("click", (e) => {
  //DOM - add car for firebase

  let fullName = document.querySelector("#fullName").value;
  let emailAddress = document.querySelector("#emailAddress").value;
  let phoneNumber = document.querySelector("#phoneNumber").value;
  
  e.preventDefault();
  if(fullName.length>0 && emailAddress.length>0 && phoneNumber.length>0){

    db.collection("customers")
      .add({
        fullName: fullName,
        emailAddress: emailAddress,
        phoneNumber: phoneNumber,
      
      })
      .then((data) => {
        console.log("Customer is added");
        formAddCustomer.style.display = "none";
        addCustomer.style.display = "flex";
      });
  }else{
    alert('Fill all fields')
  }
});

//show customers

let showList = document.querySelector(".showList");
let btnShowCustomer = document.querySelector("#btnShowCustomer");

showList.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.classList.contains("dugmeDeleteCustomer")) {
    console.log("haj");

    let id = e.target.parentElement.getAttribute("data-id");
    console.log(id);

    db.collection("customers")
      .doc(id)
      .delete()
      .then(() => {
        console.log("Customer is deleted");
      });
  }
});

let preuzmi = (data, id) => {
  console.log(id);

  let html = `<li class='listShowCustomers' data-id='${id}'>
      
      <div>Full name: ${data.fullName}</div>
      <div>Email address: ${data.emailAddress}</div>
      <div>Phone number: ${data.phoneNumber}</div>
      
      <button class="dugmeDeleteCustomer">Delete</button>
      <button class="dugmeUpdateCustomer">Update</button>
      </li>`;

      showList.innerHTML += html;
};

let obrisati = (id) => {
  let li = document.querySelectorAll("li");
  li.forEach((a) => {
    let dataId = a.getAttribute("data-id");
    if (dataId === id) {
      a.remove();
    }
  });
};

btnShowCustomer.addEventListener("click", (e) => {
  showList.innerHTML = '';
  db.collection("customers").onSnapshot((snapshot) => {
    snapshot.docChanges().forEach((change) => {
      let doc = change.doc.data();
      

      if (change.type === "added") {
        obrisati(change.doc.id);
        preuzmi(doc, change.doc.id);
      } else if (change.type === "modified") {
        console.log(change.doc.id, `update`)
        obrisati(change.doc.id);
        preuzmi(doc, change.doc.id);
      } else if (change.type === "removed") {
        if (confirm("Delete customer?")) {
          obrisati(change.doc.id);
        }
      }
    });
  });
});


//update customer
let submitUpdateCustomer = document.querySelector("#submitUpdateCustomer");

showList.addEventListener("click", (e) => {
  if (e.target.classList.contains("dugmeUpdateCustomer")) {
    console.log("haj");
    formAddCustomer.style.display = "flex";
    formAddCar.style.display = 'none';
    let id = e.target.parentElement.getAttribute("data-id");
    console.log(id);
    submitUpdateCustomer.style.display = "block";
    submitAddCustomer.style.display = "none";
    db.collection("customers")
      .doc(id)
      .onSnapshot((snapshot) => {
        console.log(snapshot.data());
         document.querySelector("#fullName").value= snapshot.data().fullName;
        document.querySelector("#emailAddress").value= snapshot.data().emailAddress;
         document.querySelector("#phoneNumber").value= snapshot.data().phoneNumber;

           
      });

    submitUpdateCustomer.addEventListener("click", (e) => {
      e.preventDefault();

      db.collection("customers").doc(id).update({
        fullName:   document.querySelector("#fullName").value,
        emailAddress: document.querySelector("#emailAddress").value,
        phoneNumber: document.querySelector("#phoneNumber").value,
        
      })
      formAddCustomer.style.display = "none";
    });
  }
});