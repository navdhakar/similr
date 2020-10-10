/** @format */

const express = require('express');
const cors = require('cors');
const router = express();
const monk = require('monk');
router.use(cors());
router.use(express.json());
const db = monk('localhost:27016/test');
// db.options = {
//   safe: true,
//   castIds: false,
// };//code to disable autocasting o id's;
const usercreds = db.get('userd');
router.use(cors());
router.use(express.json());
router.get('/', async (req, res) => {});
router.listen(5004, () => {
  console.log('dynamic server up and running port:5004');
});
router.post('/signup', async (req, res) => {
  const new_user_creds = await usercreds.insert(req.body);
  // const dat = await userdata.find();
  // console.log(dat);
  console.log(`${req.body.name} is added to database`);
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
// }//bad thinking
router.post('/login', async (req, res) => {
  const current_user = req.body;

  const user_records = await usercreds.find({ email: current_user.email }, 'password');
  // const some = current_user.password === users_records.docs.password;
  // console.log(some);
  if (user_records[0].password == undefined) {
    console.log('user not found');
  } else {
    if (current_user.password === user_records[0].password) {
      const usern = await usercreds.find({ email: current_user.email }, 'email');
      const username = usern[0].email;

      res.json(username);
      console.log('verified user looged in');
    } else {
      res.json('wrong credential');
      console.log('unverified user');
    }
  }
});
router.post('/user', async (req, res) => {
  const useremail = req.body;
  const userinfo = await usercreds.find({ email: useremail.data }, 'name');
  res.json(userinfo[0].name);
});

// for (var i = 0; i < user_no; i++) {
//   if (current_user.password === users_records) {
//     console.log('verified user logged in');
//     res.json('you are a verified user');
//   } else {
//     res.json('you are an imposter');
//   } //!!do not ever code like this!! you dumb
