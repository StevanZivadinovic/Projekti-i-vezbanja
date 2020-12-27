let guidesList = document.querySelector("#guidesLista");
let logInNav = document.querySelectorAll('.logged-in');
let logOutNav = document.querySelectorAll('.logged-out');

//skrivanje pojedinih elemenata navbar-a u zavisnosti da li je korisnik
//prijavljen ili ne



let promenaNav = (user) =>{
  if(user){
    logInNav.forEach(item=>{item.style.display = 'block'});
    logOutNav.forEach(item=>{item.style.display = 'none'});

  }
  else{
    logInNav.forEach(item=>{item.style.display = 'none'});
    logOutNav.forEach(item=>{item.style.display = 'block'});
  }
}



//ispis podataka iz baze u browseru

// let ispisPodataka = (data, id)=>{
//   if(data){

//       let li =` 
//           <li  data-id='${id}'>
//               <button class="collapsible" id="coll">${data.title} </button><span><button class='iks'>X</button></span>
//               <div class="collapsible" id="ispis">
//                 <p>${data.content}</p>
//               </div>
//             </li>
//           `;
    
//       guidesList.innerHTML += li;
//  }
//  else {
//       guidesList.innerHTML = `<li><h5>Login to view guides</h5></li>`;
//     }

// }


let ispisPodataka = (data) => {
  console.log(data);
  if (data) {
    let html = ``
  data.forEach(doc=>{
    let guide = doc.data();
    let id = doc.id;
    let li =` 
      <li  data-id='${id}'>
          <button class="collapsible" id="coll">${guide.title}</button><span style='cursor:pointer' class='ikso'>X</span>
          <div class="collapsible" id="ispis">
            <p>${guide.content}</p>
          </div>
        </li>
      `;
      html +=li;
  })
      guidesList.innerHTML = html;
  
  } else {
    guidesList.innerHTML = `<li><h5>Login to view guides</h5></li>`;
  }
};








let navigacija = document.querySelectorAll("#signIn");
let signIn = document.querySelector("#modal-signup");

let logedIn = document.querySelectorAll("#logIn");
let logedInForm = document.querySelector("#modal-login");

let guide = document.querySelectorAll("#createGuide");
let createGuide = document.querySelector("#modal-create");

let account = document.querySelectorAll("#account");
let modalAccount = document.querySelector("#modal-account");

navigacija.forEach((a) => {
  a.addEventListener("click", (e) => {
    e.preventDefault();
    signIn.style.display = "block";
  });
});

logedIn.forEach((a) => {
  a.addEventListener("click", (e) => {
    e.preventDefault();
    logedInForm.style.display = "block";
  });
});

guide.forEach((a) => {
  a.addEventListener("click", (e) => {
    e.preventDefault();
    createGuide.style.display = "block";
  });
});

account.forEach((a) => {
  a.addEventListener("click", (e) => {
    e.preventDefault();
    modalAccount.style.display = "block";
  });
});

let iks = document.querySelectorAll(".iks");
iks.forEach((a) => {
  a.addEventListener("click", (e) => {
    signIn.style.display = "none";
    logedInForm.style.display = "none";
    createGuide.style.display = "none";
    modalAccount.style.display = "none";
  });
});
