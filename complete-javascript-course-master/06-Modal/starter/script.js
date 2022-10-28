'use strict';

const modal = document.querySelector('.modal');
const modalDiv = document.getElementById('modalContainer');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
const test = document.getElementById('useDaedalusTagsModal');
const btnClose = document.querySelector('.close');

const openModal = () => {
  // modal.classList.remove('hidden');
  test.classList.toggle('modal');
  test.classList.toggle('hidden');

  // modalDiv.classList.remove('hidden');
  overlay.classList.toggle('hidden');
};

btnClose.addEventListener('click', () => {
  openModal();
});

const closeModal = () => {
  // modal.classList.add('hidden');
  modalDiv.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
}

btnCloseModal.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  } else return;
});
