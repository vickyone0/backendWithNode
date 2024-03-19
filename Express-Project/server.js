const express = require('express');

const friendsRouter = require('./routes/friends.router');

const messagesRouter = require('./routes/friends.router');


const app = express();

const PORT = 3000;


app.use((req, res, next) => {
    console.log(`${req.method} ${baseurl}${req.url}`);
    next();
});

app.use('/messages', messagesRouter);
app.use('/friends', friendsRouter);


app.listen(PORT, ()=> { 
    console.log(`Server is running on port ${PORT}...`);
});

