const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  handle: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Handle',
    required: true
  },
  text: {
    type: String,
    required: true,
    maxlength: 140
  },
 
  commentPosted: {
    type: Date,
    required: true,
  }
});

module.exports = mongoose.model('comment', schema);