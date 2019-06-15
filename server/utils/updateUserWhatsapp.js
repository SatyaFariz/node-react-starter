const { ObjectId } = require('mongoose').Types
const User = require('../database/model/User')
//const pubsub = require('../pubsub')

module.exports = async ({ whatsapp }, user) => {
  const updateStatus = await User.updateOne({ _id: ObjectId(user._id) }, { whatsapp })
  if(updateStatus.nModified > 0) {
    user.whatsapp = whatsapp
    
  //  pubsub.publish('USER_DATA_CHANGED', { userDataChanged: user })

    return user
  }
}