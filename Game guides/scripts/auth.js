let createGuideForm = document.querySelector("#create-form");
let modalGuideForm = document.querySelector("#modal-create");
let listaZadataka = document.querySelector("#guidesLista");

listaZadataka.addEventListener("click", (e) => {
  if (e.target.classList.contains("ikso")) {
    console.log("haj");
    let id = e.target.parentElement.parentElement.getAttribute("data-id");
    console.log(id);
    db.collection("guides")
      .doc(id)
      .delete()
      .then(() => {
        console.log("Guide is deleted");
      });
  }
});

createGuideForm.addEventListener("submit", (e) => {
  e.preventDefault();

  db.collection("guides")
    .add({
      title: createGuideForm.title.value,
      content: createGuideForm.content.value,
    })
    .then((message) => {
      console.log(message);
      createGuideForm.reset();
      modalGuideForm.remove();
    })
    .catch((err) => {
      console.log(err);
    });
});

auth.onAuthStateChanged((user) => {
  if (user) {
    console.log(user);
    db.collection("guides").onSnapshot((snapshot) => {
      //samo posmatra promene
      ispisPodataka(snapshot.docs);
      promenaNav(user);
    },err=>{//ovo posle zareza je callback funkcija, kao drugi parametar onSnapshot funkcije
      console.log(err.message)
    })
    
  } else {
    promenaNav();
    ispisPodataka();
    console.log(user);
  }
});

let signInForm = document.querySelector("#signup-form");

signInForm.addEventListener("submit", (e) => {
  let email = signInForm.email.value;
  let password = signInForm.password.value;
  e.preventDefault();
  console.log(email, password);
  //sign in user
  auth.createUserWithEmailAndPassword(email, password)
    .then((credential) => {
      return db.collection('users').doc(credential.user.uid).set({
        biografy: signInForm['signup-bio'].value
      })//ovde bi morao da pozvovem then() da nisam uneo gore return

    })
    .then(()=>{
      signInForm.reset();
      let signIn = document.querySelector("#modal-signup");
      signIn.remove();

    })
    .catch((err) => {
      console.log(err);
    });
});

//logout user
let logout = document.querySelector("#logout");
logout.addEventListener("click", (e) => {
  e.preventDefault();
  auth
    .signOut()
    .then((data) => {
      console.log("izlogovan je");
    })
    .catch((err) => {
      console.log(err);
    });
});

//login
let loginForm = document.querySelector("#login-form");
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let email = loginForm["login-email"].value;
  let password = loginForm["login-password"].value;

  auth.signInWithEmailAndPassword(email, password).then((credential) => {
    console.log(credential.user);
  });
  loginForm.reset();
  let loginModal = document.querySelector("#modal-login");
  loginModal.remove();
});
