const { ObjectId } = require('mongoose').Types
const Tour = require('../../database/model/Tour')

module.exports = async (root, { _id, whats_included }, { session: { admin }}) => {
  if(!admin)
    throw new Error("You're not authenticated!")

  const updateStatus = await Tour.updateOne({ _id: ObjectId(_id) }, whats_included)
  if(updateStatus.nModified > 0) {

    return { _id, ...whats_included }
  }
}