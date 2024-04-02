const mongoose = require('mongoose');



const MONGO_URL = 'mongodb+srv://nasa-api:b6rFZvurvBvpTtMa@cluster0.gszp4km.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'    

mongoose.connection.once('open', () =>{
    console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (err) =>{
    console.error(err);
});

async function mongoConnect(){
    await mongoose.connect(MONGO_URL);
}

module.exports = {
    mongoConnect,
}