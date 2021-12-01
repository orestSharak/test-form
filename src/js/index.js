/* Here goes your JS code */

const modal = document.querySelector(".modal");
const closeButton = document.querySelector(".modal__close");
const form = document.querySelector('#form');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const terms = document.querySelector('#terms');
const checkboxSpan = document.querySelector('.form__terms');
const showPopup = document.querySelector('#show-popup-form');
const message = document.querySelector('#message');
const submitBtn = document.querySelector('#submit');


let toggleModal = () => {
  modal.classList.toggle("show-modal");
  email.value = '';
  password.value = '';
  terms.checked ? terms.checked = false : '';
  checkboxSpan.style.color = 'black';
};


let onSubmit = (e) => {
  e.preventDefault();
  if (terms.checked === true) {

    checkboxSpan.style.color = 'black';
    submitBtn.setAttribute('disabled', 'true');

    setTimeout(() => {
      showPopup.remove();
      toggleModal();
      message.classList.toggle("visible");
    }, 3000);

  } else {
    checkboxSpan.style.color = 'red';
  }


};


showPopup.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
form.addEventListener('submit', onSubmit);





