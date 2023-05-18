import express from 'express';
import ConfigViewEngine from './configs/viewengine';
require('dotenv').config();
const app = express()
const path = require('path');
const port = 3000


ConfigViewEngine(app);

app.get("/", (req, res) => {
  res.render('index.ejs'); 
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})