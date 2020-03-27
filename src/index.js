const routes = require('./routes');
const express = require('express');
const { errors } = require('celebrate');
var admin = require("firebase-admin");
const { db, dbAuth } = require('./modules/ConnFirebaseAdmin')


const app = express();
const server = require('http').createServer(app);

app.use(express.json());
app.use(routes);
app.use(errors());
/*
const usersRef = db.collection('users').doc('xr8oZbdJ76Dsjjf62Doh').get()
  .then(snapshot => {

    if (snapshot.data().empty) {
      console.log('No matching documents.');
      return;
    }
    const { email, name, password, phone, type } = snapshot.data();
    console.log({ email, name, password, phone, type });
  })
*/

/*
let loginRef = db.collection("users").where("email", "==", "armandogaleano2@hotmail.com");
loginRef.get().then(function (querySnapshot) {
  querySnapshot.forEach(function (doc) {
    console.log(doc.id, ' => ', doc.data());
  })
})*/


server.listen(3333);