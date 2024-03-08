// localstorage sessionstorage
//
// console.log(localStorage);
// console.log(sessionStorage);

// set item

// localStorage.setItem('name1', 'local');
// localStorage.setItem('name2', 'john');
// localStorage.setItem('name3', 'john');

// get item

// console.log(localStorage.getItem('name'));

// remove item

// localStorage.removeItem('name');

// clear

// localStorage.clear();

// sessionStorage

// sessionStorage.setItem('name1', 'session');
// sessionStorage.setItem('name2', 'john');
// sessionStorage.setItem('name3', 'john');

// console.log(sessionStorage.getItem('name'));

// sessionStorage.removeItem('name');

// sessionStorage.clear();

// cookies

// function setCookie(name, value, days) {
//     var expires = "";
//     if (days) {
//         var date = new Date();
//         date.setTime(date.getTime() + (days*24*60*60*1000));
//         expires = "; expires=" + date.toUTCString();
//     }
//     document.cookie = name + "=" + (value || "")  + expires + "; path=/";
// }
//
// setCookie('name', 'john', 10);
//
// function getCookie(name) {
//     var nameEQ = name + "=";
//     var ca = document.cookie.split(';');
//     for(var i=0;i < ca.length;i++) {
//         var c = ca[i];
//         while (c.charAt(0)==' ') c = c.substring(1,c.length);
//         if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
//     }
//     return null;
// }
//
//
// function deleteCookie(name) {
//     document.cookie = name+'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
// }
//
//
// // Çerez ayarlama
// setCookie('kullaniciAdi', 'Ahmet', 7);
//
// // Çerez değeri okuma
// var kullanici = getCookie('kullaniciAdi');
// console.log(kullanici);
//
// // Çerez silme
// deleteCookie('kullaniciAdi');

// TASK 1 : setitem metodu ile localstorage'a username = 'admin' ve password = '1234' değerlerini ekleyin.
// localStorage.setItem('username', 'admin');
// localStorage.setItem('password', '1234');

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


// const login = () => {
//     let username = document.getElementById('username').value;
//     let password = document.getElementById('passwd').value;
//
//     if (username === localStorage.getItem('username') && password === localStorage.getItem('password')) {
//         alert('Giriş Başarılı');
//     } else {
//         alert('Giriş Başarısız');
//     }
//
//     document.getElementById('username').value = '';
//     document.getElementById('passwd').value = '';
// }


//try catch

//exception handling

let age = 23;


age = "ali";


const login = () => {
    try {
        let username = document.getElementById('username').value;
        let password = document.getElementById('passwd').value;

        if (username === localStorage.getItem('username') && password === localStorage.getItem('password')) {
            alert('Giriş Başarılı');
        } else {
            alert('Giriş Başarısız');
        }

        document.getElementById('username').value = '';
        document.getElementById('passwd').value = '';
        console.log('try');
    } catch (e) {
        console.log(e.message);
    } finally {
        console.log('finally');
    }
}

