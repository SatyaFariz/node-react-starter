const { Schema } = require('mongoose')

module.exports = new Schema({

  filename: {
    type: String,
    required: true,
  },

  url: {
    type: String,
    required: true,
  },

  secure_url: {
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

  is_spherical: {
    type: Boolean
  },

  spherical_url: {
    type: String
  },

  spherical_secure_url: {
    type: String
  }
})