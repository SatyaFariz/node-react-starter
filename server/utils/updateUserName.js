const { ObjectId } = require('mongoose').Types
const User = require('../database/model/User')
//const pubsub = require('../pubsub')

module.exports = async ({ name }, user) => {
  const updateStatus = await User.updateOne({ _id: ObjectId(user._id) }, { name })
  if(updateStatus.nModified > 0) {
    user.name = name
    
  //  pubsub.publish('USER_DATA_CHANGED', { userDataChanged: user })

    return user
  }
}