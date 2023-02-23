let fruit = {
    // index: 1,
    name: 'apple',
    colour: 'red',
    freshness: 'fresh'
};

// let object = {
//     // index: 2,
//     name: 'apple',
//     colour: 'green',
//     freshness: 'fresh'
// }



let fruits = [fruit, 
    //object
];



// let findFruit = fruits.find(item => item.name == "apple"); //тут знайшли конкретно фрукт епл (обєкт) { name: 'apple', colour: 'red', freshness: 'fresh' }
        //знаходить лише перший елемент
        //тоді ми зможемо лише для першого епл шукати відповідність з еплом із апі
        //тоді треба і тут зробити перебір всередині масиву, 
        //шоб у той айтем.нейм підставляти різні значення?
        //тоді знову питання, як можемо перебирати масив з одного обєкта, який є фруктом,
        //коли треба мати можливість мати в якості обєкта фрут різні фрукти, сука?

    //.find - метод масиву, щоб знайти елемент в обєкті, який всередині масиву, через його імя (ключ), 
    //а не через його індекс (як array[0])
// console.log(findFruit);

//console.log(findFruit.name);

// let findFruitIndex = fruits.find(item => item.index == 1); //тут знайшли ім'я п фрукта по індеску
// let fruitFromArr = findFruitIndex.name;
// console.log(fruitFromArr); //apple




module.exports = { fruit, fruits };
    //в {} вказуємо те, шо хочемо експортувати, щоб користувати ці дані в інших файлах


//fruits.js - це в нас зараз йде за модуль, з якого інші файли можуть імпортувати дані
//module - це в нас такий об'єкт в кожному файлі
//об'єкт module має властивість exports, який є пустим об'єктом {...}



