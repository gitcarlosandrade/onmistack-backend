const express = require('express');
const multer = require('multer');
const multerConfig = require('./config/multer');
const routes = express.Router();
const boxController = require('./controller/BoxController');
const fileController = require('./controller/FileController');

routes.post('/boxes', boxController.store);
routes.get('/boxes/:id', boxController.show);
routes.post(
    '/boxes/:id/files', 
    multer(multerConfig).single('file'), 
    fileController.store);

module.exports = routes