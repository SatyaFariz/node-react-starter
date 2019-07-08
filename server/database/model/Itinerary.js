const { Schema } = require('mongoose')

module.exports = new Schema({
  time_description: {
    type: String,
    required: true
  },

  activity_title: {
    type: String,
    required: true,
  },

  activity_description: {
    type: String,
    required: true,
  }
})