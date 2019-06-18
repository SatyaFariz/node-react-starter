const { ObjectId } = require('mongoose').Types
const Tour = require('../../database/model/Tour')

module.exports = async (root, { _id }, { session: { admin }}) => {
  if(!admin)
    throw new Error("You're not authenticated!")

  const package_price = null

  const updateStatus = await Tour.updateOne({ _id: ObjectId(_id) }, { package_price })
  if(updateStatus.nModified > 0) {

    return { _id, package_price }
  }
}