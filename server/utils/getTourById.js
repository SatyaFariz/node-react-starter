const { ObjectId } = require('mongoose').Types
const Tour = require('../database/model/Tour')

module.exports = async (_id) => await Tour.findById(ObjectId(_id))