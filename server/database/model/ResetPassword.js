const { Schema } = require('mongoose')

module.exports = new Schema({

  code: {
    type: String,
    required: true,
    trim: true
  },

  expires: {
    type: Date,
    required: true
  },
}, { _id: false })