const updateUserAddress = require('../updateUserAddress')

module.exports = async (root, args, { session: { user }}) => {
  if(!user)
    throw new Error("You're not authenticated!")

  return await updateUserAddress(args, user)
}