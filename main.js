// HamBurger Menu using JavaScript

const hamBurgerElement = document.querySelector('.toolbar-menu-container');
const overlayMenu = document.querySelector('.overlay-menu');

hamBurgerElement.addEventListener('click', () => {
  overlayMenu.classList.toggle('hidden');
});

overlayMenu.addEventListener('click', () => {
  overlayMenu.classList.toggle('hidden');
});

// Array of Projects (Objects) to be displayed

const projects = [
    {
        name: 'Tonic',
        description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
        image: 'assets/Snapshoot-Portfolio-1.svg',
        technologies: ['HTML', 'CSS', 'Javascript'],
        liveLink: 'https://abdulwhbhussain.github.io/Microverse_portfolio_project/',
        sourceLink: 'https://github.com/Abdulwhbhussain/Microverse_portfolio_project',
    },
    {
        name: 'Multi-Post Stories',
        description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
        image: 'assets/Snapshoot-Portfolio-2.svg',
        technologies: ['HTML', 'CSS', 'Javascript'],
        liveLink: 'https://abdulwhbhussain.github.io/Microverse_portfolio_project/',
        sourceLink: 'https://github.com/Abdulwhbhussain/Microverse_portfolio_project',
    },
    {
        name: 'Tonic',
        description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
        image: 'assets/Snapshoot-Portfolio-3.svg',
        technologies: ['HTML', 'CSS', 'Javascript'],
        liveLink: 'https://abdulwhbhussain.github.io/Microverse_portfolio_project/',
        sourceLink: 'https://github.com/Abdulwhbhussain/Microverse_portfolio_project',
    },
    {
        name: 'Multi-Post Stories',
        description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
        image: 'assets/Snapshoot-Portfolio-4.svg',
        technologies: ['HTML', 'CSS', 'Javascript'],
        liveLink: 'https://abdulwhbhussain.github.io/Microverse_portfolio_project/',
        sourceLink: 'https://github.com/Abdulwhbhussain/Microverse_portfolio_project',
    },
];

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

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (email.value !== email.value.toLowerCase()) {
    errorMessage.innerText = 'Error: Email must be lowercase; Form is not sent.';
    email.value = email.value.toLowerCase();
  } else {
    errorMessage.innerText = '';
    form.submit();
    localStorage.clear();
    document.querySelectorAll('.form-input').forEach((element) => {
      element.value = '';
    });
  }
});

// Form Data in Local Storage

if (localStorage.getItem('formData')) {
  const formData = JSON.parse(localStorage.getItem('formData'));
  document.querySelectorAll('.form-input').forEach((element) => {
    if (formData[element.name]) {
      element.value = formData[element.name];
    }
  });
}

const formDataObject = localStorage.getItem('formData') ? JSON.parse(localStorage.getItem('formData')) : {};

document.querySelectorAll('.form-input').forEach((element) => {
  element.addEventListener('input', (e) => {
    formDataObject[e.target.name] = e.target.value;
    localStorage.setItem('formData', JSON.stringify(formDataObject));
  });
});