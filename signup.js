const form = document.getElementById('signupForm');
const msg = document.getElementById('msg');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const username = document.getElementById('newUsername').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('newPassword').value;

  if (password.length < 4) {
    msg.textContent = 'Password must be at least 4 characters';
    return;
  }

  // Save to localStorage (demo purpose)
  localStorage.setItem('user', JSON.stringify({ username, email, password }));

  alert('Signup successful! 🎉 Please login');
  window.location.href = 'index.html';
});
