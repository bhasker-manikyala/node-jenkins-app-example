const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Welcome to Docker!'))

var server = app.listen(3000, () => {
    console.log("Listening on port " + server.address().port + "...");
});

module.exports = server;
