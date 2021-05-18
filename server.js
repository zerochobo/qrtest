// module

const express = require('express');
const dotenv = require('dotenv');
const server = express();

const PORT = 3000;

// routing
const index = require('./routes')

// server setting

server.set("views", "./views");
server.set("view engine", "ejs");

server.use('/', index);

server.listen(PORT, () =>{
    console.log('server starting')
});