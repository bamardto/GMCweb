const mongo = require('mongoose');
const port = process.env.PORT || 3000;
const app = require('./app');

mongo.Promise = global.Promise;
mongo.connect('mongodb://localhost/gmcdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then( db => {
        console.log('db is ready');
        app.listen(port, () => {console.log('server is ready')})
    })
    .catch( err => console.error(err))