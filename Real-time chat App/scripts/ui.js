class Ui{
    constructor(lista){
        this.lista = lista;
    }

    render(data){

        let html = `<li>
            <span>Ime:${data.username}</span>
            <span>Poruka:${data.message}</span>
        </li>
        `
        this.lista.innerHTML +=html;
    }
}