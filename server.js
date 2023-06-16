//before writing code, start these commands: 
//npm init -y
//npm express http-proxy-middleware dotenv morgan (встановлює ці модулі)

//connect modules with require("..");
const bodyParser = require("body-parser");
    //аналізує тіла вхідних запитів у проміжному програмному забезпеченні перед вашими обробниками, 
        //доступними у властивості req.body (те, шо редагую в постмані)
    //розкладає дані з тіла запиту
    //цей модуль (проміжні обробники в express.js) дивиться дані JSON, URL адреси, 
        //що передані з викор. запиту http post
    
    //req.body - властивість, містить пари key-value, поданих у тілі запиту 
        //(це тіло запиту, наш новий джейсон, котрий створюємо в постмані)
        //за замовчуванням він undefined  і заповнюється, коли викор. проміжне програмне 
        //забезпечення під назвою body-parsing, наприклад express.urlencoded() або express.json()

const express = require("express"); //connect express module
const { constants } = require("fs"); //filestrip module - працює з файлами
    //цей рядок я не писала, скоріш за все, він з'явився, коли я робила імпорт файлу fruits.js

//const morgan = require("morgan"); //connect morgan module          
    //морган це засіб для збору логів, даних про те які запити відправляються

//const { createProxyMiddleware } = require("http-proxy-middleware"); //connect http-proxy-middleware module
    //проксі перенаправляє запити в інше місце (сервер перенапрявляв запити на сервіс погоди)
    //написали в {}, бо вибираємо ProxyMiddleware через деструктуризацію (!) із 
        //відповідного модуля, бо більше нічого нам не треба звідти (?)

//require("dotenv").config(); //connect dotenv module --> and config() module to it
    //підключає файли розширення .env


//crate express server
const expressServer = express(); //when we call express() method, we create express server

//configurstion
const PORT = 8080; //port 8080 - is a port where server is listening to requests
const HOST = "localhost"; //where server works

//import from fruits.js
let data = require('./fruits'); // зробили з файлу fruits.js модуль (!) і так його підключили через рекваєр
    //імпортую файл fruits.js (фрут і фрутс) в змінну дата

                        //API
//REST API працює запитами http у якого є метод, юрл та тіло

expressServer.use(bodyParser.json());
    //переглядає запити, у яких присутній заголовок Content-Type: application/json, 
        //і перетворює текстові вхідні дані JSON у доступні JS змінні в req.body

    //у запита є ключові заголовки - вони як параметри самого запиту
    //там вказується також і формат тіла запиту
    //якщо формат джсон - то оцей боді парсер буде знати,
        //що тіло це джейсон і його треба розбирати на поля як джейсон

expressServer.use(bodyParser.urlencoded({ extended: false }));
    //робить те саме для запитів із кодуванням URL-адреси. extended: true уточнює, 
        //що об’єкт req.body міститиме значення будь-якого типу, а не просто рядки

    //обмежує формати тіла запиту (бо фолс в нас), тобто тіло запиту у
        //хмл він не буде сприймати і може показати помилку

//req (request) - це запит, який апі отримує за параметрами і тілом
//res (response) - це відповідь, яку дає апі
    //цей метод приймає запит і віддає відповідь і працює по певному шляху

//методи:
// Отримати об‘єкти всі GET
// Отримати конкретний об‘єкт GET (+цикл)
// Додати об‘єкт POST
// Видалити об‘єкт DELETE
// Замінити об‘єкт (замінити яблуко на грушу) PUT
// Змінити об‘єкт (змінити червоний колір на зелений, яблкуко лишити) PATCH (+цикл)

let fruits = data.fruits;
//витягую конкретно масив фрутс з фрутс.джс

                        // Отримати об‘єкти всі GET
expressServer.get("/", (req, res) => {       // "/" - шлях на головну сторінку
    res.send("main");                        //відповідь з "main", коли робимо GET (.get) 
                                                //запит на головну сторінку
})

expressServer.get("/health", (req, res) => { // ці рядки просто мають бути, перевіряти, чи можна 
                                                //до апі достукатись, чи він є доступний
    res.send("ok");                         // health i ok
})
//коли робити запит на localhost:8080/health, має повернути відповідь "ok" і статус-код 200

expressServer.get("/fruits", (req, res) => { // "/fruits"- шлях на сторінку фруктів (localhost:8080/fruits)
   
    res.json(fruits);                        // тут отримуємо масив з фруктами (об'єктами), коли робимо GET запит
})
//там, де текст показати, ставимо .send (main, health)
//там, де показати дані/поля, ставимо json (fruits, apple..)

                        // Отримати конкретний об‘єкт GET
