(() => {
  const refs = {
    openModalBtn: document.querySelector('#modal-bynow-open'), // указываешь название класса для открывающейся иконки
    openModalBtn2: document.querySelector('.modal-bynow-open'), // указываешь название класса для открывающейся иконки
    closeModalBtn: document.querySelector('.modal-bynow-close'), // указываешь название класса для закрывающейся иконки
    modal: document.querySelector('.modal-bynow'), // название для бэкдропа, я у себя использовала этот класс просто как селектор, стили для него не писала
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.openModalBtn2.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden-bynow'); //добавить еще один класс is-hidden--mobile, можно в стилях просто его добавить к is-hidden через запятую
  }
})();
