let apply = document.querySelector("#apply");
let del = document.querySelector("#delete");
let update = document.querySelector("#update");
let prikaz = document.querySelector("#prikaz");

apply.addEventListener("click", (a) => {
  a.preventDefault();

  let name = document.querySelector("#usr").value;
  let email = document.querySelector("#pwd").value;
  let age = document.querySelector("#Age").value;
  let phone = document.querySelector("#phd").value;
  let communication = document.querySelector(".form-check-input").value;
  let english = document.querySelector("#sel1").value;
  let start = document.querySelector("#aa").value;
  let tehnical = document.querySelector("#aaa").value;
  let presentation = document.querySelector("#aaa1").value;
  let home = document.querySelector("#home").value;
  let c1 = {
    name: name,
    email: email,
    age: age,
    PhoneNumber: phone,
    PreferredWayofCommunication: communication,
    EnglishLevel: english,
    AvailableToStart: start,
    TechnicalSkillsAndCourses: tehnical,
    ShortPersonalPresentation: presentation,
    StudyFromHome: home,
  };

  db.collection("podaci")
    .doc()
    .set(c1)
    .then(() => {
      console.log("Client added successfully");
    })
    .catch((error) => {
      console.error("Error adding client:", error);
    });
});

// Prikaz svih dokumenata iz kolekcije

let divPri = document.querySelector("#prikazDiv");

prikaz.addEventListener("click", (a) => {
  let podaci = db.collection("podaci");
  podaci
    .get()
    .then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());

        divPri.innerHTML += `<div style='cursor:pointer'>Name: ${
          doc.data().name
        }</div>`;
      });
    })
    .catch((error) => {
      console.error("Cannot get documents from collection: ", error);
    });
});

//delete document

divPri.addEventListener("click", (e) => {
  if (e.target === doc.data().name) {
    let id = data().id;
    console.log(id);

    db.collection("podaci")
      .doc(id)
      .delete()
      .then(() => {
        console.log("Zadatak izbrisan");
      })
      .catch((error) => {
        console.log(`Nemoguce obrisati dokument: ${error}`);
      });
  }
});
