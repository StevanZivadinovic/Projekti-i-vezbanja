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

//Dodeljivanje ID, prikaz svih dokumenata iz kolekcije i brisanje

let divPri = document.querySelector("#prikazDiv");
divPri.style.backgroundColor = "lightblue";
divPri.style.border = "2px solid black";
divPri.style.borderRadius = "6px";
divPri.style.margin = "5px 0 0 0";
divPri.style.listStyleType = "none";
divPri.style.padding = 0;
let dodeljivanjeId = (doc) => {
  let li = document.createElement("li");

  li.setAttribute("data-id", doc.id);
  li.style.hover = "background-color:red";

  let x = document.createElement("div");

  x.textContent = `x`;
  x.style.float = "right";
  x.style.backgroundColor = "white";
  x.style.padding = "3px 3px";
  li.appendChild(x);
  li.innerHTML += `${doc.data().name}<br>`;

  li.innerHTML += `${doc.data().email}<hr>`;

  let a = li.firstChild; //ovo je u stvari x znak, samo sam ga ovako dogvatio, posto je prvo dete li-a
  li.style.cursor = "pointer";

  divPri.appendChild(li);

  a.addEventListener("click", (e) => {
    e.stopPropagation();
    let r = confirm("Da li želite da trajno obrišete poruku?");
    if (r) {
      let id = e.target.parentElement.getAttribute("data-id");
      db.collection("podaci").doc(id).delete();
    }
  });
};

//dodeljujes id svakom elementu preko funkcije za dodeljivanje id-a, to je funkcija dodeljivanjeId.
//ovde prolazis kroz svaki dokument i ubacujes ga u gunkciju za dodeljivanje id koju si iznad definisao

db.collection("podaci")
  .get()
  .then((snapshot) => {
    console.log(snapshot.docs); //dobijes sva dokumenta u nizu, ali ne vidis njihov sadrzaj
    snapshot.docs.forEach((doc) => {
      // console.log(doc); //dobijes sve dokumente, svaki pojedinacno, ali opet ne vidis sadrzaj
      // console.log(doc.data()); //ovde tek vidis sazdraj!!!
      // console.log(doc.data().name);
      console.log(doc.id);

      dodeljivanjeId(doc);
    });
  });

//update, prekopirano sve skoro odozgo u event Listener za dugme update

update.addEventListener('click',e=>{
  let divPri = document.querySelector("#prikazDiv");
  divPri.innerHTML=``;

  

divPri.style.backgroundColor = "lightblue";
divPri.style.border = "2px solid black";
divPri.style.borderRadius = "6px";
divPri.style.margin = "5px 0 0 0";
divPri.style.listStyleType = "none";
divPri.style.padding = 0;
let dodeljivanjeId = (doc) => {
  let li = document.createElement("li");

  li.setAttribute("data-id", doc.id);
  li.style.hover = "background-color:red";

  let x = document.createElement("div");

  x.textContent = `x`;
  x.style.float = "right";
  x.style.backgroundColor = "white";
  x.style.padding = "3px 3px";
  li.appendChild(x);
  li.innerHTML += `${doc.data().name}<br>`;

  li.innerHTML += `${doc.data().email}<hr>`;

  let a = li.firstChild; //ovo je u stvari x znak, samo sam ga ovako dogvatio, posto je prvo dete li-a
  li.style.cursor = "pointer";

  divPri.appendChild(li);

  a.addEventListener("click", (e) => {
    e.stopPropagation();
    let r = confirm("Da li želite da trajno obrišete poruku?");
    if (r) {
      let id = e.target.parentElement.getAttribute("data-id");
      db.collection("podaci").doc(id).delete();
    }
  });
};



db.collection("podaci")
  .get()
  .then((snapshot) => {
    console.log(snapshot.docs); //dobijes sva dokumenta u nizu, ali ne vidis njihov sadrzaj
    snapshot.docs.forEach((doc) => {
      // console.log(doc); //dobijes sve dokumente, svaki pojedinacno, ali opet ne vidis sadrzaj
      // console.log(doc.data()); //ovde tek vidis sazdraj!!!
      // console.log(doc.data().name);
      console.log(doc.id);

      dodeljivanjeId(doc);
    });
  });




});
