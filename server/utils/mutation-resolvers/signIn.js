const bcrypt = require('bcrypt')
const getUserByEmailOrUsername = require('../getUserByEmailOrUsername')

module.exports = async (root, { input: { username_or_email, password, user_type }}, { session }) => {

  let action_info = {}
  const notFoundMessage = 'User tidak ditemukan'
  let user = await getUserByEmailOrUsername(username_or_email)
  
  if(!user) {
    action_info.success = false
    action_info.message = notFoundMessage
  } else {
    if(user.user_type && user.user_type.name !== user_type) {
      action_info.success = false
      action_info.message = notFoundMessage
    } else {
      const passwordMatched = await bcrypt.compare(password, user.password)
      if(!passwordMatched) {
        action_info.success = false
        action_info.message = 'Password tidak cocok'
      } else {
        action_info._id = user._id
        action_info.success = true
        action_info.message = 'Login berhasil'

        if(user_type === 'ADMIN') {
          session.admin = user
        } else {
          session.user = user
        }
      }
    }
  }
 
  return action_info
}