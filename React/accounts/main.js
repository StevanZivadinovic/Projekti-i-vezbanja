
let accountsTableBody = document.querySelector('#accounts-table-body');
let accountViewBtn = document.querySelector('[href="accounts-view"]');
console.log(accountViewBtn);

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