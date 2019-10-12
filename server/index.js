const express = require('express');
const db = require('../database/seed.js');
const path = require('path');
const app = express();
const port = 3003;

app.use(express.static(path.join(__dirname, '../client/dist')));

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