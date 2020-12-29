const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();
// Ovo sve (firebase functions) mora da se plati googe-u!!!!!!!!!!!!!!!!!!!!!
exports.dodajAdmina = functions.https.onCall((data, context)=>{
//data- podaci o korisniku email, ID...

//get user and add custom claims (admin):
return admin.auth().getUserByEmail(data.email).then(user=>{
    return admin.auth().setCustomUserClaims(user.id,{
        admin:true
    })
})
.then(()=>{
    return {
        message: `succes! ${data.email} has been made an admin`
    }
})
.catch(err=>{
return err;
})

})
//https - tip funkcije
//onCall - znaci da funkcija koju formiramo moze da se pozove sa front-end strane

