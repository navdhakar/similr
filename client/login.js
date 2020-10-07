/** @format */

console.log('script2 loaded');
const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const formdata = new FormData(form);
  const userlogindata = {
    email: formdata.get('email'),
    password: formdata.get('password'),
  };
  console.log(userlogindata);
});
