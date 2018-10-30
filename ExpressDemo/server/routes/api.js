const express = require('express');
const router = express.Router();

const axios = require('axios');



/* GET api listing. */
router.get('/', (req, res) => {
  res.send('Hello Radhe Krishna From BackEnd...!');
});



