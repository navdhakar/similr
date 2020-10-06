/** @format */

const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {
  res.json('connected to back_end server');
});
app.listen(5000, () => {
  console.log('dynamic server up and running port:5000');
});
