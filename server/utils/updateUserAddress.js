const { ObjectId } = require('mongoose').Types
const User = require('../database/model/User')
//const pubsub = require('../pubsub')

module.exports = async ({ address }, user) => {
  const updateStatus = await User.updateOne({ _id: ObjectId(user._id) }, { address })
  if(updateStatus.nModified > 0) {
    user.address = address
    
  //  pubsub.publish('USER_DATA_CHANGED', { userDataChanged: user })

    return user
  }
}