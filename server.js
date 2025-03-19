const express = require('express');
const app = express();
const fs = require('fs');

app.use(express.json());
app.use(express.static(__dirname)); 

let users = [];

app.post('/register', (req, res) => {
  const userData = req.body;
  users.push(userData);
  fs.writeFileSync('users.json', JSON.stringify(users));
  res.json(userData);
});

// Retrieve all registered users
app.get('/users', (req, res) => {
  res.json(users); 
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html'); 
});

app.listen(3001, () => {
  console.log('Server started on port 3001');
});
