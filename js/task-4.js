// const loginForm = document.querySelector('.login-form');
// loginForm.addEventListener('submit', function (event) {
//   event.preventDefault();

//   const filds = form.querySelectorAll('input, textarea, select');
//   let emptufound = false;
//   filds.forEach(field => {
//     if (field.value.trim() === '') {
//       emptufound = true;
//     }
//   });
//   if (emptufound) {
//     alert('All form fields must be filled in');
//     return;
//   }
// });

const formElem = document.querySelector('.login-form');
formElem.addEventListener('submit', event => {
  event.preventDefault();
  const emailValue = formElem.elements.email.value.trim();
  const passwordValue = formElem.elements.password.value.trim();

  const formData = {
    email: emailValue,
    password: passwordValue,
  };

  console.log(formData);
  formElem.reset();
});
