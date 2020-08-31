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

// Configuring server
server.get('/', (req,res) => {
    res.status(200).json({ hello: "Hello World!" });
});

// GET Return an array of users
server.get('/api/users', (req, res) => {
    res.status(200).json({ data:users });
});

// GET Return a user with a specific id
server.get('/api/users', (req, res) => {
    res.status(200).json({ data:users.id })
}); 

// POST Create a new user
server.post('/api/users', (req, res) => {
    const newUser = req.body; 
    newUser.id = shortid.generate()
    users.push(newUser)
    res.status(201).json({ message: newUser })
    if(!newUser){
        res.status(404).json({ errorMessage: "Please provide name and bio for the user." })
    } else {
        res.status(500).json({ errorMessage: "Uh-oh! Something's gone wrong adding the user!"})
    }
});

// DELETE Remove user by id and return deleted user
server.delete('/api/users/:id', (req, res) => {

})

// PUT Update the user by id
server.put('/api/users/:id', (req, res) => {

})

const port = 8000;
server.listen(port, () => console.log("Server is up..."));