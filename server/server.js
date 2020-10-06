/** @format */

const express = require('express');
const cors = require('cors');
const app = express();
const monk = require('monk');
const db = monk('localhost:27016/test');

const collection = db.get('docu');
app.use(cors());
app.use(express.json());
app.get('/', async (req, res) => {
  try {
    collection.insert([{ a: 1 }, { a: 2 }, { a: 3 }]);
    const item = await collection.find();
    console.log(item);
    res.json(item);
  } catch (error) {}
});
app.listen(5000, () => {
  console.log('dynamic server up and running port:5000');
});
