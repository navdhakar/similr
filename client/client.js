/** @format */

const server_uri = 'http://localhost:5000';
fetch(server_uri)
  .then((res) => res.json())
  .then((data) => console.log(data));
