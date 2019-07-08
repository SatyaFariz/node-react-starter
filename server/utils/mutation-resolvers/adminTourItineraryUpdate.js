const { ObjectId } = require('mongoose').Types
const Itinerary = require('../../database/model/Itinerary')

module.exports = async (root, { _id, input }, { session: { admin }}) => {
  if(!admin)
    throw new Error("You're not authenticated!")

  const updateStatus = await Itinerary.updateOne({ _id: ObjectId(_id) }, { ...input })
  if(updateStatus.nModified > 0) {

    return { _id, ...input }
  }
}