class Ui{
    constructor(lista){
        this.lista = lista;
    }
    clear(){
        lista.innerHTML='';
    }
    render(data){
        let vreme = dateFns.distanceInWordsToNow(data.created_at.toDate())
        let html = `<li>
            <span><b>${data.username}</b> </span>
            <span>${data.message} </span>
           <div style='color:lightgrey'>${vreme}</div>
        </li>
        `
        this.lista.innerHTML +=html;
    }
}