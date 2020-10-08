/** @format */
console.log('script loaded');
const form = document.querySelector('form');
var signup = document.getElementsByClassName('signup');
var e = document.getElementById('occupation');
const url = 'http://localhost:5000/';

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const formdata = new FormData(form);
  const username = formdata.get('username');
  const email = formdata.get('email');
  const password = formdata.get('password');
  const confirm = formdata.get('confirm');
  var occu = e.options[e.selectedIndex].value;
  const usercreds = {
    name: username,
    email: email,
    occupation: occu,
    password: password,
  };
  fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors',
    body: JSON.stringify(usercreds),
    // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    // body data type must match "Content-Type" header
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
});
