const User = require('../database/model/User')

module.exports = async (usernameOrEmail) => {
  const user = await User.findOne({ $or: [
    { username: usernameOrEmail },
    { email: usernameOrEmail }
  ]})
  
  return user
}