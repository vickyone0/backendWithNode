const express = require('express');
const friendsRouter = express.Router();
const friendControllers = require('../controller/friends.controller');


friendsRouter.use((req, res, next)=> {
    console.log(req.ip);
    next();
});
friendsRouter.post('/',friendControllers.postFriend );

friendsRouter.get('/', friendControllers.getFriends );

friendsRouter.get('/:friendId',friendControllers.getFriend );

module.exports = friendsRouter;