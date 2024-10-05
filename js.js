const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

let users = []; // Example user storage

app.post('/signup', (req, res) => {
    const { username, password } = req.body;
    // Implement user creation logic here
    users.push({ username, password });
    res.status(201).send('User created');
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    // Implement user authentication logic here
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        res.status(200).send('Login successful');
    } else {
        res.status(401).send('Unauthorized');
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
