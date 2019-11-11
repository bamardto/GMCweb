const mongo = require('mongoose');
const Schema = mongo.Schema;

var FormSchema = Schema({
    nombre: String,
    correo: String,
    telefono: String,
    mensaje: String
});

module.exports = mongo.model('form', FormSchema);