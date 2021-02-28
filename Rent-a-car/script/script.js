//DOM
let addCar = document.querySelector("input#addCar");
let formAddCar = document.querySelector("form.addCar");
let formAddCustomer = document.querySelector("form.addCustomer");
let addCustomer = document.querySelector("input#addCustomer");
let addRentalEvent = document.querySelector("#addRentalEvent");
let addRentalEventForm = document.querySelector(".addRentalEvent");
let submitAddCar = document.querySelector("#submitAddCar");

//Add car

addCar.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("hay");

  formAddCar.style.display = "flex";
  addCar.style.display = "none";
  formAddCustomer.style.display = "none";
  addRentalEventForm.style.display = "none";
  addCustomer.style.display = "inline-block";
  addRentalEvent.style.display = "inline-block";
});

//add Car to firebase
submitAddCar.addEventListener("click", (e) => {
  //DOM - add car for firebase

  let brand = document.querySelector("#brand").value;
  let model = document.querySelector("#model").value;
  let brandModel = `${brand}-${model}`;
  let constructionYear = document.querySelector("#constructionYear").value;
  let fuelType = document.querySelector("#fuelType").value;
  let numberOfSeats = document.querySelector("#numberOfSeats").value;
  let pictureLink = document.querySelector("#pictureLink").value;
  let pricePerDay = document.querySelector("#pricePerDay").value;
  let numberOfFreeCars = document.querySelector("#numberOfFreeCars").value;
  let carType = document.querySelector("#carType").value;

  e.preventDefault();

  if (
    brand.length > 0 &&
    model.length > 0 &&
    constructionYear.length > 0 &&
    fuelType.length > 0 &&
    numberOfSeats.length > 0 &&
    pictureLink.length > 0 &&
    pricePerDay.length > 0 &&
    numberOfFreeCars.length > 0 &&
    carType.length > 0
  ) {
    db.collection("cars")
      .add({
        brand: brand,
        model: model,
        brandModel: brandModel,
        constructionYear: constructionYear,
        fuelType: fuelType,
        numberOfSeats: numberOfSeats,
        pictureLink: pictureLink,
        pricePerDay: pricePerDay,
        numberOfFreeCars: numberOfFreeCars,
        carType: carType,
      })
      .then((data) => {
        console.log("Car is added");
        formAddCar.style.display = "none";
        addCar.style.display = "flex";
      });
  } else {
    alert("Fill all fields");
  }
});

//show cars

let showList = document.querySelector(".showList");
let btnShowCar = document.querySelector("#btnShowCar");

showList.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.classList.contains("dugmeDelete")) {
    console.log("haj");

    let id = e.target.parentElement.getAttribute("data-id");
    console.log(id);

    db.collection("cars")
      .doc(id)
      .delete()
      .then(() => {
        console.log("Car is deleted");
      });
  }
});

let preuzmi = (data, id) => {
  console.log(id);
  let html = `<li class='listShowCars' data-id='${id}'>
      
      <img src=${data.pictureLink} style="width:100px;">
      <div>Brand: ${data.brand}</div>
      <div>Model: ${data.model}</div>
      <div>Construction year: ${data.constructionYear}</div>
      <div>Fuel type: ${data.fuelType}</div>
      <div>Number of seats: ${data.numberOfSeats}</div>
      <div>Price per day: ${data.pricePerDay}</div>
      <div>Number of free cars: ${data.numberOfFreeCars}</div>
      <div>Car type: ${data.carType}</div>


      <button class="dugmeDelete">Delete</button>
      <button class="dugmeUpdate">Update</button>
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

btnShowCar.addEventListener("click", (e) => {
  showList.innerHTML = "";
  db.collection("cars").onSnapshot((snapshot) => {
    snapshot.docChanges().forEach((change) => {
      let doc = change.doc.data();

      if (change.type === "added") {
        obrisati(change.doc.id);
        preuzmi(doc, change.doc.id);
      } else if (change.type === "modified") {
        console.log(change.doc.id, `update`);
        obrisati(change.doc.id);
        preuzmi(doc, change.doc.id);
      } else if (change.type === "removed") {
        if (confirm("Delete car?")) {
          obrisati(change.doc.id);
        }
      }
    });
  });
});
//update car
let submitUpdateCar = document.querySelector("#submitUpdateCar");

showList.addEventListener("click", (e) => {
  if (e.target.classList.contains("dugmeUpdate")) {
    console.log("haj");
    formAddCar.style.display = "flex";

    let id = e.target.parentElement.getAttribute("data-id");
    console.log(id);
    submitUpdateCar.style.display = "block";
    submitAddCar.style.display = "none";
    db.collection("cars")
      .doc(id)
      .onSnapshot((snapshot) => {
        console.log(snapshot.data());
        document.querySelector("#brand").value = snapshot.data().brand;
        document.querySelector("#model").value = snapshot.data().model;
        document.querySelector(
          "#constructionYear"
        ).value = snapshot.data().constructionYear;
        document.querySelector("#fuelType").value = snapshot.data().fuelType;
        document.querySelector(
          "#numberOfSeats"
        ).value = snapshot.data().numberOfSeats;
        document.querySelector(
          "#pictureLink"
        ).value = snapshot.data().pictureLink;
        document.querySelector(
          "#pricePerDay"
        ).value = snapshot.data().pricePerDay;
        document.querySelector(
          "#numberOfFreeCars"
        ).value = snapshot.data().numberOfFreeCars;
        document.querySelector("#carType").value = snapshot.data().carType;
      });

    submitUpdateCar.addEventListener("click", (e) => {
      e.preventDefault();

      db.collection("cars")
        .doc(id)
        .update({
          brand: document.querySelector("#brand").value,
          model: document.querySelector("#model").value,
          constructionYear: document.querySelector("#constructionYear").value,
          fuelType: document.querySelector("#fuelType").value,
          numberOfSeats: document.querySelector("#numberOfSeats").value,
          pictureLink: document.querySelector("#pictureLink").value,
          pricePerDay: document.querySelector("#pricePerDay").value,
          numberOfFreeCars: document.querySelector("#numberOfFreeCars").value,
          carType: document.querySelector("#carType").value,
        });
      formAddCar.style.display = "none";
    });
  }
});
