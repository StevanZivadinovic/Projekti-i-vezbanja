
let accountsTableBody = document.querySelector('#accounts-table-body');
let allLinks = document.querySelector('.nav-link');
let accountViewBtn = document.querySelector('[href="accounts-view"]');
let addAccountViewBtn = document.querySelector('[href="add-accounts-view"]');
let accountsView = document.querySelector('#accounts-view');
let addAccountView = document.querySelector('#add-account-view');
let views = document.querySelector('.view');

let showView = (e) =>{
    e.preventDefault();
    for(let i = 0; i<views.length; i++){
        views[i].style.display = 'none';
    }
}

    for(let i = 0; i<allLinks.length; i++){
        allLinks[i].addEventListener('click', showView);
    }



addAccountViewBtn.addEventListener('click',e=>{
    e.preventDefault();
    addAccountView.style.display = 'block';
    accountsView.style.display = 'none';
})

accountViewBtn.addEventListener('click',e=>{
    e.preventDefault();
    addAccountView.style.display = 'none';
    accountsView.style.display = 'block';
})





function createAccountsTable(){
    let htmlAccounts =``;
    for(let i =0; i<db.length; i++){
        let account = db[i];
        htmlAccounts +=
        `
        <tr>
            <td>${account.id}</td>
            <td>${account.name}</td>
            <td>${account.lastName}</td>
            <td>${account.email}</td>
            <td>${account.phone}</td>
        </tr>
        `
    }
    console.log(htmlAccounts);
    accountsTableBody.innerHTML = htmlAccounts;
    
}
createAccountsTable();