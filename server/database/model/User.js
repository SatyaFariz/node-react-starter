const mongoose = require('mongoose')
const UserType = require('./UserType')
const Image = require('./Image')
const ResetPassword = require('./ResetPassword')

const User = new mongoose.Schema({

  name: {
    type: String,
    required: true,
    trim: true
  },

  username: {
    type: String,
    unique: true,
    sparse: true,
    required: true,
    trim: true
  },

  email: {
    type: String,
    unique: true,
    sparse: true,
    trim: true
  },

  password: {
    type: String,
    required: true,
  },

  user_type: {
    type: UserType,
    required: true,
    default: {}
  },

  reset_password: {
    type: ResetPassword
  },

  avatar: {
    type: Image
  },

  birthday: {
    type: Date
  },

  phone: {
    type: String,
    trim: true
  },

  whatsapp: {
    type: String,
    trim: true
  },

  province: {
    type: String,
    trim: true
  },

  city: {
    type: String,
    trim: true
  },

  address: {
    type: String,
    trim: true
  }
}, { timestamps: true })

module.exports = mongoose.model('user', User, 'user')