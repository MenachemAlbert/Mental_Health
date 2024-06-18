const btn = document.getElementById('button');
const form = document.getElementById('form');
const loginBtn = document.getElementById('login-btn');
const searchBtn = document.getElementById('search-btn');

let isLoggedIn = false; 

let userData = JSON.parse(localStorage.getItem('userData'));
if (userData) {
  isLoggedIn = true;
  updateLoggedInState(); 
}

form.addEventListener('submit', login);

async function login(event) {
  event.preventDefault();

  let userName = document.getElementById('user').value;
  let password = document.getElementById('password').value;
  console.log(userName, password);

  try {
    const res = await fetch('http://localhost:8080/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username: userName, password: password })
    });

    if (res.status === 200) {
      const data = await res.json();
      console.log(data);
      localStorage.setItem('userData', JSON.stringify(data));
      isLoggedIn = true;
      closeLoginForm();
      updateLoggedInState(); 
    } else {
      alert('User not found!');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('Failed to log in. Please try again.');
  }

  document.getElementById('user').value = '';
  document.getElementById('password').value = '';
}

function openLoginForm() {
  var popup = document.getElementById('login-popup');
  popup.classList.add('show');
}

function closeLoginForm() {
  var popup = document.getElementById('login-popup');
  popup.classList.remove('show');
}

window.onclick = function(event) {
  var popup = document.getElementById('login-popup');
  if (event.target == popup) {
    popup.classList.remove('show');
  }
}

function updateLoggedInState() {
  if (isLoggedIn) {
    loginBtn.textContent = 'להתנתק';
    loginBtn.addEventListener('click', logout);
  } else {
    loginBtn.textContent = 'התחברות';
    loginBtn.removeEventListener('click', logout); 
  }
}

function logout() {
  localStorage.removeItem('userData');
  isLoggedIn = false;
  updateLoggedInState();
  alert('Logged out successfully!');
}

loginBtn.addEventListener('click', () => {
  if (!isLoggedIn) {
    openLoginForm();
  } else {
    logout();
  }
});

searchBtn.addEventListener('click', () => {
    if (isLoggedIn) {
      window.location.href = './page_2.html';
    } else {
      alert('Please log in to find doctors.');
    }
  });