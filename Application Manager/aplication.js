let apply = document.querySelector("#apply");
let del = document.querySelector("#delete");
let update = document.querySelector("#update");
let prikaz = document.querySelector("#prikaz");
let divPri = document.querySelector("#prikazDiv");
let lista = document.querySelector("#prikazDiv");
let forma = document.getElementById("mojaForma");

//reset forme, ne radi da ugradjenom funkcijom reset() pa moram ovako



//unos i brisanje podataka iz baze podataka
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
    .add(c1)
    // .doc()
    // .set(c1)
    .then(() => {
      console.log("Client added successfully");
     
    })
    .catch((error) => {
      console.error("Error adding client:", error);
    });
});

lista.addEventListener("click", (e) => {
  if (e.target.classList.contains("dugmeLista")) {
    console.log("haj");

    let id = e.target.parentElement.getAttribute("data-id");
    console.log(id);

    db.collection("podaci")
      .doc(id)
      .delete()
      .then(() => {
        console.log("Client is deleted");
      });
  }
});

// prikaz svih dokumenata i brisanje iz browsera

let preuzmi = (data, id) => {
  let html = `<li data-id='${id}'>
    
    <div>Name: ${data.name}</div>
    <div>Email: ${data.email}</div>
    <div>Age: ${data.age}</div>
    <div>Phone: ${data.PhoneNumber}</div>
    <button class="dugmeLista">Delete</button>
    <button class="dugmeUpdate">Update</button>

    </li>`;

  lista.innerHTML += html;
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

//listener promena
db.collection("podaci").onSnapshot((snapshot) => {
  snapshot.docChanges().forEach((change) => {
    console.log(change);
    let doc = change.doc;
    if (change.type === "added") {
      preuzmi(doc.data(), doc.id);
      
    } else if (change.type === "modified") {
      obrisati(doc.id);
      preuzmi(doc.data(), doc.id);
      
     
    } else if (change.type === "removed") {

      if(confirm('Da li zelite da obrisete korisnika?')){

        obrisati(doc.id);
      }
    }
  });
});

lista.addEventListener("click", (e) => {
  if (e.target.classList.contains("dugmeUpdate")) {
    console.log("haj");

    let id = e.target.parentElement.getAttribute("data-id");
    console.log(id);

    db.collection("podaci")
      .doc(id)
      .onSnapshot((snapshot) => {
        console.log(snapshot.data());
        document.querySelector("#usr").value = snapshot.data().name;
        document.querySelector("#pwd").value = snapshot.data().email;
        document.querySelector("#Age").value = snapshot.data().age;
        document.querySelector("#phd").value = snapshot.data().PhoneNumber;
        document.querySelector(
          ".form-check-input"
        ).value = snapshot.data().PreferredWayofCommunication;
        document.querySelector("#sel1").value = snapshot.data().EnglishLevel;
        document.querySelector("#aa").value = snapshot.data().AvailableToStart;
        document.querySelector(
          "#aaa"
        ).value = snapshot.data().TechnicalSkillsAndCourses;
        document.querySelector(
          "#aaa1"
        ).value = snapshot.data().ShortPersonalPresentation;
        document.querySelector("#home").value = snapshot.data().StudyFromHome;
      });

    let update2 = document.querySelector("#update");
    update2.addEventListener("click", (e) => {
      e.preventDefault();
      db.collection("podaci")
        .doc(id)
        .update({
          name: document.querySelector("#usr").value,
          email: document.querySelector("#pwd").value,
          age: document.querySelector("#Age").value,
          PhoneNumber: document.querySelector("#phd").value,
          PreferredWayofCommunication: document.querySelector(
            ".form-check-input"
          ).value,
          EnglishLevel: document.querySelector("#sel1").value,
          AvailableToStart: document.querySelector("#aa").value,
          TechnicalSkillsAndCourses: document.querySelector("#aaa").value,
          ShortPersonalPresentation: document.querySelector("#aaa1").value,
          StudyFromHome: document.querySelector("#home").value,
        });
    });
  }
});
