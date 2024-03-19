

const http = require('http');
const mongoose = require('mongoose');

const app = require('./app');

const {loadPlanetsData} = require('./models/planets.model');

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);


mongoose.connection.once('open', () =>{
    console.log('Connected to MongoDB');
})

mongoose.connection.on('error', (err) =>{
    console.error(err);
})

async function startServer(){
    const MONGO_URL = 'mongodb+srv://nasa-api:b6rFZvurvBvpTtMa@cluster0.gszp4km.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'    

    await mongoose.connect(MONGO_URL);


await loadPlanetsData();
server.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}....`);
});
}

startServer();