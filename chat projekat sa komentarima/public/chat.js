/*
export class Chatroom{

    // Konstruktor
    constructor(r, u){
        this.room = r;
        this.username = u;
        this.chats = db.collection('chats');
        this.unsub;//ova promenljiva nam sluzi da bi smo mogli da se odjavljujemo i prijavljujemo
        //sa addEventListenera kad hocemo, odnosno da on ne slusa uvek samo pocetnu zadatu vrednost,
        //nego ako promenimo vrednost room-a 
        //npr(u ovom slucaju), da se on sada vezuje za tu novu vrednost.
        // Ovde this.unsub jos nema nikakvu vrednost
    }

    // Seteri
    set username(u){
        this._username = u;
    }
    set room(r){
        this._room = r;
    }

    // Geteri
    get username(){
        return this._username;
    }
    get room(){
        return this._room;
    }

    async addChat(mess){//gore u constructoru smo definisali room i username, ovde definisemo message
        //async i await su javascript funkcije, nisu iz firebase-a.
        

        //Dohvatanje tekućeg datuma koji je potreban za timestamp
        let date = new Date();

        // Kreiranje objekta/dokumenta koji prosleđujemo bazi podataka
        let docChat = {
            message: mess,
            username: this.username,
            room: this.room,
            created_at: firebase.firestore.Timestamp.fromDate(date)
        };

        //Da sačuvamo dokument u bazi
        let response = await this.chats.add(docChat); //await se koristi samo u async. 
        //await oznacava sledece ustvari, mi cekamo da se doda poruka u bayu podataka(this.chats),
        //i tada vraca (return) tu poruku, kolko ja razumem
        //return response; Ako hoces rucno da dodas poruku,a ne preko input polja, posto jos nismo 
        //omogucili da se doda poruka preko inputa, mozes to da uradis rucno, pogledaj pri kraju koda
        return response;
    }

    async deleteChat(id){
        var r = confirm("Da li želite da trajno obrišete poruku?");
        if(r){
            db.collection('chats')
            .doc(id)
            .delete()
            .then(() => {
                console.log("Zadatak izbrisan");
            })
            .catch(error => {
                console.log(`Nemoguce obrisati dokument: ${error}`);
            });
            return true;
        } 
        return false;
    }

    getChets(callback){//ova funkcija mislim da radi tri stvari:
        //redja documete i filtrira ih po zadatom redu
        //i preko callback funkcije odredjuje da se ovo redjanje iz prve stavke obavi tek kad se
        //izvrsi dodavanje nekog dokumenta
        //ispisuje poruke
        this.unsub = this.chats//ovde zadajemo vrednost polju this.unsub. Ovde mu zadajemo vrednost
        //zato sto se preko ove funkcije dodaje(formira) prva poruka pa samim tim i this.unsub dobija
        //pocetnu vrednost
            .where('room','==',this.room)
            .orderBy('created_at')
            .onSnapshot( snapshot => {
                snapshot.docChanges().forEach( change => {
                    //Ako je poruka dodata u bazu onda raditi update
                    if( change.type === 'added' ){
                        //uradi update
                        // console.log(change);
                        // console.log(change.doc.id);
                        callback(change.doc.data());//vraca dokument, ovaj callback izgleda je slican kao return
                    }
                });
            });
    }

    setTimeStamp(dateElement){
        let date = document.querySelector(dateElement);
        let dateValue = new Date(date.value);    
        let dateFirestore = firebase.firestore.Timestamp.fromDate(dateValue);
        return dateFirestore;
    }

    getChetsByDate(callback){
        let startDate = this.setTimeStamp('#dateStart');
        let dateEnd = this.setTimeStamp('#dateEnd');
        this.chats
            .where('room','==',this.room)
            .where('created_at','<=', dateEnd)
            .where('created_at', '>=', startDate)
            .orderBy('created_at')
            .onSnapshot( snapshot => {
                snapshot.docChanges().forEach( change => {
                    if( change.type === 'added' ){
                        callback(change.doc.data());
                    }
                });
            });
    }

    updateUsername(uu){
        //Suštinski menja samo vrednost lokalne promenljive, ne menja vrednost username u bazi podataka
        this.username = uu;
        localStorage.setItem('usernameLS', uu);
    }

    updateRoom(ur){//ovom funkcijom omogucavamo promeene username-a.
        this.room = ur;
        //console.log("Updated room");
        if(this.unsub){//ako this.unsub ima neku vrednost(tj. ako smo prijavljeni na addEventListener)
            //tj ako postoji neka vrednost polja this.unsub
            this.unsub();//onda ce se izvrsiti funkcija this.unsub() koja je u stvari getChats fukcija
            //kolko ja kapiram. Tj ako izvrsimo unos nekog novog room-a da sada addEveentListener
            //radi tj slusa sad sve vezano za tu sobu, tj da getChats unosi poruke u tu sobu
        }
    }

}



//PROVERE

//ako hoces da testiras class-u koja je formirana iznad treba da na pravis instacu klase
    //zadas joj dve vrednosti, jednu vrednost za room drugu za username. Ovde samo proveravamo klasu
    //na neke proizvoljne vrednosti, jos nismo spojili input polja, da preko njih unesemo ovo general
    //ili stevastevic, nego smo ovde uradili rucno samo da prverimo dal klasa radi
    let provera=new Chatroom('js','stevastevic');
    console.log(provera);

/*
    //rucno dodavanje poruke, trebalo bi da se u firebase pojavi document sa textom poruke 'Zdravo'
    provera.addChat('Zdravo!')//u zagradi uneses poruku(to je ustvari promenljiva mess)
    .then( () => {console.log('Čet je dodat!');})
    .catch( err => {console.log(err);}); */
