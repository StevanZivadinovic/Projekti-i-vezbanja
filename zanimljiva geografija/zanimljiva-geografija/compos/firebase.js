const ispisUbazu = (pojam) => {
  console.log(pojam);

  let provera;
  db.collection("pojmovi").onSnapshot((snaps) => {
    snaps.forEach((doc) => {
      console.log(doc.data());
        provera = doc.data()
    });

    
  });
  if((pojam!==provera)){
    db.collection("pojmovi").add({
        grad: pojam,
      });
  }
  else{
      alert('Takav pojam vec postoji')
  }
  
};



export default { ispisUbazu };
