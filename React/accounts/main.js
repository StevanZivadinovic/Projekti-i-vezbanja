let accountsTableBody = document.querySelector("#accounts-table-body");
let allLinks = document.querySelector(".nav-link");
let accountViewBtn = document.querySelector('[href="accounts-view"]');
let addAccountViewBtn = document.querySelector('[href="add-accounts-view"]');
let accountsView = document.querySelector("#accounts-view");
let addAccountView = document.querySelector("#add-account-view");
let views = document.querySelector(".view");
let idInput = document.querySelector('[placeholder="id"]');
let nameInput = document.querySelector('[placeholder="name"]');
let lastNameInput = document.querySelector('[placeholder="last name"]');
let emailInput = document.querySelector('[placeholder="email"]');
let phoneInput = document.querySelector('[placeholder="phone"]');
let btnSave = document.querySelector("#save");

let saveAccount = () => {
  let newAccount = {
    id: idInput.value,
    name: nameInput.value,
    lastName: lastNameInput.value,
    email: emailInput.value,
    phone: phoneInput.value,
  };
  console.log(newAccount);
  db.push(newAccount);
  idInput.value = "";
  nameInput.value = "";
  lastNameInput.value = "";
  emailInput.value = "";
  phoneInput.value = "";
  console.log(db);
  createAccountsTable();
  showView("#accounts-view");
};

btnSave.addEventListener("click", saveAccount);

for (let i = 0; i < allLinks.length; i++) {
  allLinks[i].addEventListener("click", showView);
}

let showView = (e) => {
  for (let i = 0; i < views.length; i++) {
    views[i].style.display = "none";
  }
  if (e instanceof Event) {
    e.preventDefault();
    let id = `#${this.getAttribute("href")}`;
    document.querySelector(id).style.display = "block";
  } else {
    document.querySelector(e).style.display = "block";
  }
};

addAccountViewBtn.addEventListener("click", (e) => {
  e.preventDefault();
  addAccountView.style.display = "block";
  accountsView.style.display = "none";
});

accountViewBtn.addEventListener("click", (e) => {
  e.preventDefault();
  addAccountView.style.display = "none";
  accountsView.style.display = "block";
});

function createAccountsTable() {
  let htmlAccounts = ``;
  for (let i = 0; i < db.length; i++) {
    let account = db[i];
    htmlAccounts += `
        <tr>
            <td>${account.id}</td>
            <td>${account.name}</td>
            <td>${account.lastName}</td>
            <td>${account.email}</td>
            <td>${account.phone}</td>
            <td><button data-id='${i}' class='edit-btn btn-sm btn-warning form'>Edit</button></td>
            <td><button data-id='${i}' class='delete-btn btn-sm btn-danger form'>Delete</button></td>

        </tr>
        `;
  }
  console.log(htmlAccounts);
  accountsTableBody.innerHTML = htmlAccounts;
  let allDeleteBtns = document.querySelectorAll(".delete-btn");
  let allEditBtns = document.querySelectorAll(".edit-btn");

  console.log(allDeleteBtns);

  

  for (let i = 0; i < allDeleteBtns.length; i++) {
    let deleteAccount = () => {
      let id = allDeleteBtns[i].getAttribute("data-id");
      console.log(id);
    };
    let editAccount = () => {
      let id = allEditBtns[i].getAttribute("data-id");
      console.log(id);
    };
    allDeleteBtns[i].addEventListener("click", deleteAccount);
    allEditBtns[i].addEventListener("click", editAccount);
  }
}


let editAccount = () => {
  let id = this.getAttribute("data-id");
  console.log(id);
};

createAccountsTable();
