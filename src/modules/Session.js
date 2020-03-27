const firebase = require('firebase');
const ConnFirebase = require('./ConnFirebase');

function Login(email, password) {

    return new Promise((resolve, reject) => {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .catch(function (error) {
                resolve({ error })
            });
        //If user loggin
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                var uid = user.uid;
                // ...
                resolve({
                    uid
                });
            }
        });
    })

}


module.exports = (req, res) => {
    const { email, password } = req.body

    Login(email, password).then(response => {
        if (response.uid) {
            res.setHeader('Authorization', response.uid);
        }
        res.json(response)
    })
}