const hamBurgerElement = document.querySelector('.toolbar-menu-container');
const overlayMenu = document.querySelector('.overlay-menu');

console.log(hamBurgerElement.nodeName);
console.log(hamBurgerElement.nodeType);
console.log(hamBurgerElement.classList);

console.log(overlayMenu.nodeName);
console.log(overlayMenu.nodeType);
console.log(overlayMenu.classList);

hamBurgerElement.addEventListener('click', () => {
  overlayMenu.classList.toggle('hidden');
});

console.log(overlayMenu.classList);

overlayMenu.addEventListener('click', () => {
  overlayMenu.classList.toggle('hidden');
});

const overlayWindow = document.querySelector('#overlay');

document.querySelectorAll('.show-modal').forEach((element) => {
  element.addEventListener('click', () => {
    overlayWindow.style.display = 'block';
  });
});

document.querySelector('#close-modal').addEventListener('click', () => {
  overlayWindow.style.display = 'none';
});