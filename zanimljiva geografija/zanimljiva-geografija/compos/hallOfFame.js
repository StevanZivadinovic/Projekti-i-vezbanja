const NizKorisnika = (ul) => {
  let ispisKorsnickeListe = document.querySelector(".ispisKorsnickeListe");
  let hallOfFame = document.querySelector(".hallOfFame");
  
  let arr = [];
  let altarr = [];
  let counter = 0;
  db.collection("pojmovi")
    .orderBy("korisnik")
    .get()
    .then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        arr.push(doc.data().korisnik);
      });
      console.log(arr);

      function getOccurrence(array, value) {
        var count = 0;
        array.forEach((v) => v === value && count++);
        return count;
      }
      arr.forEach((a) => {
        let objekat = getOccurrence(arr, `${a}`);
        altarr.push({ ime: a, counter: objekat });
      });

      let array = [];
      let singleEle = [];

      altarr.forEach((item) => {
        //filtriranje jedinstvenih vrednosti objekata
        //u nizu objekata
        if (!array[item.ime]) {
          array[item.ime] = true;
          singleEle.push(item);
        }
      });
      let rev = singleEle.sort((a, b) => b.counter - a.counter);
      let novi = rev.slice(0, 5);
      let lista = "";
      novi.forEach((a) => {
        lista += `<li>${a.ime}: ${a.counter}</li>`;
        localStorage.setItem("li", lista);
      });

      ispisKorsnickeListe.innerHTML = lista;
    })
    .catch((error) => {
      console.log("Error:", error);
    });
};

export default { NizKorisnika };
