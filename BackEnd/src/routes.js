const express = require('express');

const UserController = require('./controller/userController');

const routes = express.Router();

routes.get('/user', UserController.index);
routes.post('/user', UserController.create);
routes.delete('/user', UserController.delete);

module.exports = routes;