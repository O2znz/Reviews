const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const db = require('../database/seed.js');

const app = express();
const port = 3003;

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(bodyParser.json());
app.use(cors());

app.get('/reviews', (req, res) => {
  db.getAll((err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(result);
    }
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));