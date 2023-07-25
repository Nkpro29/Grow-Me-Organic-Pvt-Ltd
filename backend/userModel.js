const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userName: String,
    phone_no: Number,
    email: String,
  });
  
  // Create a Mongoose model based on the schema
  const UserModel = mongoose.model('Form', userSchema);

  module.exports = UserModel;
  