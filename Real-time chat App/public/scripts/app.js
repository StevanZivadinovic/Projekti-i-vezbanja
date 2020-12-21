//dom
let lista = document.querySelector(".chat-list");
let newForm = document.querySelector(".new-chat");
let newName = document.querySelector(".new-name");
let ispis = document.querySelector(".ispis");
let dugmici = document.querySelectorAll(".p");
console.log(dugmici);

dugmici.forEach((a) => {
  a.addEventListener("click", (e) => {
    console.log(a.id);
    let id = a.id;
    prvi.updateRoom(id);
    prikazBrowseru.clear();
    prvi.ispis((data) => {
      prikazBrowseru.render(data);
    });
  });
});

newForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(prvi.preuzimanjeRoom);
  let message = newForm.message.value;
  prvi
    .addChat(message)
    .then(() => {
      newForm.reset();
    })
    .catch((err) => {
      console.log(err);
    });
});

newName.addEventListener("submit", (e) => {
  e.preventDefault();
  let ime = newName.message.value.trim();

  prvi.updateUsername(ime); //moze i ovako umesto ovog reda ispod
  // prvi.promeniUsername = ime;
  prvi.preuzimanjeUsername;
  ispis.innerHTML = `Your name is updated to: ${ime}`;
  setTimeout(() => {
    ispis.innerHTML = "";
  }, 3000);
  newName.reset();
  setTimeout(() => {
    window.location.reload();
  }, 3000);
  
});

let checkUsername = () => {
  if (localStorage.username) {
    return localStorage.username;
  } else {
    return "anonymous";
  }
};

let checkRoom = () => {
  if (localStorage.room) {
    return localStorage.room;
  } else {
    return "gaming";
  }
};

let prikazBrowseru = new Ui(lista);
let prvi = new Chatroom(checkRoom(), checkUsername());

prvi.ispis((data) => {
  prikazBrowseru.render(data);
});

// db.collection('chats').get()
// .then(snapshot=>{
//     snapshot.docs.forEach(doc => {
//       // doc.ref.delete();

//     });
// });
