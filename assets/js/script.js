const loginModal = document.querySelector("#login-modal");
const loginBtn = document.querySelector('#login-button');
const user = document.querySelector('#login-user-input');
const pass = document.querySelector('#login-password-input');
const username = 'saif';
const password = 'pass';
const signInBtn = document.querySelector('#sign-in-button')

document.addEventListener('click', (event)=>{
    // // open/close login modal
    // if (event.target.matches('#login-button') ||
    //     event.target.matches('.close-icon')) {
    //     loginModal.classList.toggle('hide-modal');
    // }

    // check user login
    if (event.target.matches('#sign-in-button') && event.target.textContent === 'Log in'){
        if (String(user.value).toLowerCase() === username && pass.value === password){
            console.log('login successful');
            location.href = './userprofile.html';
        } else {console.log('login unsuccessful')}
    }

    if (event.target.matches('#log-out')){
        location.href = './index.html'
    }

    // create new user
    if (event.target.matches('#new-user-button')){
        location.href = './create_new_user.html';
    }
})

// close login modal on escape key press
document.addEventListener('keydown', (event)=>{
    if (event.key === "Escape" && !loginModal.className.includes('hide-modal')) {
        loginModal.classList.toggle('hide-modal')
    }
})