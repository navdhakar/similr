/** @format */

const express = require('express');
const cors = require('cors');
const app = express();
const monk = require('monk');
app.use(cors());
app.use(express.json());
const db = monk('localhost:27016/test');
// db.options = {
//   safe: true,
//   castIds: false,
// };
const userdata = db.get('userd');
app.use(cors());
app.use(express.json());
app.get('/', async (req, res) => {});
app.listen(5000, () => {
  console.log('dynamic server up and running port:5000');
});
app.post('/', async (req, res) => {
  await userdata.insert(req.body);
  const dat = await userdata.find({ name: 'navdeep' }, 'email');
  console.log(dat);
  res.json(dat);
});
