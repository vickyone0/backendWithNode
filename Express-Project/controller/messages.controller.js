

const path = require('path');

function getMessage(req, res) {

    //res.send('Hello nicolas tesla');
    res.sendFile(
        path.join(__dirname,'..','public', 'img.png'));

}

function postMessage(req, res) {
    console.log('Updating messages...');
}

module.exports ={
    getMessage,
    postMessage
}