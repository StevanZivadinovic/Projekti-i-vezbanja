class Ui{
    constructor(lista){
        this.lista = lista;
    }
    clear(){
        lista.innerHTML='';
    }
    dateToday(date){
        let today = new Date();
        let todayD = today.getDate();
        let todayM = today.getMonth() + 1;
        let todayY = today.getFullYear();

        let d = date.getDate();
        let m = date.getMonth() + 1;
        let y = date.getFullYear();

        if(todayD==d && todayM==m && todayY==y){
            return true; //ako je današnji datum
        } else {
            return false; //ako nije današnji datum
        }
    }


    formatDate(date){  
        this.dateToday(date);   
        let d = date.getDate();//ovo je numericka vrednost
        let m = date.getMonth() + 1;
        let y = date.getFullYear();
        let h = date.getHours();
        let min = date.getMinutes();

        //Dodavanje 0 ispred jednocifrenih vrednosti
        d = String(d).padStart(2,"0");//zato sto je ovo numericka vrednost moramo prvo da je prebacimo
        //u string. 
        //padStart prima dve vrednosti, prva je duzina reci, a druga je string koji se dodaje kao 
        //prefiks sve dok rec ne dostigne zadatu duzinu reci
        m = String(m).padStart(2,"0");
        h = String(h).padStart(2,"0");
        min = String(min).padStart(2, "0");

        let strDate = ``;
        if(this.dateToday(date)){
            strDate = h + ":" + min;
        } else {
            strDate = d + "." + m + "." + y + ". - " + h + ":" + min;
        }
        
        return strDate;
    }
    render(data){
     
        let vreme = data.created_at.toDate();
        console.log(vreme);
        let strDate = this.formatDate(vreme);//ovim zadajemo zavrsni izgleda datuma

        let html = `<li `
        if(data.username === localStorage.username){
            html += `class="me">`;
        } else {
            html += `class="not-me">`;
        }
        html+=`<span><b>${data.username}</b> </span>
            <span>${data.message} </span>
           <div style='color:lightgrey'>${strDate}</div>
        </li>`
        this.lista.innerHTML +=html;
    }
}