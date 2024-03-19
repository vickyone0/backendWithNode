


const model = require('../models/friends.model');

function postFriends(req, res)  {
    if(!req.body.name){
        res.status(400).json({
            error: 'Name is required'
        })
    }

    const newFriends = {
        id: model.length,
        name: req.body.name,
        
    };

    model.push(newFriends);
    res.json(newFriends);
}

function getFriend(req, res) {
    const friendId = Number(req.params.friendId);
    const friend = model[friendId];
    if(friend){
        res.status(200).json(friend);
    }else{
        res.status(404).json(
            {
    
                error: 'Friend not found',
            }
        )
    }
}

function getFriends(req, res)  {
    res.json(model);
}

module.exports = {
    postFriends,
    getFriend,
    getFriends
}