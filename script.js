'use strict';

// state variables
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnShowModal = document.querySelectorAll('.show-modal');
const btnCloseModal = document.querySelector('.close-modal');
// open modal window function
const openModalFunction = function () {
  console.log('Button clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
// close modal window function
const closeModalFunction = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnShowModal.length; i++) {
  console.log(btnShowModal[i].textContent);
}

// loop over all elements in the btnShowModal const -> addEventListener to remove the hidden class
for (let i = 0; i < btnShowModal.length; i++) {
  btnShowModal[i].addEventListener('click', openModalFunction);
}

// closeModalFunction() would immediately as soon as JS executes this line instead of calling the function on click
btnCloseModal.addEventListener('click', closeModalFunction);
overlay.addEventListener('click', closeModalFunction);
