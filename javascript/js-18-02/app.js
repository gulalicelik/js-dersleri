// veri tipi  değişken ismi = değer;

// var;
// let;
// const;

// değişken_tipi değişken_ismi = değer;
// const name = "Mehmet";

//
// let  name = "Mehmet";

//
let age = '35';
//
// let isSuccess = true;
//
// let firstChar =   "a";
//
let celcius = 13.5;
//
let person1 = ["Ahmet", 25, true];
// console.log(person1[3]);
//
// let address = {
//     city: "Ankara",
//     country: "Turkey",
//     postCode: 6000,
// };
// console.log(address.city);
// console.log(address.country);
// console.log(address.postCode);
// console.log(address["city"]);


// let isim1 = "Mehmet";
// let isim2 = "Ahmet";
// let isim3 = "Ali";
// let isim4 = "Veli";


// person1.push("Hakan")

// console.log(typeof person1)
// console.log(typeof Number(age));
// console.log(typeof Number(age));
// console.log(typeof String(celcius))

// console.log(document.getElementById('subtitle'));
// console.log(document.getElementsByClassName('titleClass'));
// console.log(document.querySelectorAll('.titleClass'));
// console.log(document.querySelector('#subtitle'));

// console.log(document.getElementById("title"));
// console.log(document.getElementsByClassName("titleClass"));
// console.log(document.getElementsByTagName("p"));

// console.log(document.querySelector(".titleClass"));
// console.log("------------------------------")
// console.log(document.querySelectorAll(".titleClass"));

// let  allTitles  = document.querySelectorAll(".titleClass")
//
// console.log(allTitles);

// const mainTitle = document.getElementById("mainTitle");

// mainTitle.innerText = "Main <span>Title</span>";

// const subtitle = document.getElementById("subtitle");
// console.log(subtitle.innerHTML);
// console.log(subtitle.innerText);

// TASK 1 : bir fonksiyon tanımlayın ve bu fonksiyonu butona tıklandığında çağırın
// fonsksiyonun görevi console hello world yazdırmak olacaktır.

// TASK 2 : farklı bir fonksiyon tanımlayın
// fonksiyounun adı listMyMainTitleElement olsun
// HTML dökümanınız içerisinde H1 başlıklı içeriği JS DERSLERİ olan bir element olmalı
// bu elemente id vermelisiniz ve bu id mainTitle olmalı
// fonksiyonunuz bu elementi consola yazdırmalıdır farklı bir buton ile çağrılmalıdır.
// fonksiyon elementin kendisini değil içerğindeki texti yazdırmalıdır
// butona tıklandığında başlaık "REACT DERSLERİ" olarak değişmeli
// butona tıklandığında  "JS DERSLERİ" olan başlığın rengi kırmızı olmalı.
// function printHelloWorld(){
//     console.log("Hello World");
// }

// const mainTitle = document.getElementById("mainTitle");
// function  listMyMainTitleElement(){
//     console.log(mainTitle);
//     console.log(mainTitle.innerText);
//     mainTitle.innerText = "REACT DERSLERİ";
//     mainTitle.style.color = "red";
// }
//
// console.log(address.city)
// console.log(address.country)


// innerHMTL
//innerText

// console.log(mainTitle.innerHTML);
// console.log(mainTitle.innerText);

// mainTitle.innerHTML = "Main <span>Title</span>";

// let number1 = 90;
// let number2 = 20;
// console.log(number1);
// console.log(number2);


// ARİTMETİK OPERATÖRLER
// console.log("+",number1 + number2); // + operatörü toplama işlemi yapar
// console.log("-",number1 - number2); // - operatörü çıkarma işlemi yapar
// console.log("*",number1 * number2); // * operatörü çarpma işlemi yapar
// console.log("/",number1 / number2); // / operatörü bölme işlemi yapar
// console.log("%",number1 % number2); // % operatörü mod alma işlemi yapar
// console.log("**",number1 ** number2); // ** operatörü üs alma işlemi yapar
//
// console.log("++",++number1); // number1 = number1 + 1
// console.log("--",--number1); // number1 = number1 + 1
// console.log("++",number1++); // number1 = number1 + 1
// console.log("--",number1--); // number1 = number1 - 1
//

//MANTIKSAL OPERATÖRLER

// && (VE) operatörü
// || (VEYA) operatörü
// ! (DEĞİL) operatörü

