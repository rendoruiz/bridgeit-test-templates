const password = document.getElementById('password');
const confirmPassword = document.getElementById('password-confirm');
const registerForm = document.getElementById('register-form');

registerForm.addEventListener('submit', (e) => {
  if (password.value !== confirmPassword.value) {
    e.preventDefault();
    alert('both password fields must be equal!');
  }
});