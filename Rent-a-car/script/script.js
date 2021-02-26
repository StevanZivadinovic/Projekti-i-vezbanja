//DOM
let addCar = document.querySelector("input#addCar");
let formAddCar = document.querySelector("form.addCar");

let submitAddCar = document.querySelector("#submitAddCar");

//Add car
console.log(addCar, formAddCar);
addCar.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("hay");
  formAddCar.style.display = "flex";
  addCar.style.display = "none";
});

//add Car to firebase
submitAddCar.addEventListener("click", (e) => {
  //DOM - add car for firebase

  let brand = document.querySelector("#brand").value;
  let model = document.querySelector("#model").value;
  let constructionYear = document.querySelector("#constructionYear").value;
  let fuelType = document.querySelector("#fuelType").value;
  let numberOfSeats = document.querySelector("#numberOfSeats").value;
  let pictureLink = document.querySelector("#pictureLink").value;
  let pricePerDay = document.querySelector("#pricePerDay").value;
  let numberOfFreeCars = document.querySelector("#numberOfFreeCars").value;
  let carType = document.querySelector("#carType").value;
  e.preventDefault();
  db.collection("cars")
    .add({
      brand: brand,
      model: model,
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
});

//prikaz automobila

let ispis = document.querySelector(".ispis");
let btnShowCar = document.querySelector("#btnShowCar");

ispis.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.classList.contains("dugmeDelete")) {
    console.log("haj");

    let id = e.target.parentElement.getAttribute("data-id");
    console.log(id);

    db.collection("cars")
      .doc(id)
      .delete()
      .then(() => {
        console.log("Client is deleted");
      });
  }
});

let preuzmi = (data, id) => {
  console.log(id);
  let html = `<li class='listaIspis' data-id='${id}'>
      
      <div>brand: ${data.brand}</div>
      <div>model: ${data.model}</div>
      <div>constructionYear: ${data.constructionYear}</div>
      <div>fuelType: ${data.fuelType}</div>
      <div>numberOfSeats: ${data.numberOfSeats}</div>
      <div>fuelType: ${data.fuelType}</div>
      <div>pricePerDay: ${data.pricePerDay}</div>
      <div>numberOfFreeCars: ${data.numberOfFreeCars}</div>
      <div>carType: ${data.carType}</div>


      <img src=${data.pictureLink} style="width:100px">
      <button class="dugmeDelete">Delete</button>
      <button class="dugmeUpdate">Update</button>
      </li>`;

  ispis.innerHTML += html;
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
  db.collection("cars").onSnapshot((snapshot) => {
    snapshot.docChanges().forEach((change) => {
      let doc = change.doc.data();
      

      if (change.type === "added") {
        preuzmi(doc, change.doc.id);
      } else if (change.type === "modified") {
        console.log(change.doc.id, `update`)
        obrisati(change.doc.id);
        preuzmi(doc, change.doc.id);
      } else if (change.type === "removed") {
        if (confirm("Da li zelite da obrisete korisnika?")) {
          obrisati(change.doc.id);
        }
      }
    });
  });
});
let submitUpdateCar = document.querySelector("#submitUpdateCar");

ispis.addEventListener("click", (e) => {
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

      db.collection("cars").doc(id).update({
        brand:   document.querySelector("#brand").value,
        model: document.querySelector("#model").value,
        constructionYear: document.querySelector("#constructionYear").value,
        fuelType: document.querySelector("#fuelType").value,
        numberOfSeats: document.querySelector("#numberOfSeats").value,
        pictureLink: document.querySelector("#pictureLink").value,
        pricePerDay: document.querySelector("#pricePerDay").value,
        numberOfFreeCars: document.querySelector("#numberOfFreeCars").value,
        carType: document.querySelector("#carType").value
      })
      formAddCar.style.display = "none";
    });
  }
});
