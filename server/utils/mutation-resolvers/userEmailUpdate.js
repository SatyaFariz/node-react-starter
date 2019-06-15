const updateUserEmail = require('../updateUserEmail')

module.exports = async (root, args, { session: { user }}) => {
  if(!user)
    throw new Error("You're not authenticated!")

  return await updateUserEmail(args, user)
}