const { ObjectId } = require('mongoose').Types
const User = require('../database/model/User')
//const pubsub = require('../pubsub')

module.exports = async ({ phone }, user) => {
  const updateStatus = await User.updateOne({ _id: ObjectId(user._id) }, { phone })
  if(updateStatus.nModified > 0) {
    user.phone = phone
    
  //  pubsub.publish('USER_DATA_CHANGED', { userDataChanged: user })

    return user
  }
}