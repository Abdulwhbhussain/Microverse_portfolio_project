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

const portfolioSection = document.querySelector('#portfolio');
console.log(portfolioSection);
for(let i = 0; i < projects.length; i++) {
    const project = projects[i];
    const projectElement = document.createElement('div');
    if(i === 0 || i === 2) {
        projectElement.classList.add('Card-works');
    } else {
        projectElement.classList.add('flip-card');
    }
    projectElement.innerHTML = `
    <img
            class="snapshoot-container"
            src= ${project.image}
            alt="Snapshoot Portfolio"
          />

          <div class="left-block">
            <div class="primary-text">
              <h2 class="project-title">${project.name}</h2>
              <div class="frame-2">
                <div class="client">
                  <p class="client-text">CANOPY</p>
                </div>

                <img class="container" src="assets/Counter.png" alt="Counter" />

                <p class="role role-text">BackEnd Dev</p>

                <img class="container" src="assets/Counter.png" alt="Counter" />

                <p class="year-label year-text">2015</p>
              </div>
            </div>

            <p class="text-after-Frame2">
              ${project.description}
            </p>

            <ul class="tags">
              <li class="tag-html"><p class="tag-text-html">${project.technologies[0]}</p></li>
              <li class="tag-css"><p class="tag-text-css">${project.technologies[1]}</p></li>
              <li class="tag-js"><p class="tag-text-js">${project.technologies[2]}</p></li>
            </ul>

            <div class="action-container">
              <button class="normal-button">
                <p class="project-text show-modal">See Project</p>
              </button>
            </div>
          </div>
    `;
    portfolioSection.appendChild(projectElement);
}

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