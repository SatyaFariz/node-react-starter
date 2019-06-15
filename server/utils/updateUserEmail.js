const { ObjectId } = require('mongoose').Types
const User = require('../database/model/User')
//const pubsub = require('../pubsub')

module.exports = ({ email }, user) => {
  let action_info = {}

  return new Promise((resolve, reject) => {
    User.updateOne({ _id: ObjectId(user._id) }, { email }, {}, (err, updateStatus) => {
      if(err) {
        if(err.name === 'MongoError' && err.code === 11000) {

          action_info.success = false
          action_info.message = 'Email tidak tersedia.'

        } else {
          action_info.success = false
          action_info.message = 'Terjadi kesalahan. Silahkan coba lagi.'
        }
      } else {
        if(updateStatus.nModified > 0) {
          user.email = email
          action_info.success = true
          action_info.message = 'Email berhasil diubah'

       //   pubsub.publish('USER_DATA_CHANGED', { userDataChanged: user })
        } else {
          action_info.success = false
          action_info.message = email === user.email ? 'Tidak dapat mengubah dengan email yang sama.' : 'Terjadi kesalahan.'
        }
      }

      resolve({ action_info, user_data: user })
    })
  })
}