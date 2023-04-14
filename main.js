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
for (let i = 0; i < projects.length; i += 1) {
  const project = projects[i];
  const projectElement = document.createElement('div');
  if (i === 0 || i === 2) {
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
              <button id="click-id-${i}" class="normal-button">
                <p class="project-text">See Project</p>
              </button>
            </div>
          </div>
    `;
  portfolioSection.appendChild(projectElement);
}

// Pop up window work section

for (let i = 0; i < projects.length; i += 1) {
  const overlay = document.createElement('div');
  overlay.className = `overlay-${i}`;
  overlay.innerHTML = `
  <div class="modal" style="padding: 2%;">
          

          <div class="">
            <div style="display: flex; justify-content: space-between;">
              <h2 class="project-title">${projects[i].name}</h2>
            <button class="close-modal-${i}">&times;</button>
            </div>
            
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

        <img
            class="overlay-image-container"
            src=${projects[i].image}
            alt="Snapshoot Portfolio-2"
          />

          <div style="display: flex; justify-content: space-between;">
            <div style="width: 50%; padding-right: 2%; display: inline-block;">
              <p class="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit enim architecto in impedit ab fugit, laboriosam voluptatem, repellendus dolore molestias harum reprehenderit iste maxime soluta.
              </p>
    
              <p class="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit omnis temporibus saepe nulla, suscipit veniam eveniet nihil delectus, rem assumenda voluptatum commodi tempora facilis accusantium?
              </p>
            </div>
            
  
            <div style="display: inline;">
              <ul class="tags" style="margin-bottom: 1rem;">
                <li class="tag-html"><p class="tag-text-html">HTML</p></li>
                <li class="tag-css"><p class="tag-text-css">CSS</p></li>
                <li class="tag-js"><p class="tag-text-js">JavaScript</p></li>
              </ul>
    
              <button class="normal-button" >See Live</button>
    
                <button class="normal-button">See Source</button>
            </div>
          </div>

      </div>

  `;
  document.querySelector('.template-1').appendChild(overlay);
}

for (let i = 0; i < projects.length; i += 1) {
  const overlayy = document.querySelector(`.overlay-${i}`);

  document.querySelector(`#click-id-${i}`).addEventListener('click', () => {
    overlayy.style.display = 'block';
  });
}

for (let i = 0; i < projects.length; i += 1) {
  document.querySelector(`.close-modal-${i}`).addEventListener('click', () => {
    document.querySelector(`.overlay-${i}`).style.display = 'none';
  });
}

// Client side validation using JavaScript

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