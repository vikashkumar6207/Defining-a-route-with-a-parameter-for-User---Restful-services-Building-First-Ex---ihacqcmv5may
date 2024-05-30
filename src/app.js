const express = require('express');
const app = express();

app.get('/user/:userId', (req, res, next) => {
  //Write a code here for endpoint /user/:userId and also print parameter in json form
  
  const userId = req.params.userId;
  if(isNaN(userId)){
    const error = new Error("UserId must be a number");
    error.status = 400;
    return next(error);
  }
  res.status(200).json({userId});
});

module.exports = app;