// let condition1 = true; // 1
// let condition2 = false; // 0
//
// console.log("&&",condition1 && condition2); // true && false => false
// console.log("||",condition1 || condition2); // true || false => true
// console.log("!",!condition1); // !true => false

// KARŞILAŞTIRMA OPERATÖRLERİ

// == (EŞİTTİR) operatörü
// === (KESİN EŞİTTİR) operatörü
// != (EŞİT DEĞİLDİR) operatörü
// !== (KESİN EŞİT DEĞİLDİR) operatörü
// > (BÜYÜKTÜR) operatörü
// < (KÜÇÜKTÜR) operatörü
// >= (BÜYÜK EŞİTTİR) operatörü
// <= (KÜÇÜK EŞİTTİR) operatörü

// let number1 = 10;
// let number2 = "10";

// console.log("==",number1 == number2); // true // sadece içeeril olarak kontrol eder
// console.log("===",number1 === number2); // false // bu hem içerik hem veri tipi açısından kpnrol eder
// console.log("!=",number1 != number2); // false
// console.log("!==",number1 !== number2); // true
// console.log(">",number1 > number2); // false
// console.log("<",number1 < number2); // false
// console.log(">=",number1 >= number2); // true
// console.log("<=",number1 <= number2); // true


// TYPE OF OPERATÖRÜ

// console.log(typeof number1);
// console.log(typeof number2);

// INsTANCEOF OPERATÖRÜ

// console.log(number1 instanceof Number);
// console.log(number2 instanceof Number);

// ATAMA OPERATÖRLERİ

// = (ATAMA) operatörü
// += (TOPLAMA ATAMA) operatörü
// -= (ÇIKARMA ATAMA) operatörü
// *= (ÇARPMA ATAMA) operatörü
// /= (BÖLME ATAMA) operatörü
// %= (MOD ATAMA) operatörü

// let number3 = 10;
//
// number3 += 5; // number3 = number3 + 5
// console.log(number3);
// number3 -= 5; // number3 = number3 - 5
// console.log(number3);
// number3 *= 5; // number3 = number3 * 5
// console.log(number3);
// number3 /= 5; // number3 = number3 / 5
// console.log(number3);
// number3 %= 5; // number3 = number3 % 5
// console.log(number3);

// let number = 4;
// let number2 = '2'
//
// if (number === 1) {
//     console.log("if bloğu çalıştı");
// } else if (number === 2) {
//     console.log("else if1 bloğu çalıştı");
// } else if (number === 3) {
//     console.log("else if2 bloğu çalıştı");
//
// } else if (number === 4) {
//     console.log("else if3 bloğu çalıştı");
//
// }else {
//     console.log("else bloğu çalıştı");
// }


// switch (number) {
//     case 1:
//         console.log("case 1 çalıştı");
//         break;
//     case 2:
//         console.log("case 2 çalıştı");
//         break;
//     case 3:
//         console.log("case 3 çalıştı");
//         break;
//     case 4:
//         console.log("case 4 çalıştı");
//         break;
//     default:
//         console.log("default çalıştı");
//         break;
// }


// TASK  : calculator.html isimli bir html dosyası oluşturun
// bu dosya içerisinde 1 adet input alanı oluşturun
// bu input alanına sadece sayısal değerler girilebilmeli
// bu input alanının yanına 1 adet buton oluşturun ve bu butonun üzerine "HESAPLA" yazın
// bu butona tıklandığında input alanına girilen değerin tek mi çift mi
// olduğunu alert() metodu ile ekrana yazdırın
// girmiş olduğunuz x aayısı çift bir sayıdır
// veya girmiş olduğunuz x sayısı tek bir sayıdır gibi mesaj verin
// ekranda sonuç : X tektir veya çifttir olarak görünmeli

