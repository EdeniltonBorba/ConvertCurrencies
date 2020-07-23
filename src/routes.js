const express = require('express');

const Conversion = require('./controllers/Conversion.Controller');

const routes = express.Router();

routes.get('/', Conversion.index);

routes.post('/api/conversion', Conversion.create);
routes.get('/api/conversion', Conversion.index);
routes.get('/api/conversion/details', Conversion.details);
routes.delete('/api/conversion/:_id', Conversion.delete);
routes.put('/api/conversion', Conversion.update);

module.exports = routes;
