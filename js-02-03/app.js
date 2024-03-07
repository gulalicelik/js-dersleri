// recursive fonsksiyonlar
// kendi kendini çağıran fonksiyonlar

// function recursiveFonksiyon() {
//     console.log('Merhaba');
//     recursiveFonksiyon();
// }

// JS FUNCTİONS EXAMPLES

// 1. Function
// : ÖĞRENCİNİN VİZE VE FİNAL NOTUNU PARAMETRE OLARAK ALAN VE ORTALAMASINI GERİ DÖNEN BİR FONKSİYON YAZINIZ
// METODU ÇAĞIRARAK ORTALAMAYI EKRANA YAZDIRINIZ (VİZE %40 - FİNAL %60)

// const addresses = [
//     {
//         id: 1,
//         title: 'Home',
//         city: 'İstanbul',
//         district: 'Kadıköy'
//     },
//     {
//         id: 2,
//         title: 'Work',
//         city: 'Ankara',
//         district: 'Çankaya'
//     },
//     {
//         id: 3,
//         x: 'School',
//         city: 'İzmir',
//         district: 'Konak'
//     },
//     {
//         id: 4,
//         title: 'School',
//         city: 'İzmir',
//         district: 'Bornova'
//     }
// ]

// TASK 2 : addresses dizisindeki her bir elemana posta kodunu foreach ile ekleyiniz
// posta kodu o ile 10000 arassında random bir sayı olmalıdır

// addresses.forEach((address) => {
//     address.postalCode = Math.floor(Math.random() * 10000);
// });

// task2.2 : filter metodu ile city alanı izmir olan adresleri filtreleyiniz

// const filteredAddresses = addresses.filter((address) => address.city === 'İzmir');
// console.log(filteredAddresses);

// spread operator

// const numbers = [1,2,3,4,5];
// const newNumbers = [...numbers, 6,7,8,9,10];
// console.log(newNumbers);

// task : addresses dizi parametre olarak alan ve bu obje içindeki title alanlarını silip yeni bir
// dizi dönen bir fonksiyon yazınız.

// const removeTitle = (addresses) => {
//     return addresses.map((address) => {
//         const {title, ...newAddress} = address;
//         return newAddress;
//     });
// }

// use foreach

// const removeTitle = (addresses) => {
//     const newAddresses = [];
//     addresses.forEach((address) => {
//         const {title, ...newAddress} = address;
//         newAddresses.push(newAddress);
//     });
//     return newAddresses;
// }

// const newAddresses = removeTitle(addresses);
// console.log(newAddresses);

// ASYNC - AWAIT

// asenkron fonksiyon nasıl tanımlanır

// async function myFunction  () {
//    await getMydata()
//     return 'Hello';
// }

// const myFunction = async () => {
//     await getMydata();
//     return 'Hello';
// }


const getUsersData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    console.log(users);
}

getUsersData();

// const topla = async  (a, b) => {
//     return a + b;
// }
