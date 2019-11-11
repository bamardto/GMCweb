const { Router } = require('express');
const FormController = require('../controllers/form.controller');
const api = Router();

api.post('/contactanos', FormController.form);

module.exports = api;