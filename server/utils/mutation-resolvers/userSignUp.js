const User = require('../../database/model/User')
const hashPassword = require('../hashPassword')

module.exports = async (root, { input }, { session }) => {
  input.password = await hashPassword(input.password.trim())
 
  const newUser = new User({
    user_type: {
      name: 'REGULAR_USER'
    },
    ...input
  })

  let action_info = {}
  let user_id = null

  return new Promise((resolve, reject) => {
    newUser.save(err => {
      if(err) {
        if(err.name === 'MongoError' && err.code === 11000) {

          action_info.success = false
          action_info.message = 'User sudah ada. Silahkan gunakan username atau email lainnya.'

        } else {
          action_info.success = false
          action_info.message = 'Terjadi kesalahan. Silahkan coba lagi.'
        }
      } else {
        // log the user in
        session.user = newUser
        
        action_info.success = true
        action_info.message = 'Registrasi berhasil.'
        user_id = newUser._id.toString()
      }

      resolve({
        user_id,
        action_info
      })
    })
  })
}