const User = require('../../database/model/User')
const hashPassword = require('../hashPassword')

module.exports = async (root, { input }, { session }) => {
  input.password = await hashPassword(input.password.trim())
 
  const newUser = new User({
    userGroup: {
      name: 'Regular User'
    },
    ...input
  })

  let actionInfo = {}
  let userID = null

  return new Promise((resolve, reject) => {
    newUser.save(err => {
      if(err) {
        if(err.name === 'MongoError' && err.code === 11000) {

          actionInfo.success = false
          actionInfo.message = 'User sudah ada. Silahkan gunakan username atau email lainnya.'

        } else {
          actionInfo.success = false
          actionInfo.message = 'Terjadi kesalahan. Silahkan coba lagi.'
        }
      } else {
        // log the user in
        session.user = newUser
        
        actionInfo.success = true
        actionInfo.message = 'Registrasi berhasil.'
        userID = newUser._id.toString()
      }

      resolve({
        userID,
        actionInfo
      })
    })
  })
}