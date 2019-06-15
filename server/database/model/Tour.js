const { Schema } = require('mongoose')

const Image = require('./Image')

module.exports = new Schema({
  province: {
    type: String,
    required: true
  },

  city: {
    type: String,
    required: true
  },

  name: {
    type: String,
    required: true
  },

  duration_in_days: {
    type: Number,
    required: true
  },

  price_per_person: {
    type: Number,
    required: true,
  },

  description: {
    type: String,
    required: true
  },

  free_cancellation: {
    type: Boolean,
    required: true
  },

  foods_included: {
    type: String
  },

  drinks_included: {
    type: String
  },

  accomodations_included: {
    type: String
  },

  tickets_included: {
    type: String
  },

  transportation_included: {
    type: String
  },

  equipment_included: {
    type: String
  },

  good_for: {
    type: String
  },

  location_details: {
    type: String
  },

  highlights: {
    type: [String],
    required: true,
    default: []
  },

  terms_and_conditions: {
    type: [String],
    required: true,
    default: []
  },

  cancellation_policy: {
    type: [String],
    required: true,
    default: []
  },

  guest_requirements: {
    type: [String],
    required: true,
    default: []
  },

  more_tips: {
    type: [String],
    required: true,
    default: []
  }

  itinerary: {
    type: [[String]]
  },

  photos: {
    type: [Image],
    required: true,
    default: []
  },

  next_available_dates: {
    type: [Number],
    required: true,
    default: []
  }
})