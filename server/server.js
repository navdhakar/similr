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
// };//code to disable autocasting o id's;
const usercreds = db.get('userd');
app.use(cors());
app.use(express.json());
app.get('/', async (req, res) => {});
app.listen(5000, () => {
  console.log('dynamic server up and running port:5000');
});
app.post('/', async (req, res) => {
  const new_user_creds = await usercreds.insert(req.body);
  // const dat = await userdata.find();
  // console.log(dat);
  res.json('you are registered successfully');
});
// function verifyuser(pass){
//   for (var i = 0; i < user_no; i++) {
//     if (pass === users_records) {
//       console.log('verified user logged in');
//       res.json('you are a verified user');
//     } else {
//       continue;
//     }
// }
app.get('/', async (req, res) => {
  const users_records = await usercreds.find();
  res.json(users_records);
});
app.post('/login', async (req, res) => {
  const current_user = req.body;
  const user_records = await usercreds.find({ email: current_user.email }, 'password');
  // const some = current_user.password === users_records.docs.password;
  // console.log(some);
  if (current_user.password === user_records[0].password && user_records != undefined) {
    res.json('you are a verified user');
    console.log('verified user looged in');
  } else {
    res.json('you are an imposter');
    console.log('unverified user');
  }
});

// for (var i = 0; i < user_no; i++) {
//   if (current_user.password === users_records) {
//     console.log('verified user logged in');
//     res.json('you are a verified user');
//   } else {
//     res.json('you are an imposter');
//   }
