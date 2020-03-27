var admin = require("firebase-admin");
const { db, dbAuth } = require('./ConnFirebaseAdmin');
const firebase = require('firebase');
const ConnFirebase = require('./ConnFirebase');
const Session = require('./Session');

function createAccount(email, phoneNumber, password, displayName, type) {
    return new Promise((resolve, reject) => {
        //Create a User
        admin.auth().createUser({
            email,
            emailVerified: false,
            phoneNumber,
            password,
            displayName,
            disabled: false
        })
            .then(function (userRecord) {
                let data = {
                    type: 'client',
                    perfilDescription: ""
                };
                if (type === 'client' || type === 'cleaner') {
                    let setDoc = db.collection('users').doc(userRecord.uid).set(data);
                    resolve({ uid: userRecord.uid })
                } else {
                    resolve({ error: "Type Error" })
                }

            })
            .catch(function (error) {
                resolve({ error })
            });
    });
}

module.exports = (req, res) => {
    const { email, phoneNumber, password, displayName, type } = req.body;

    createAccount(email, phoneNumber, password, displayName, type)
        .then(response => {
            if (response.uid) {
                res.json({ uid: response.uid });
            } else if (response.error) {
                res.json({ error: response.error.message });
            }

        })
}