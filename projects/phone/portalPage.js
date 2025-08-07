const loginForm = document.querySelector('.login-form');

const usrField = loginForm.querySelector('#username');
const pwField = loginForm.querySelector('#password');
const loginBtn = loginForm.querySelector('.login-btn');

const portal = document.querySelector('.portal');
const iframe = portal.querySelector('iframe');


loginBtn.addEventListener('click', attemptLogin);
loginForm.addEventListener("submit", function(e) {
  e.preventDefault(); 
  attemptLogin();
  loginForm.style.display;
  console.log("Login clicked");
});



function attemptLogin() {
    if (usrField.value === 'clearviewadmin' &&
        pwField.value === 'gaxlyanblitz829') {
            iframe.style.display = 'block';
            loginForm.style.display = 'none';
    }
    
}
