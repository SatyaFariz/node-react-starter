const { Schema } = require('mongoose')

module.exports = new Schema({

  name: {
    type: String,
    required: true,
    enum: ['ADMIN', 'REGULAR_USER'],
    default: 'REGULAR_USER'
  },

  roles: {
    type: [String]
  },
}, { _id: false })