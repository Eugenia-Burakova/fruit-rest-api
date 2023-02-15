//before writing code, start these commands: 
//npm init -y
//npm express http-proxy-middleware dotenv morgan

//connect modules with require("..");
const express = require("express"); //connect express module
const { constants } = require("fs");

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

//import from fruits.js
const { fruit, fruits } = require('./fruits');

//api
expressServer.get("/", (req, res) => {
    res.send("main");
})
expressServer.get("/health", (req, res) => { // ці рядки просто мають бути
    res.send("ok");                          // health i ok
})
expressServer.get("/fruits", (req, res) => { // отримуємо масив з фруктами (об'єктами)
    res.send(fruits);
})
expressServer.get("/fruits/:fruit", (req, res) => {

    const fruit_name = req.params.fruit;


    console.log('elem');

    //for each і вставити в дужки сенд(....)

    //let fruits = [fruit];
    // fruits.forEach(function(elem) {
    //     console.log('elem');
            
    // });

    for (let key in fruit) {
        if (key == "name" && fruit[key] == "apple") {
            let fruitName = 
        }
    }
    

    res.send(fruits[fruit]["name"]);

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