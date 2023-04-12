const hamBurgerElement = document.querySelector('.toolbar-menu-container');
const overlayMenu = document.querySelector('.overlay-menu');

hamBurgerElement.addEventListener('click', () => {
  overlayMenu.classList.toggle('hidden');
});

overlayMenu.addEventListener('click', () => {
  overlayMenu.classList.toggle('hidden');
});

// Pop up window

const overlayWindow = document.querySelector('#overlay');

document.querySelectorAll('.show-modal').forEach((element) => {
  element.addEventListener('click', () => {
    overlayWindow.style.display = 'block';
  });
});

document.querySelector('#close-modal').addEventListener('click', () => {
  overlayWindow.style.display = 'none';
});

// Client side validation

const form = document.querySelector('#form-submit');
const email = document.querySelector('.form-email');
const errorMessage = document.querySelector('.error-message');

// email.addEventListener('input', (e) => {
//     if (e.target.value !== e.target.value.toLowerCase()) {
//         email.setCustomValidity('Email must be lowercase');
//         errorMessage.innerText = 'Error: Email must be lowercase; Form is not sent.';
//     } else {
//         email.setCustomValidity('');
//         errorMessage.innerText = '';
//     }
// });

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (email.value !== email.value.toLowerCase()) {
    errorMessage.innerText = 'Error: Email must be lowercase; Form is not sent.';
  }
  else {
    errorMessage.innerText = '';
    form.submit();
  }
});