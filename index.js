const express = require('express'); 

const server = express();

server.use(express.json());

let users = [
    {
        id: 1,
        name: "Item One",
        bio: "node 33", 
    },
    {
        id: 2,
        name: "Item Two",
        bio: "node 33", 
    },
    {
        id: 3,
        name: "Item Three",
        bio: "node 33", 
    },
];

server.get('/', (req,res) => {
    res.status(200).json({ hello: "Node 33!!" });
});

server.get('/api/users', (req, res) => {
    res.status(200).json({ data:hubs });
});

const port = 8000;
server.listen(port, () => console.log("Server is up..."));