const express = require('express');
const mongoose = require('mongoose');

const app = require('./app');

const mongourl =
  'mongodb+srv://tayebkahia:YR48ebjs18l3WKyZ@cluster0.w51v2kf.mongodb.net/UserLogin?retryWrites=true&w=majority';
mongoose
  .connect(mongourl, {
    useNewUrlParser: true,
    /*
    useCreateIndex: true,
    useFindAndModify: false,
    */
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('connected');
  })
  .catch((err) => console.log(err));

app.listen(8000, () => {
  console.log('server is running');
});
