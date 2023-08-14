const dotenv = require('dotenv');
dotenv.config({ path: '../.env' });
const express = require('express');
const app = express();
require('../db/conn');
const testRoute = require('../route/route');
const cors = require('cors');
const fileUpload = require('express-fileupload')

app.use(cors());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'https://attend-x-client.vercel.app');
  // You can set other CORS headers here if needed
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});


app.use(fileUpload({
    useTempFiles: true
}))

app.use(express.json());

app.use('/', testRoute); // Mount the testRoute middleware

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(8000, () => {
    console.log('Listening on port 8000');
});
