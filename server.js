//before writing code, start these commands: 
//npm init -y
//npm express http-proxy-middleware dotenv morgan

//connect modules with require("..");
const express = require("express"); //connect express module

//const morgan = require("morgan"); //connect morgan module          
    //морган це засіб для збору логів, даних про те які запити відправляються

//const { createProxyMiddleware } = require("http-proxy-middleware"); //connect http-proxy-middleware module
    //проксі перенаправляє запити в інше місце (сервер перенапрявляв запити на сервіс погоди)

require("dotenv").config(); //connect dotenv module --> and config() module to it

//crate express server
const expressServer = express(); //when we call express() method, we create express server

//configurstion
const PORT = 8080; //port 8080 - is a port where server is listening to requests
const HOST = "localhost"; //where server works

//api
expressServer.get("/", (req, res) => {
    res.send("main");
})
expressServer.get("/health", (req, res) => {
    res.send("ok");
})
expressServer.get("/fruits", (req, res) => {
    res.send("ok");
})

//req - це запит який апі отримує за параметрами і тілом
//res - це відповідь яку дає апі
//цей метод приймає запит і віддає відповідь і працює по шляху fruits/health

//коли робиш запит на localhost:8080/fruits/health має повернути відповідь im alive!

//server listener (start server)
expressServer.listen(PORT, HOST, () => {
    console.log(`Starting Server at ${HOST}:${PORT}`); //localhost:8080
})

//after writing code, start server:
//node server-name.js