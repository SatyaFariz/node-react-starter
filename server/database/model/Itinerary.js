const { Schema } = require('mongoose')

module.exports = new Schema({
  tour_id: {
    type: Schema.Types.ObjectId,
    ref: 'tour',
    required: true,
  },

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