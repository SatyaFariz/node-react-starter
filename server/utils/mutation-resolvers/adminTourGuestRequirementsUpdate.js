const { ObjectId } = require('mongoose').Types
const Tour = require('../../database/model/Tour')

module.exports = async (root, { _id, guest_requirements }, { session: { admin }}) => {
  if(!admin)
    throw new Error("You're not authenticated!")

  const updateStatus = await Tour.updateOne({ _id: ObjectId(_id) }, { guest_requirements })
  if(updateStatus.nModified > 0) {

    return { _id, guest_requirements }
  }
}