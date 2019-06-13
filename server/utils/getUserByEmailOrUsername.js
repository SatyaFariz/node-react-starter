const User = require('../database/model/User')

module.exports = async (username_or_email) => {
  const user = await User.findOne({ $or: [
    { username: username_or_email },
    { email: username_or_email }
  ]})
  
  return user
}