/** @format */

console.log('script2 loaded');
const form = document.querySelector('form');
const url = 'http://localhost:5004/login';
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const formdata = new FormData(form);
  const userlogindata = {
    email: formdata.get('email'),
    password: formdata.get('password'),
  };
  fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors',
    body: JSON.stringify(userlogindata),
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
    .then((data) => {
      if (data === userlogindata.email) {
        location.replace('http://127.0.0.1:5500/client/index.html');
        sessionStorage.setItem('data', data);
      } else {
        console.log(data);
      }
    });
});
