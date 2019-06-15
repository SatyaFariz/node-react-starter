const updateUserPassword = require('../updateUserPassword')

module.exports = async (root, args, { session: { user }}) => {
  if(!user)
    throw new Error("You're not authenticated!")

  return await updateUserPassword(args, user)
}