expressServer.get("/fruits/:fruit", (req, res) => { //хочемо вибрати кожен фрукт окремо при запиті GET
    // /fruits має бути в шляху завжди тут, а apple ми вказуємо в АПІ (у запиті вказати, який фрукт нам треба).
        //тобто, в коді ми маємо /:fruit, а в запиті назву конкретного фрукту (/:apple),
        //тоді логіка буде така, що ми відправляємо запит на /fruits/apple в АПІ (?) 
        // і із запиту дістаю назву фрукта

    const currentFruitFromReq = req.params.fruit;//дістаю назву фрукта із запиту (запит (в апі) буде /fruits/apрle)
    //console.log(currentFruitFromReq); //apple!!!
    
    //Властивість req.params — це об’єкт, що містить властивості, зіставлені з іменованими 
        //«параметрами» маршруту. Наприклад, якщо у вас є шлях /student/:id, 
        //то властивість “id” доступна як req.params.id

    let fruitsToShow = []; //нова корзина для яблук

    fruits.forEach(item => {
        if (item.name == currentFruitFromReq){ //перебираю фрккти, і якшо це якбуко
            fruitsToShow.push(item); //складаю в корзину їх(fruitsToShow)
        }
    });

    res.json(fruitsToShow); //показую нову корзину з яблуками
    //тут не сенд, а джейсон, бо постману потрібен джейсон


    //теж правильне рішення (замість форІч)
    // let filterFruit = fruits.filter(item => item.name == currentFruitFromReq);
    // res.json(filterFruit);
})

                        // Додати об‘єкт POST
expressServer.post("/fruits", (req, res) => { //ми додаємо фрукт в корзину фрутс, тому тут /фрутс
    let newFruit = req.body; // зберегло тіло, яке я відправила у запиті, 
                                //у змінну newFruit (тіло, яке пишемо в постмані при вибраному 
                                //POST і де в Body -> raw і формат у спадаючому списку JSON, 
                                //вказуємо свій фрукт (об'єкт) у форматі джейсон)
    fruits.push(newFruit); //додала новий фрукт в масив фрутс
    res.json(fruits); //показує корзину з фруктами включно з новим фруктом                       
})

                        // Видалити об‘єкт DELETE
expressServer.delete("/fruits/:fruit", (req, res) => { //ми видаляємо фрукт з корзини фрутс, тому тут /фрут
    const currentFruitFromReq = req.params.fruit;
    fruits = fruits.filter(item => item.name != currentFruitFromReq); //якщо назва фрукту в масиві 
                                                                         //не така, як назва фрукту в запиті
    res.json(fruits); //показуємо ті фрукти, шо лишились            
})

                        //Замінити об‘єкт (замінити яблуко на грушу) PUT
expressServer.put("/fruits/:fruit", (req, res) => {
    const currentFruitFromReq = req.params.fruit; // поточний фрукт із запиту
    let newFruit = req.body; //фрукт-джейсон з постмана
    fruits = fruits.map(item => {
        if (item.name == currentFruitFromReq) { //якшо ім'я фрукту збігається з фруктом в запиті
            return newFruit; //повенути новий фрукт
        } else {
            return item; //інакше - залишити старий фрукт
        }
    });
    res.json(fruits); //вивести масив з фруктами
})

                        //Змінити об‘єкт (змінити червоний колір на зелений, яблуко лишити) PATCH
expressServer.patch("/fruits/:fruit", (req, res) => {
    const currentFruitFromReq = req.params.fruit;
    let newFruit = req.body; //тіло запиту (новий фрукт)

    //сам фрукт що не мож було міняти на інший, а лише його властивості
    fruits.forEach(item => {
        if (item.name == currentFruitFromReq) { //якшо назва фрукту в масиві = назві фрукту з рядка запиту
            item.colour = newFruit.colour; //тоді міняємо поле з кольором на таке, як ми пишемо у джейсоні у постмані
            item.freshness = newFruit.freshness; //і міняємо свіжість на то значення, яке у джейсоні у постмані
            //поле item.name писати не треба, бо ми робимо форІч по нашому масиву фрутс і то поле так і лишається незмінним
        }
    });
    res.json(fruits); //в дужках змінені дані (масив)
})


//server listener (start server)
expressServer.listen(PORT, HOST, () => {
    console.log(`Starting Server at ${HOST}:${PORT}`); //localhost:8080
})

//after writing code, start server:
//node server-name.js




