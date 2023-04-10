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