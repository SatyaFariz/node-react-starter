const hashPassword = require('./hashPassword')
const bcrypt = require('bcrypt')
const User = require('../database/model/User')
const { ObjectId } = require('mongoose').Types
//const pubsub = require('../pubsub')

module.exports = async ({ current_password, new_password }, user) => {
  const { password, _id } = user

  const match = await bcrypt.compare(current_password, password)
  if(!match)
    return { success: false, message: 'Password anda salah.' }

  const hashedPassword = await hashPassword(new_password.trim())
  const updateStatus = await User.updateOne({ _id: ObjectId(_id) }, { password: hashedPassword })

  if(updateStatus.nModified > 0) {
    user.password = hashedPassword
  //  pubsub.publish('USER_DATA_CHANGED', { userDataChanged: user })
    return { success: true, message: 'Password anda berhasil diubah.' }
  } else {
    return { success: false, message: 'Terjadi kesalahan' }
  }
}