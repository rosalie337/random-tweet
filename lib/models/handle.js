const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  }
});

schema.virtual('tweets', {
  ref: 'Tweet',
  localField: '_id',
  foreignField: 'handle'
});
  
module.exports = mongoose.model('TwitterHandle', schema);