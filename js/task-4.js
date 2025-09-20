const formElem = document.querySelector('.login-form');
formElem.addEventListener('submit', event => {
  event.preventDefault();
  const emailValue = formElem.elements.email.value.trim();
  const passwordValue = formElem.elements.password.value.trim();

  if (emailValue === '' || passwordValue === '') {
    alert('All form fields must be filled in');
    return;
  }

  const formData = {
    email: emailValue,
    password: passwordValue,
  };

  console.log(formData);
  formElem.reset();
});
