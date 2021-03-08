export class Termini {
  constructor(u, k) {
    this.username = u;
    this.kategorija = k;
    this.pojmovi = db.collection("pojmovi");
  }

  set username(u) {
    this._username = u;
  }

  set kategorija(k) {
    this._kategorija = k;
  }

  get username() {
    return this._username;
  }

  get kategorija() {
    return this._kategorija;
  }

  async addTerm(term) {
    let dateTmp = new Date();

    //Kreiramo dokument koji cemo dodati bazi
    let dokument = {
      početno_slovo: term.slice(0, 1),
      pojam: term,
      kategorija: this.kategorija,
      korisnik: this.username,
      vreme: firebase.firestore.Timestamp.fromDate(dateTmp),
    };

    //Dodamo dokument promenljivoj koja je povukla celu kolekciju iz base
    let response = await this.pojmovi.add(dokument);
    return response;
  }

  checkAddTerms(pojam, kateg) {
    this.pojmovi.onSnapshot((snapshot) => {
      snapshot.forEach((doc) => {
        if (kateg == doc.data().kategorija && pojam == doc.data().pojam) {
          return false;
        }
      });
    });
  }
}

let cr = new Termini ('sr','sr');
cr.addTerm('Rumunija');