const http = require('http');


const PORT = 3000;

friends = [
    {
        id: 1,
        name: 'vignesh',
    },
    {
        id: 2,
        name: 'ironman',
    },
    {
        id: 3,
        name: 'Nicolas tesla',
    }
]
const server = http.createServer((req, res) => {
    //
    const items = req.url.split('/');
    if (req.method==='POST' && items[1] === 'friends'){
       
        req.on('data', (data) => {
            const friend = data.toString();
            console.log('Request :', friend);
            friends.push(JSON.parse(friend));
        });
        req.pipe(res);

    }
    else if(req.method === 'GET' && items[1] === 'friends'){
        res.writeHead(200, { 'Content-Type': 'application/json', });
        if (items.length === 3){
            const friendsIndex = +items[2];
            res.end(JSON.stringify(
                friends[friendsIndex]
            ));
        }
        res.end(JSON.stringify(
            friends
        ));
    }else if (items[1] === '/messages'){
       
        res.end(JSON.stringify({
            id: 1,
            name: 'ironman',
        }));
    }
    
});

server.listen(PORT, ()=>{
  console.log(`Server running on port ${PORT}....`);
});