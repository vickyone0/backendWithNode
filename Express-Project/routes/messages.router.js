
const express = require('express');

const messagesRouter = express.Router();
const messagesControllers = require('../controller/messages.controller');


messagesRouter.get('/',messagesControllers.getMessage );

messagesRouter.post('/',messagesControllers.postMessage );

module.exports = messagesRouter;