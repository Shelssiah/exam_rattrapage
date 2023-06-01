// packages requis
const express = require('express');
const bodyParser = require('body-parser');
const fs= require('fs'); 

// port
const PORT = process.env.PORT || 3000;

// appels
const app = express();


app.get('/', (req, res) => {
  res.sendFile(__dirname + 'index.html');
});


// serveur
app.listen(PORT, () =>{
  console.log(`The Annotations API is running on: http://localhost:${PORT}.`);
});