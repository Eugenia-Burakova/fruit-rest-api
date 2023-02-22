let fruit = {
    index: 1,
    name: 'apple',
    colour: 'red',
    freshness: 'fresh'
};

let fruits = [fruit];

module.exports = { fruit, fruits };
    //в {} вказуємо те, шо хочемо експортувати, щоб користувати ці дані в інших файлах


//fruits.js - це в нас зараз йде за модуль, з якого інші файли можуть імпортувати дані
//module - це в нас такий об'єкт в кожному файлі
//об'єкт module має властивість exports, який є пустим об'єктом {...}

