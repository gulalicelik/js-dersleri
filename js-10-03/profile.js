console.log('profile.js is loaded');




const urlParams = new URLSearchParams(window.location.search);
const userId = urlParams.get('userId');

const profileContainer = document.querySelector('.profile-container');
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(response => response.json())
        .then((user) => {
            const mySpinner = document.querySelector('.active-spinner');
            mySpinner.classList.remove('active-spinner');
            mySpinner.classList.add('disable-spinner');
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
                `;
            profileContainer.appendChild(div);


        }).catch(error => console.log(error));

    
    


