// TASK https://jsonplaceholder.typicode.com/users bu endpointteki verileri fetch ile çekin ekrana  (console değil) basın
//  buradan gelen datalar user datalarıdır ekranda her bir datayı uygun tasarıma sahip bir card içinde gösterin
// veri çekilirken ekranda loading spinner olmalı veri geldikten sonra loading spinner kalkmalı
// istsersenşiz tabloya basın isterseniz card görüntüsü oluşturun



const myContainer = document.querySelector('.users-container');

//
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then((users) => {
        const mySpinner = document.querySelector('.active-spinner');
        mySpinner.classList.remove('active-spinner');
        mySpinner.classList.add('disable-spinner');
        users.forEach((user) => {
            const div = document.createElement('div');
            div.classList.add('user-card');
            div.innerHTML = `
            <div class="user-infos">
                   <div class="user-avatar">
                       <img src="https://i.pinimg.com/originals/ff/a0/9a/ffa09aec412db3f54deadf1b3781de2a.png" alt="user image" class="user-image">
                  </div>
                 <div class="user-name">${user.name}</div>
                 <div class="user-email">${user.email}</div>
          </div>
          <div class="address-area">
                 <p class="address-text">${user.address.street}</p>
         </div>
          <div class="company-area">
                   <p class="company-text">${user.company.name}</p>
          </div>
           <button  onclick="routeProfilePage(${user.id})" class="get-profile"> go to profile</button>
`;
            myContainer.appendChild(div);
            div.addEventListener('click', () => {
                window.location.href = `profile.html?userId=${(user.id)}`;
            });
        });

    }).catch(error => console.log(error));



const routeProfilePage  = (userId) => {
    window.location.href = `profile.html?userId=${userId}`;

}