// const operand1 = document.getElementById("operand1");
// const result = document.getElementById("result");
// function calculate() {
//     if (operand1.value % 2 === 0) {
//         alert("Girmiş olduğunuz "+operand1.value+ " sayısı bir çift sayıdır");
// result.innerText = `Sonuç: Girmiş olduğunuz ${operand1.value} sayısı bir çift sayıdır`;
// alert(`Girmiş olduğunuz ${operand1.value} sayısı bir çift sayıdır`);
// } else {
//     alert(`Girmiş olduğunuz ${operand1.value} sayısı bir tek sayıdır`);
// result.innerText = `Sonuç: Girmiş olduğunuz ${operand1.value} sayısı bir tek sayıdır`;
// }
// }
//
// TASK : calculator.html isimli bir html dosyası oluşturun
// bu dosya içerisinde 2 adet input alanı oluşturun
// bu input alanlarına sadece sayısal değerler girilebilmeli
// bu input alanlarının yanına 1 adet buton oluşturun ve bu butonun üzerine "HESAPLA" yazın
// bu butona tıklandığında input alanlarına girilen değerlerin toplamını ekrandaki sonuç alanına yazdırın
// araştırma ip uçu type casting

// const operand1 = document.getElementById("operand1");
// const operand2 = document.getElementById("operand2");
// const result = document.getElementById("result");
//
// function calculate() {
//     result.innerText = `Sonuç: ${Number(operand1.value) + Number(operand2.value)}`;
// }


// TASK : calculator.html isimli bir html dosyası oluşturun
// bu dosya içerisinde 2 adet input alanı oluşturun
// bu input alanlarına sadece sayısal değerler girilebilmeli
// bu input alanlarının yanına 4 adet buton oluşturun
// ve bu butonların üzerine +, -, *, / yazın
// bu butonlara tıklandığında input alanlarına girilen değerlerin
// butona tıklanılan işlemi yaparak ekrandaki sonuç alanına yazdırın

// inputların arasında dropdown ekleyin ve bu dropdown içerisinde
// 4 işlemi seçebileceğiniz 4 adet option ekleyin
// bu optionlardan birine tıklandığında input alanlarına girilen değerlerin
// seçilen işlemi yaparak ekrandaki sonuç alanına yazdırın
// sadece 1 buton olmalı ve bu butonun üzerine HESAPLA yazın


//
// function topla() {
//     result.innerText = `Sonuç: ${Number(operand1.value) + Number(operand2.value)}`;
// }
// function carp() {
//     result.innerText = `Sonuç: ${Number(operand1.value) * Number(operand2.value)}`;
// }
// function cikar() {
//     result.innerText = `Sonuç: ${Number(operand1.value) - Number(operand2.value)}`;
// }
// function bol() {
//     result.innerText = `Sonuç: ${Number(operand1.value) / Number(operand2.value)}`;
// }

// const operand1 = document.getElementById("operand1");
// const operand2 = document.getElementById("operand2");
// const operator = document.getElementById("operator");
// const result = document.getElementById("result");
//
// function calculate() {
//
// switch (operator.value) {
//         case "+":
//             result.innerText = `Sonuç: ${Number(operand1.value) + Number(operand2.value)}`;
//             break;
//         case "-":
//             result.innerText = `Sonuç: ${Number(operand1.value) - Number(operand2.value)}`;
//             break;
//         case "*":
//             result.innerText = `Sonuç: ${Number(operand1.value) * Number(operand2.value)}`;
//             break;
//         case "/":
//             result.innerText = `Sonuç: ${Number(operand1.value) / Number(operand2.value)}`;
//             break;
//     }
// }

// TASK : index.html isimli bir html dosyası oluşturun
// bu dosya içerisinde 1 adet input alanı oluşturun
// bu input alanına sadece sayısal değerler girilebilmeli
// bu input alanının yanına 1 adet buton oluşturun ve bu butonun üzerine "HESAPLA" yazın
// bu butona tıklandığında input alanına girilen değerin karesini ekrana yazdırın
// ekranda sonuç : Girmiş olduğunuz x sayısının karesi y'dir olarak görünmeli
// ekrana bir p elementi create edin ve bu p elementine sonucu yazdırın

// var result = document.createElement("p");
// result.setAttribute("id","result");
// result.innerText = "Sonuç: ";
// const myContainer = document.querySelector("#container");
// myContainer.appendChild(result);
// function calculate(){
//     const number1 = document.getElementById("number1").value;
//     result.innerText = `Sonuç: Girmiş olduğunuz ${number1} sayısının karesi ${Math.pow(number1,2)}'dir`
// }

// var myInput=document.createElement("input");
// myInput.setAttribute("type","number");
// myInput.setAttribute("id","number1");
// myInput.setAttribute("placeholder","Enter a number");
// document.body.appendChild(myInput);

// EVENTS

