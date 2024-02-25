// // js string metodları
//
// // 1- length
// // 2- concat
// // 3- toUpperCase
// // 4- toLowerCase
// // 5- indexOf
// // 6- lastIndexOf
// // 7- charAt
// // 8- charCodeAt
// // 9- substring
// // 10- slice
// // 11- replace
// // 12- split
// // 13- trim
// // 14- match
// // 15- search
// // 16- includes
// // 17- startsWith
// // 18- endsWith
//
//
//
//
// let text = "Merhaba Dünya Merhaba insanlar";
//
// // 1- length
// console.log(text.length);
//
// // 2- concat
// console.log(text.concat(" ", "Nasılsınız?"));
//
// // 3- toUpperCase
// console.log(text.toUpperCase());
//
// // 4- toLowerCase
// console.log(text.toLowerCase());
//
// // 5- indexOf
// console.log(text.indexOf("z"));
//
// // 6- lastIndexOf
// console.log(text.lastIndexOf("a"));
//
// // 7- charAt
// console.log(text.charAt(1));
//
// // 8- charCodeAt
// console.log(text.charCodeAt(1));
//
// // 9- substring
// console.log(text.substring(1, 5));
//
// // 10- slice
// console.log(text.slice(1, 5));
//
// // 11- replace
// console.log(text.replace("Merhaba", "Hello"));
// console.log(text.replaceAll("Merhaba", "Hello"));
//
// // 12- split
// console.log(text.split(" "));
//
// // 13- trim
// console.log(text);
// console.log(text.trim());
//
// // 14- match
// console.log(text.match("Merhaba"));
//
// // 15- search
// console.log(text.search("Dünya"));
//
// // 16- includes
// console.log(text.includes("Dünya")); // case sensitivty
//
// // 17- startsWith
// console.log(text.startsWith("Merhaba"));
//
// // 18- endsWith
// console.log(text.endsWith("lar"));


// JS SCOPE
//
// // Global Scope
// var value1 = 10;
// let value2 = 20;
// const value3 = 30;
//
// console.log("Value1: ", value1);
// console.log("Value2: ", value2);
// console.log("Value3: ", value3);
//
// function func() {
//     // Function Scope
//     var value1 = 40;
//     let value2 = 50;
//     const value3 = 60;
//
//     console.log("Value1: ", value1);
//     console.log("Value2: ", value2);
//     console.log("Value3: ", value3);
// }
//
// func();
// console.log("Value1 global: ", value1);
// console.log("Value2 global: ", value2);
// console.log("Value3 global: ", value3);
//
// if (1){
//     // Block Scope
//     var value1 = 70;
//     let value2 = 80;
//     const value3 = 90;
//
//     console.log("Vaasdadalue1: ", value1);
//     console.log("Value2: ", value2);
//     console.log("Value3: ", value3);
// }
// console.log("Value1: ", value1);
// console.log("Value2: ", value2);
// console.log("Value3: ", value3);
//


//setTimeout ve setInterval

// setTimeout(function () {
//     console.log("Naber?");
// }, 2000);

// setInterval(function () {
//     console.log("Naber?");
// }, 1000);

// let i = 0;
// let value = setInterval(function () {
//     i++;
//     console.log("Sayı: ", i);
// }, 1000);
//
// clearInterval(value);

// TASK set interval ile ekrana saniyede 1 kez 0 ile 1000 arasında random sayı üretin
// bu işlem 10 saniye sonra durmalı

// let value = setInterval(function () {
//     console.log(Math.random() * 1000);
// }, 1000);
//
// setTimeout(function () {
//     clearInterval(value);
// }, 10000);

// callback fonksiyonlar

// const print = text => console.log(text);

// setInterval(() => console.log("Naber?"), 1000);
// function print(text) {
//     console.log(text);
// }
//
// print("Merhaba");

// function printWithCallBack(callback,text) {
//     console.log(text);
//     callback();
// }

// printWithCallBack(() => console.log("Callback"), "Merhaba");

// JS CLASSES

// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//
//
//     showInfos() {
//         console.log("İsim: ", this.name, "Yaş: ", this.age);
//     }
// }
//
// let person1 = new Person("Mustafa", 25);
// let person2 = new Person("Ahmet", 30);
//
// person1.showInfos();
// person2.showInfos();
//
//
// class phone {
//     constructor(brand, model, price) {
//         this.brand = brand;
//         this.model = model;
//         this.price = price;
//     }
//
//     showInfos() {
//         console.log("Brand: ", this.brand, "Model: ", this.model, "Price: ", this.price);
//     }
// }
//
//
// class IPhone extends phone {
//     constructor(brand, model, price, color) {
//         super(brand, model, price);
//         this.color = color;
//     }
//
//     showInfos() {
//         console.log("Brand: ", this.brand, "Model: ", this.model, "Price: ", this.price, "Color: ", this.color);
//     }
// }
//
// class rolesEnum {
//     static ADMIN = "admin";
//     static USER = "user";
// }
//
// class colorEnum {
//     static RED = "red";
//     static GREEN = "green";
//     static BLUE = "blue";
// }
//
// console.log(rolesEnum.ADMIN);
// console.log(showInfos());
//
//
// if(personRole == rolesEnum.ADMIN){
//
// }

