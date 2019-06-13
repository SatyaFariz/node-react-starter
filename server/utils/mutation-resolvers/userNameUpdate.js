const updateUserName = require('../updateUserName')

module.exports = async (root, args, { session: { user }}) => {
  if(!user)
    throw new Error("You're not authenticated!")

  return await updateUserName(args, user)
}