const { Schema } = require('mongoose')

module.exports = new Schema({

  name: {
    type: String,
    required: true,
    enum: ['Admin', 'Developer', 'Regular User'],
    default: 'Regular User'
  },

  roles: {
    type: [String]
  },
}, { _id: false })