var admin = require("firebase-admin");
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '..', '.env')});

admin.initializeApp({
  credential: admin.credential.cert({
    projectId: process.env.PROJECT_ID,
    clientEmail: process.env.CLIENT_EMAIL,
    privateKey: process.env.PRIVATE_KEY.replace(/\\n/g, '\n')
  }),
  databaseURL: process.env.DATABASE_URL
});


const db = admin.firestore();
const dbAuth = admin.auth();

module.exports = {
  db,
  dbAuth

};