/*
    provera.getChets( data => { //izbacuje podatke o svim porukama pojedinacno
        console.log(data);
    });

    provera.updateUsername('mikaMikic');//ovde sam rucno ubacio username, moze da bude bilo sta,
    //pera, mika zika, ovde sad radim rucno da proverim da li funkcija radi, kad sad odkucam poruku
    // i posaljem, pise mi da je poslao mikaMikic. Kad povezem input za username tada ce i korisnik
    //moci da ubacuje ime u input za username tj da ga menja


    provera.updateRoom('homeworks');//ovu promenu ne vidis odmah, nego se vidi kad udjes na
    //inspekt element pa ides na Application vidi se u Local Storage


    provera.updateRoom('js');

    provera.getChets( data => {console.log(data);} );//ispisuje samo poruke u poslednje zadatoj sobi
    //ovde je poslednje zadata soba js
 

  
    setTimeout( () => {//ispisuje sve poruke u sobi js koje ispisala milica
        provera.updateRoom('general');
        provera.updateUsername('Tina');
        provera.getChets( data => {
            console.log(data);
        });
        
    }, 3000); 

    provera.getChets( data => {
        console.log(data);
    }); */

    //OVO IZNAD JE ISTO KO OVO DOLE SAMO SA OBJASNJENJIMA

    export class Chatroom{

        // Konstruktor
        constructor(r, u){
            this.room = r;
            this.username = u;
            this.chats = db.collection('chats');
            this.unsub;
        }
    
        // Seteri
        set username(u){
            this._username = u;
        }
        set room(r){
            this._room = r;
        }
    
        // Geteri
        get username(){
            return this._username;
        }
        get room(){
            return this._room;
        }
    
        async addChat(mess){
    
            //Dohvatanje tekućeg datuma koji je potreban za timestamp
            let date = new Date();
    
            // Kreiranje objekta/dokumenta koji prosleđujemo bazi podataka
            let docChat = {
                message: mess,
                username: this.username,
                room: this.room,
                created_at: firebase.firestore.Timestamp.fromDate(date)
            };
    
            //Da sačuvamo dokument u bazi
            let response = await this.chats.add(docChat); 
            return response;
        }
    
        async deleteChat(id){
            var r = confirm("Da li želite da trajno obrišete poruku?");
            if(r){
                db.collection('chats')
                .doc(id)
                .delete()
                .then(() => {
                    console.log("Zadatak izbrisan");
                })
                .catch(error => {
                    console.log(`Nemoguce obrisati dokument: ${error}`);
                });
                return true;
            } 
            return false;
        }
    
        getChets(callback){
            this.unsub = this.chats
                .where('room','==',this.room)
                .orderBy('created_at')
                .onSnapshot( snapshot => {
                    snapshot.docChanges().forEach( change => {
                        //Ako je poruka dodata u bazu onda raditi update
                        if( change.type === 'added' ){
                            //uradi update
                            // console.log(change);
                            // console.log(change.doc.id);
                            callback(change.doc);
                        }
                    });
                });
        }
    
        setTimeStamp(dateElement){
            let date = document.querySelector(dateElement);
            let dateValue = new Date(date.value);    
            let dateFirestore = firebase.firestore.Timestamp.fromDate(dateValue);
            return dateFirestore;
        }
    
        getChetsByDate(callback){
            let startDate = this.setTimeStamp('#dateStart');
            let dateEnd = this.setTimeStamp('#dateEnd');
            this.chats
                .where('room','==',this.room)
                .where('created_at','<=', dateEnd)
                .where('created_at', '>=', startDate)
                .orderBy('created_at')
                .onSnapshot( snapshot => {
                    snapshot.docChanges().forEach( change => {
                        if( change.type === 'added' ){
                            callback(change.doc);//ovde kad napisem change.doc.data(), pravi mi problem
                            //u fajlu ui
                        }
                    });
                });
        }
    
        updateUsername(uu){
            //Suštinski menja samo vrednost lokalne promenljive, ne menja vrednost username u bazi podataka
            this.username = uu;
            localStorage.setItem('usernameLS', uu);//da nismo dodali ovaj red, svaki put kad se
            //refrisira stranica ostalo bi ime koje smo dali u proveri(let provera=new Chatroom('general','ana');)
            //ovako mi u localStorage ubacimo username preko promenljive cije je ime usernameLS a vrednost 
            //je ona koju unesemo u input, ovde je ta vrednost zamenjena promenljivom uu;

            //svaka nova stranica na browseru ima svoj localStorage(jelena je rekla 'incognito stranica'
            //umesto 'nova stranica', mislim da je to isto)
        }
    
        updateRoom(ur){
            this.room = ur;
            //console.log("Updated room");
            if(this.unsub){
                this.unsub();
            }
        }
    
    }


    //PROVERA
    let provera=new Chatroom('general','ana');
    provera.getChets(data=>{

        console.log(data);//da bi mi lepo ipssalo ovo u konzoli mora u getChets da u callback 
        //funkciji pise change.doc.data(), ali ako to napisem pojavljuje gresku u ui.js
    });