//dom
let lista = document.querySelector('.chat-list');


let prvi = new Chatroom('gaming', 'stevan');
let prikazBrowseru = new Ui(lista);

prvi.promenaRoom = 'general';
prvi.ispis((data)=>{
     console.log(data.username)
    prikazBrowseru.render(data);
});
