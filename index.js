const express = require('express'); 

const server = express();

server.use(express.json());

let users = [
    {
        id: 1,
        name: "Jodie Whittacre",
        bio: "13th Doctor", 
    },
    {
        id: 2,
        name: "Peter Capaldi",
        bio: "12th Doctor", 
    },
    {
        id: 3,
        name: "Matt Smith",
        bio: "11th Doctor", 
    },
    {
        id: 4,
        name: "David Tennant",
        bio: "10th Doctor", 
    },
];

// Configuring server
server.get('/', (req, res) => {
    res.status(200).json({ hello: "Hello World!" });
});

// GET Return an array of users
server.get('/api/users', (req, res) => {
    res.status(200).json({ data:users });
});

// GET Return a user with a specific id
server.get('/api/users/:id', (req, res) => {
    const id = Number(req.params.id); 

    const user = users.filter(user => user.id === id);
    if(user){
        res.status(200).json({ data:users.id })
    } if(!user) {
        res.status(404).json({ errorMessage: "User not found." })
    } else { 
        res.status(500).json({ errorMessage: "Uh-oh! Something's gone wrong! My fault!"})
    }
    
}); 

// POST Create a new user
server.post('/api/users', (req, res) => {
    const newUser = req.body; 
    newUser.id = shortid.generate()
    
    if(newUser.name === '' || newUser.bio === ''){
        res.status(400).json({ errorMessage: "Bad request, BAD!" })
    } if(newUser){
        res.status(201).json({ message: newUser });
        users.push(newUser)
    } else {
        res.status(500).json({ errorMessage: "Uh-oh! Something's gone wrong adding the user!"})
    }
});

// DELETE Remove user by id and return deleted user
server.delete('/api/users/:id', (req, res) => {
    const id = Number(req.params.id);

    const users = users
})

// PUT Update the user by id
server.put('/api/users/:id', (req, res) => {

})

const port = 8000;
server.listen(port, () => console.log("Server is up..."));