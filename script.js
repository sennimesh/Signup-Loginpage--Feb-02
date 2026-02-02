const form = document.getElementById('loginForm');
const errorMsg = document.getElementById('errorMsg');
const togglePwd = document.getElementById('togglePwd');
const password = document.getElementById('password');

// Fake credentials (demo)
const USER = 'admin';
const PASS = '1234';

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const username = document.getElementById('username').value.trim();
  const pwd = password.value.trim();

  if (username === USER && pwd === PASS) {
    alert('Login Successful 🎉');
    errorMsg.textContent = '';
  } else {
    errorMsg.textContent = 'Invalid username or password';
  }
});

// Show / Hide password
togglePwd.addEventListener('click', () => {
  password.type = password.type === 'password' ? 'text' : 'password';
});