// //click
// const myButton = document.getElementById("myButton");
// myButton.addEventListener("click",function () {
//     console.log("Button clicked");
// });
//
// const myDiv = document.getElementById("container");
// myDiv.addEventListener("click",function () {
//     console.log("Div clicked");
// });
// // onmouseover
// myDiv.addEventListener("mouseover",function () {
//     console.log("Div mouseover");
// });
//
// // onmouseout
// myDiv.addEventListener("mouseout",function () {
//     console.log("Div mouseout");
// });
//
// // onmousemove
// myDiv.addEventListener("mousemove",function () {
//     console.log("Div mousemove");
// });
//
//
//
// const loremText = document.getElementsByTagName("p");
// console.log(loremText);
//
// // ekrana 200x200 boyutlarında mavi bir div oluşturu divin üzerine tıkandığında
// // divin rengi kırmızı olmalı
//
// const myDiv2 = document.getElementById("container");

// myDiv2.addEventListener("click",function () {
//     myDiv.style.backgroundColor = "blue";
// });


// const loremText = document.getElementsByClassName("active")
// console.log(loremText.innerText);
// console.log(loremText.innerHTML);
// const loremText = document.getElementById("loremIpsum");
// console.log(loremText.className);
// console.log(loremText.classList);
// console.log(loremText.classList[0]);
// console.log(loremText.id);
// loremText.className = "disabled";
// console.log(loremText.className);
// loremText.classList.add("disabled");
// loremText.className = "text  blue red ali disabled";


// https://www.w3schools.com/tags/ref_eventattributes.asp

// loremText.classList.remove("ayse");
// loremText.classList.add("disabled");
//
// loremText.addEventListener("click",function () {
//     loremText.classList.toggle("disabled");
// });

// const firstname = document.getElementById("yourFirstame");
// const lastname = document.getElementById("yourLastname");
// const submitBtn = document.getElementById("submitButton");
// const myLoginForm = document.getElementById("myLoginForm");
// firstname.addEventListener("focus",function () {
//     firstname.style.backgroundColor = "yellow";
// });
//
// lastname.addEventListener("focus",function () {
//     lastname.style.backgroundColor = "red";
// });
//
// oninput
//
// firstname.addEventListener("input",function () {
//     console.log(firstname.value);
// });

// submitBtn.addEventListener("click",function () {
//     alert("Form gönderildi buton submit");
// });


//onsubmit

// myLoginForm.addEventListener("submit",function (e) {
//     alert("Form gönderildi form submit event");
// });


// onkeydown

// firstname.addEventListener("keydown",function () {
//     console.log("Keydown event");
// });

// onkeyup

// firstname.addEventListener("keyup",function () {
//     console.log("Keyup event");
// });

// onkeypress
//
// firstname.addEventListener("keypress",function () {
//         console.log("Keypress event");
// });


// click event
// onmouseover
// onmouseout
// onmousemove
// oninput
// onsubmit
// onkeydown
// onkeyup
// onkeypress
// onfocus


// JSON
// JavaScript Object Notation

// data types
// string  "" ''
// number  1 2.5
// object {}
// array  []
// boolean true/false
// null
// undefined

//
// const person = {
//     "name"     : "Mehmet", //string
//     "age"      : 35,        //number
//     "isStudent": true,  //boolean
//     "address"  : {        //object
//         "city"    : "Ankara",
//         "country" : "Turkey",
//         "postCode": 6000,
//     },
//     "hobbies"  : ["music", 25, "reading", "swimming", false, {
//         school    : "Ankara University",
//         department: "Computer Engineering",
//         year      : 2005,
//         friends   : ["Ahmet", "Ali", "Veli", [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]]
//     }], //array(object)
// };
// TaSK myInformations isimli bir json oluşturun
// bu json içerisinde  adınız soyadınız, yaşınız, hobileriniz, adres bilgileriniz,cinsiyet(bool)
// okul bilgileriniz, arkadaşlarınızın isimleri ve yaşları
// yaşadığınız şehirin ilçeleri ve posta kodları

