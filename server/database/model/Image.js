const { Schema } = require('mongoose')

module.exports = new Schema({

  filename: {
    type: String,
    required: true,
  },

  URL: {
    type: String,
    required: true,
  },

  secureURL: {
    type: String,
    required: true
  },

  height: {
    type: Number,
    required: true,
  },

  width: {
    type: Number,
    required: true,
  },

  caption: {
    type: String
  },

  is360: {
    type: Boolean
  },

  URL360: {
    type: String
  },

  secureURL360: {
    type: String
  }
})