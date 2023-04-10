
let hamBurgerElement = document.querySelector('.toolbar-menu-container');
let overlayMenu = document.querySelector('.overlay-menu');

console.log(hamBurgerElement.nodeName);
console.log(hamBurgerElement.nodeType);
console.log(hamBurgerElement.classList);

console.log(overlayMenu.nodeName);
console.log(overlayMenu.nodeType);
console.log(overlayMenu.classList);

hamBurgerElement.addEventListener('click', function() {
    overlayMenu.classList.remove('.hidden');
});

console.log(overlayMenu.classList);