// const myInformations = {
//     "name"   : "Mehmet",
//     "surname": "Yılmaz",
//     "age"    : 35,
//     "hobbies": ["music", "reading", "swimming"],
//     "address": {
//         "city"     : "Ankara",
//         "districts": ["Çankaya", "Keçiören", "Mamak", "Yenimahalle"],
//         "postCodes": [6000, 6001, 6002, 6003]
//     },
// }
//
// const stringJson = "{\"name\":\"Mehmet\",\"surname\":\"Yılmaz\",\"age\":35,\"hobbies\":[\"music\",\"reading\",\"swimming\"],\"address\":{\"city\":\"Ankara\",\"districts\":[\"Çankaya\",\"Keçiören\",\"Mamak\",\"Yenimahalle\"],\"postCodes\":[6000,6001,6002,6003]}}"
//
// console.log(myInformations.name);
//
// console.log(JSON.stringify(myInformations));
// console.log(JSON.parse(stringJson).name);


// TASK : console 100 tane ali yazdırın

// for

// for(baslagıç durumu, koşul, atırım// azaltım){
//
// }

// for(let i = 2  ; i<=100 ; i++){
//    console.log(`ali ${i}`);
// }

// TASK consoleda ali 100 ali 99 ali 98 ... ali 1 yazdırın

// for(let i =100 ; i>=1 ; i--){
//     console.log(`ali ${i}`);
// }

//while
// var k  = 0
// while(koşul){
//     artırım veya azaltımı
// }

// var k = 101;
//
// while(k<=100){
//     console.log(`ali ${k}`);
//     k++;
// }

// do - while döngüsü
// başlangıç durumu
//  do {
//         console.log("ali");
//         artırım veya azaltım
//  } while (koşul);

// var j = 1000;
// do {
//     console.log(`ali ${j}`);
//     j++;
// } while (j <= 100);
//
// TASK : 1 den 100 e kadar olan sayıların toplamını ekrana yazdırın
//
// console.log((100 * 101) / 2);
// var total = 0 ;
// for(let i = 1 ; i<=100 ; i++){
//     total += i; // total = total + i
// }
// console.log(total);
//
// TASK : 1 den 100 e kadar olan çift sayıların toplamını ekrana yazdırın while döngüsü ile yapın

// var total2 = 0;
// var k = 1;
// while(k<=100){
//     if(k % 2 === 0){
//         total2 += k;
//     }
//     k++;
// }
//
// const cities = [
//     "Ankara",
//     "İstanbul",
//     "İzmir",
//     "Antalya",
//     "Bursa",
//     "Adana",
//     "Trabzon",
//     "Samsun",
//     "Konya",
//     "Eskişehir"
// ];
// console.log(cities[0]);
// console.log(cities[1]);
// console.log(cities[cities.length - 1]);
// for(let i  = 0; i<cities.length ; i++){
//     console.log(cities[i]);
// }

// TASK : yukarıda tanımlı olan iki dizi elemanlarını kullanran
// aşağıdaki çıktıyı alın
// Ali Ankara'da yaşar
// Veli İstanbul'da yaşar
// const persons


// object.keys objenin keylerini bir dizi olarak döner
// object.values objenin valuelarını bir dizi olarak döner.
// console.log(Object.keys(address).length);
// console.log(Object.values(address).length);
// console.log(address);

// console.log(Object.entries(address));
// [["city","Ankara"],["districts","Çankaya"],["country","Turkey"],["street","Bahçelievler"],["no",12],["postCodes",6000]

// for (let i = 0; i < Object.keys(address).length; i++) {
//     console.log(Object.keys(address)[i],Object.values(address)[i]);
// }
// const address = {
//     city     : "Ankara",
//     districts: "Çankaya",
//     country: "Turkey",
//     street: "Bahçelievler",
//     no: 12,
//     postCodes: 6000
// }
// const myInformations = {
//     "name"   : "Mehmet",
//     "surname": "Yılmaz",
//     "age"    : 35,
//     "hobbies": ["music", "reading", "swimming"],
//     "address": {
//         "city"     : "Ankara",
//         "districts": ["Çankaya", "Keçiören", "Mamak", "Yenimahalle"],
//         "postCodes": [6000, 6001, 6002, 6003]
//     },
// }
// myInformations['gender'] = "Erkek"

// myInformations['address']['district'] = "Sincan";
// myInformations.address.districts.push("Sincan");
// console.log(myInformations);


// TASK : yukarıda tanımlı olan myInformations objesine
// "gender" adında bir key ekleyin ve value olarak cinsiyetnizi yazın
// ekledikten sonra son halini console da yazdırın
// myInformations objesinin district keyine "sincan" değerini ekleyin
// ekledikten sonra son halini console da yazdırın
// döngü kullanarak tüm ilçeleri ekrana yazdırın

