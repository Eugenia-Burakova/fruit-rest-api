//before writing code, start these commands: 
//npm init -y
//npm express http-proxy-middleware dotenv morgan

//connect modules with require("..");
const bodyParser = require("body-parser");
    //розкладає дані з тіла запиту
    //цей модуль (проміжні обробники в express.js) дивиться дані JSON, URL адреси, що передані з викор. запиту http post


const express = require("express"); //connect express module
const { constants } = require("fs"); //filestrip module - працює з файлами
    //цей рядок я не писала, скоріш за все, він з'явився, коли я робила імпорт файлу fruits.js

//const morgan = require("morgan"); //connect morgan module          
    //морган це засіб для збору логів, даних про те які запити відправляються

//const { createProxyMiddleware } = require("http-proxy-middleware"); //connect http-proxy-middleware module
    //проксі перенаправляє запити в інше місце (сервер перенапрявляв запити на сервіс погоди)
    //написали в {}, бо вибираємо ProxyMiddleware через деструктуризацію (!) із 
    //відповідного модуля, бо більше нічого нам не треба звідти (?)

require("dotenv").config(); //connect dotenv module --> and config() module to it

//crate express server
const expressServer = express(); //when we call express() method, we create express server

//configurstion
const PORT = 8080; //port 8080 - is a port where server is listening to requests
const HOST = "localhost"; //where server works

//import from fruits.js
const { fruit, fruits } = require('./fruits'); // зробили з файлу fruits.js модуль і так його підключили через рекваєр
    //тут поки хз, чи добре зробила константу

//API

//req (request) - це запит який апі отримує за параметрами і тілом
//res (response) - це відповідь яку дає апі
    //цей метод приймає запит і віддає відповідь і працює по певному шляху

// Отримати об‘єкти всі
// Отримати конкретний об‘єкт
// Видалити об‘єкт
// Додати об‘єкт
// Замінити об‘єкт
// Змінити об‘єкт

                        // Отримати об‘єкти всі:
expressServer.get("/", (req, res) => {       // "/" - шлях на головну сторінку
    res.send("main");                        //відповідь з "main", коли робимо GET (.get) запит на головну сторінку
})

expressServer.get("/health", (req, res) => { // ці рядки просто мають бути, перевіряти, чи можна до апі достукатись, чи він є доступний
    res.send("ok");                          // health i ok
})
    //коли робити запит на localhost:8080/health, має повернути відповідь "ok" і статус-код 200

expressServer.get("/fruits", (req, res) => { // "/fruits" - шлях на сторінку фруктів (localhost:8080/fruits)
    res.send(fruits);                        // тут отримуємо масив з фруктами (об'єктами), коли робимо GET запит
})

                        // Отримати конкретний об‘єкт:
expressServer.get("/fruits/:fruit", (req, res) => { //хочемо вибрати кожен фрукт окремо при запиті GET
    // /fruits має бути в шляху завжди тут. а apple ми вказуємо в АПІ (у запиті вказати, який фрукт нам треба).
    //тобто, в коди ми маємо /:fruit, а в запиті назву конкретного фрукту (/apple),
    //тоді логіка буде така, що ми відправляємо запит на /fruits/apple в АПІ (?) 
    // і із запиту дістаю назву фрукта

    const fruitName = req.params.fruit;


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





//server listener (start server)
expressServer.listen(PORT, HOST, () => {
    console.log(`Starting Server at ${HOST}:${PORT}`); //localhost:8080
})

//after writing code, start server:
//node server-name.js