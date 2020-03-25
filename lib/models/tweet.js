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
  }
});

module.exports = mongoose.model('Tweet', schema);