const { ObjectId } = require('mongoose').Types
const User = require('../database/model/User')
//const pubsub = require('../pubsub')

module.exports = ({ username }, user) => {
  let action_info = {}

  return new Promise((resolve, reject) => {
    User.updateOne({ _id: ObjectId(user._id) }, { username }, {}, (err, updateStatus) => {
      if(err) {
        if(err.name === 'MongoError' && err.code === 11000) {

          action_info.success = false
          action_info.message = 'Username tidak tersedia.'

        } else {
          action_info.success = false
          action_info.message = 'Terjadi kesalahan. Silahkan coba lagi.'
        }
      } else {
        if(updateStatus.nModified > 0) {
          user.username = username

          action_info.success = true
          action_info.message = 'Username berhasil diubah'
        //  pubsub.publish('USER_DATA_CHANGED', { userDataChanged: user })
        } else {
          action_info.success = false
          action_info.message = username === user.username ? 'Tidak dapat mengubah dengan username yang sama.' : 'Terjadi kesalahan.'
        }
      }

      resolve({ action_info, data: user })
    })
  })
}