const express = require('express');
const app = express();
const morgan = require('morgan');
const nodemailer = require('nodemailer');
const formRoutes = require('./routes/form.router');
const path = require('path');
const accountSid = 'ACcfe5d223d3fe75d1edf8d31b00880b3b';
const authToken = 'ae00fd55012cf2e29f363e207333556f'
const client = require('twilio')(accountSid, authToken);
// loading routes



// cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});
//settings
// middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// routes
app.use('/', express.static('client', { redirect: false }));
app.use('/api', formRoutes)
app.get('*', function(req, res, next){
    res.sendFile(path.resolve('client/index.html'));
})
// client.messages.create({
//     from:'+19388887782',
//     to: '+56959749686',
//     body: 'como hacer una ampliacion??'
// }).then(message => console.log(message.sid));

module.exports = app;