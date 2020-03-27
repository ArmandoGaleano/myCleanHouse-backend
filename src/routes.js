const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');
var admin = require("firebase-admin");
const { db } = require('./modules/ConnFirebaseAdmin')
const createAccount = require('./modules/createAccount');
const Session = require('./modules/Session');

const routes = express.Router();
/*
routes.post('/session', celebrate({
    [Segments.BODY]: Joi.object().keys({
        email: Joi.string().required().email(),
        phoneNumber: Joi.number().required().min(12).max(13),
        password: Joi.string().required().min(6),
        displayName: Joi.string().required(),
        type: Joi.string().required()
    })
}), Session );
*/

routes.post('/session', celebrate({
    [Segments.BODY]: Joi.object().keys({
        email: Joi.string().required().email(),
        password: Joi.string().required()
    })
}), Session );


routes.post('/createAccount', celebrate({
    [Segments.BODY]: Joi.object().keys({
        email: Joi.string().required().email(),
        phoneNumber: Joi.string().required().min(12).max(15),
        password: Joi.string().required().min(6),
        displayName: Joi.string().required(),
        type: Joi.string().required()
    })
}), createAccount );


module.exports = routes;