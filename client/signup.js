/** @format */
console.log('script loaded');
const form = document.querySelector('form');
var signup = document.getElementsByClassName('signup');
var e = document.getElementById('occupation');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const formdata = new FormData(form);
  const username = formdata.get('username');
  const email = formdata.get('email');
  const password = formdata.get('password');
  const confirm = formdata.get('confirm');
  var occu = e.options[e.selectedIndex].value;
  const userdata = {
    name: username,
    email: email,
    occupation: occu,
    password: password,
  };
  console.log(userdata);
});