// for(let i = 0 ; i<myInformations.address.districts.length ; i++){
//     console.log(myInformations.address.districts[i]);
// }

// JS DİZİ Metodları

// push
// pop
// shift
// unshift
// splice
// slice
// includes
// indexOf
// lastIndexOf
// reverse
// sort
// find
// findIndex
// some
// every
// fill
// filter
// map
// forEach


const cities = [
    "Ankara",
    "İstanbul",
    "İzmir",
    "Antalya",
    "Bursa",
    "Adana",
    "Trabzon",
    "Samsun",
    "Konya",
    "Eskişehir",
    "Ankara",
];

// push diziye eleman ekler (en sona ekler)
// cities.push("Malatya");

// pop dizinin son elemanını siler (en sondan siler)
// cities.pop();

// shift dizinin ilk elemanını siler (en baştan siler)
// cities.shift();

// unshift dizinin başına eleman ekler (en başa ekler)
//  cities.unshift("Malatya");

// splice dizinin istenilen indexine eleman ekler
// cities.splice(3,0,"Malatya");

// slice dizinin istenilen indexler arasındaki elemanları alır
// console.log(cities.slice(2,5));

// includes dizinin içerisinde aranan eleman var mı yok mu kontrol eder
// console.log(cities.includes("Ankara"));

// indexOf dizinin içerisinde aranan elemanın indexini döner
// console.log(cities.indexOf("Ankara"));

// lastIndexOf dizinin içerisinde aranan elemanın son indexini döner
// console.log(cities.lastIndexOf("Ankara"));

// reverse dizinin elemanlarını ters çevirir
// console.log(cities.reverse());

// sort dizinin elemanlarını sıralar
// console.log(cities.sort());

// find dizinin içerisinde aranan elemanı döner
// console.log(cities.find(city => city === "Ankara"));

// findIndex dizinin içerisinde aranan elemanın indexini döner
// console.log(cities.findIndex(city => city === "Ankara"));

// some dizinin içerisinde aranan eleman var mı yok mu kontrol eder
// console.log(cities.some(city => city === "Ankara"));

// every dizinin içerisindeki tüm elemanlar aranan eleman mı kontrol eder
// console.log(cities.every(city => city === "Ankara"));

// fill dizinin içerisindeki tüm elemanları istenilen eleman ile doldurur
// console.log(cities.fill("Ankara"));

const products = [
    {name: "Laptop", price: 1000, brand: "Apple"},
    {name: "Phone", price: 2000, brand: "Samsung"},
    {name: "Tablet", price: 3000, brand: "Apple"},
    {name: "Desktop", price: 4000, brand: "Asus"},
    {name: "Server", price: 5000, brand: "Apple"},
]

// filter dizinin içerisindeki elemanları filtreler
// console.log(products.filter(product => product.brand === "Apple"));

// map dizinin içerisindeki elemanları değiştirir
// const newProducts = products.map((product) => {
//     product["color"] = "red";
//     return product;
// })

// forEach dizinin içerisindeki elemanları döner
// dizi.forEach((parametre_adı) => {
//     yapmak isteiğin işlemler
// })

// const prices = products.map((product) => {
//     return product.price;
// });
// console.log(prices);
// products.forEach(product => {
//     return product.price;
// });

// for (let i = 0; i < products.length; i++) {
//     console.log(products[i]);
// }

// console.log(cities);


const sliders = [
    {title: "slider1", description: "description",buttonText:"Tıkla",buttonURL : "#", backgroundImageURL: "slider1.jpg"},
    {title: "slider1", description: "description",buttonText:"Tıkla",buttonURL : "#", backgroundImageURL: "slider1.jpg"},
    {title: "slider1", description: "description",buttonText:"Tıkla",buttonURL : "#", backgroundImageURL: "slider1.jpg"},
    {title: "slider1", description: "description",buttonText:"Tıkla",buttonURL : "#", backgroundImageURL: "slider1.jpg"},
    {title: "slider1", description: "description",buttonText:"Tıkla",buttonURL : "#", backgroundImageURL: "slider1.jpg"},
    {title: "slider1", description: "description",buttonText:"Tıkla",buttonURL : "#", backgroundImageURL: "slider1.jpg"},
]