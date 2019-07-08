const { ObjectId } = require('mongoose').Types
const Itinerary = require('../../database/model/Itinerary')

module.exports = async (root, { _id }) => {
  const status = await Itinerary.remove({ _id: ObjectId(_id) })
  return { deleted_id: status.result.n === 1 ? _id : null }
}
