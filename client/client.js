/** @format */

const url = 'http://localhost:5004/user';
const userna = document.getElementById('username');
var data = sessionStorage.getItem('data');
const usernm = {
  data,
};
fetch(url, {
  method: 'POST', // *GET, POST, PUT, DELETE, etc.
  mode: 'cors',
  body: JSON.stringify(usernm),
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
  .then((userinfo) => {
    username.innerHTML = userinfo;
  });
