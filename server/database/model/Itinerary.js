const mongoose = require('mongoose')

const Itinerary = new mongoose.Schema({
  tour_id: {
    type: mongoose.Schema.Types.ObjectId,
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

module.exports = mongoose.model('itinerary', Itinerary, 'itinerary')