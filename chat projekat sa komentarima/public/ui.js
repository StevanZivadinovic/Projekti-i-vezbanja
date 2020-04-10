export class ChatUI{//ova klasa je da sluzi da forimira izgled chat-a, tj poruka koje
    //se preuyimaju iz baze
    //konstruktor
    constructor(l){
        this.list = l;
    }

    //geter i seter
    set list(l){
        this._list = l;
    }

    get list(){
        return this._list;
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

    //Metod koji pravi osnovu za prikaz list item-a
    //data koji prosleđujemo je objekat tj. dokument iz baze
    templateLI(data){
        let dataId = data.id;
        data = data.data();
        let date = data.created_at.toDate();//ovim toDate() prebacujemo vreme u normalan format 
        let strDate = this.formatDate(date);//ovim zadajemo zavrsni izgleda datuma
        
        let htmlLI = `<li id="${dataId}" `;//ovo i ovo dole, if-else petlja sluzi da bi 
        //moje poruke isle na jednu stranu, a poruke mog sagovornika na drugu. Pravila su u klasama
        if(data.username == localStorage.usernameLS){
            htmlLI += `class="me">`;
        } else {
            htmlLI += `class="not-me">`;
        }

        htmlLI +=
        `   <span class="username">${data.username} : </span>
            <span class="message">${data.message}</span>
            <div class="date">${strDate}</div>
            <img src="images/delete.png" class="img-delete" align="right">
        </li>`;
        this.list.innerHTML += htmlLI;

        //Uvek skroluj na poslednji element <ul>
        this.list.scrollTop = this.list.scrollHeight;//skrola se po visini do poslednjeg item-a.
    }

    brisanje(){//ovo koristimo za brisanje poruka prilikom promene soba. Mi ih samo trenutno brisemo
        this.list.innerHTML = ``;
    }

}