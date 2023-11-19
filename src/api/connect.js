const mongoose = require('mongoose');
const express = require('express');

const app = express();

mongoose.connect('mongodb://localhost:27017/users', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(async () => {
  console.log("Connect mongodb!");

  const User = mongoose.model('User', {
    login: String,
    email: String,
    password: String,
  });

  // ---------- adding new user -------------

  const newUser = new User({
    login: 'admin',
    email: 'admin@test.com',
    password: 'admin123'
  });
  await newUser.save();

  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
}).catch((err) => {
  console.log(`Error with connect to mongodb: ${err}`);
});