const Tour = require('../database/model/Tour')
const { ObjectId } = require('mongoose').Types
const { cursorToId } = require('./relayCursor')

module.exports = async (query, { limit, cursor }) => {
  if(!limit)
    throw new Error('Queries must have a limit.')

  if(cursor)
    query._id = { $lt: ObjectId(cursorToId(cursor)) }

  return await Tour.find( 
    query,
    null, 
    { 
      sort: { _id: -1 }, 
      limit: limit 
    }
  )
}