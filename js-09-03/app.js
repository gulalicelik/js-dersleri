// console.log(localStorage)
// console.log(sessionStorage)

// localStorage.setItem('name2', 'John')
// localStorage.setItem('name3', 'John')
// localStorage.setItem('nam5', 'John')
// localStorage.setItem('nam6', 'John')
// localStorage.setItem('nam23423', 'John')

// console.log(localStorage.getItem('name'))
//
// localStorage.removeItem('name')
//
// localStorage.clear()


// sessionStorage.setItem('name', 'Beth')
// sessionStorage.setItem('namasde', 'Beth')
// sessionStorage.setItem('nasdame', 'Beth')
// sessionStorage.setItem('naasdasdme', 'Beth')


// console.log(sessionStorage.getItem('name'))


// sessionStorage.removeItem("name");

// sessionStorage.clear();


// TASK 1 : setitem metodu ile localstorage'a username = 'admin' ve password = '1234' değerlerini ekleyin.


// TASK 2 : ekranda 2 adet input olmalı
// 1. input username
// 2. input password
// 3. bir tane buton olmalı
// butona tıkladığımızda inputlara girilen değerler ile localstorage'da bulunan username ve password değerleri karşılaştırılmalı
// eğer username ve password doğru ise
// ekranda alert ile 'Giriş Başarılı' yazmalı
// eğer username veya password yanlış ise
// ekranda alert ile 'Giriş Başarısız' yazmalı
// butona tıklandığında inputların içeriği temizlenmeli


// cookies

// document.cookie = "username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";


// try catch

// const getMyPhoneNumberFromLocalStroage = () => {
//     try {
//         const phoneNumber = localStorage.getItem('phoneNumber')
//         if (!phoneNumber) {
//             throw new Error('phoneNumber is not found')
//         }
//         return phoneNumber
//     } catch (error) {
//         console.log(error.message)
//         console.log('ali')
//     }
//     finally {
//         console.log('finally')
//     }
// }


// Promises

// promise status

// pending
// fulfilled
// rejected

//resolve
//reject


// const myPromise = new Promise((resolve, reject) => {
//     const randomNumber = Math.floor(Math.random() * 10)
//     if (randomNumber > 5) {
//         resolve('Promise is resolved')
//     } else {
//         reject('Promise is rejected')
//     }
// })
//
// myPromise.then((data) => {
//     console.log(data)
//     console.log(myPromise)
// }).catch((error) => {
//     console.log(error)
//     console.log(myPromise)
// });

// fetch

const myContainer = document.querySelector('.post-container');


fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then((data) => {
        const mySpinner = document.querySelector('.active-spinner');
        mySpinner.classList.remove('active-spinner');
        mySpinner.classList.add('disable-spinner');
        data.forEach((item) => {
            const div = document.createElement('div');
            div.classList.add('post-item');
            div.innerHTML = `
                <h2 class ="post-title">${item.title}</h2>
                <p class="post-body">${item.body}</p>
            `;
            myContainer.appendChild(div);
        });

    }).catch(error => console.log(error));

// TASK: json placeholdera istek at gelen datayı ekrana (console değil) bas