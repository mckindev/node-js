import express from 'express';
import ConfigViewEngine from './configs/viewengine';
import initwebroute from './route/web';
import connection from './configs/connectDB'
require('dotenv').config();
const app = express()
const path = require('path');
const port = 3000

// setup engine
ConfigViewEngine(app);

// khoi tao route
initwebroute(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})