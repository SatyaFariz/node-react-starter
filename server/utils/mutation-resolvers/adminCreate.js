const User = require('../../database/model/User')
const hashPassword = require('../hashPassword')

module.exports = async (root, { input }, { session: { admin }}) => {
  if(!admin)
    throw new Error("You're not authenticated!")

  input.password = await hashPassword(input.password.trim())
 
  const newUser = new User({
    user_type: {
      name: 'ADMIN'
    },
    ...input
  })

  let action_info = {}
  let user_data = null

  return new Promise((resolve, reject) => {
    newUser.save((err, doc) => {
      if(err) {
        if(err.name === 'MongoError' && err.code === 11000) {

          action_info.success = false
          action_info.message = 'User sudah ada. Silahkan gunakan username lainnya.'

        } else {
          action_info.success = false
          action_info.message = 'Terjadi kesalahan. Silahkan coba lagi.'
        }
      } else {
        user_data = doc
        action_info.success = true
        action_info.message = 'User berhasil dibuat.'
      }

      resolve({ action_info, user_data })
    })
  })
}