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
  let html = `<li data-id='${id}'>
      
      <div>brand: ${data.brand}</div>
      <div>model: ${data.model}</div>
      <div>constructionYear: ${data.constructionYear}</div>
      <div>fuelType: ${data.fuelType}</div>
      <div>numberOfSeats: ${data.numberOfSeats}</div>
      <img src=${data.pictureLink} style="width:200px">
      <div>fuelType: ${data.fuelType}</div>
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
      console.log(doc.constructionYear);

      if (change.type === "added") {
        preuzmi(doc, change.doc.id);
      } else if (change.type === "modified") {
        obrisati(doc.id);
        preuzmi(doc, change.doc.id);
      } else if (change.type === "removed") {
        if (confirm("Da li zelite da obrisete korisnika?")) {
          obrisati(change.doc.id);
        }
      }
    });
  });
});

ispis.addEventListener("click", (e) => {});
