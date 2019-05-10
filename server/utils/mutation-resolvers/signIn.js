const bcrypt = require('bcrypt')
const getUserByEmailOrUsername = require('../getUserByEmailOrUsername')

module.exports = async (root, { input: { usernameOrEmail, password, userType }}, { session }) => {

  let actionInfo = {}
  const notFoundMessage = 'User tidak ditemukan'
  let user = await getUserByEmailOrUsername(usernameOrEmail)
  
  if(!user) {
    actionInfo.success = false
    actionInfo.message = notFoundMessage
  } else {
    if(user.userType && user.userType.name !== userType) {
      actionInfo.success = false
      actionInfo.message = notFoundMessage
    } else {
      const passwordMatched = await bcrypt.compare(password, user.password)
      if(!passwordMatched) {
        actionInfo.success = false
        actionInfo.message = 'Password tidak cocok'
      } else {
        actionInfo._id = user._id
        actionInfo.success = true
        actionInfo.message = 'Login berhasil'

        if(userType === 'ADMIN') {
          session.admin = user
        } else {
          session.user = user
        }
      }
    }
  }
 
  return actionInfo
}